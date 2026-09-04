import { useState } from 'react';
import { Routes, Route, useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { getModules, lessonTitle } from './lessons.js';
import { QUIZZES } from './quizzes.js';
import {
  lessonId,
  loadCompleted,
  markComplete,
  saveCurrentLesson,
} from './progress.js';

const modules = getModules();
const flatLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ module: m.module, lesson: l.lesson, content: l.content }))
);

function youtubeId(href) {
  const m = String(href || '').match(
    /^(?:https?:)?\/\/(?:www\.|m\.)?(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/))([\w-]{11})/
  );
  return m ? m[1] : null;
}

const renderer = new marked.Renderer();
renderer.link = function ({ href, title, tokens }) {
  const id = youtubeId(href);
  if (id) {
    return (
      `<div class="yt-embed">` +
      `<iframe src="https://www.youtube-nocookie.com/embed/${id}" ` +
      `title="${(title || 'YouTube video').replace(/"/g, '&quot;')}" ` +
      `loading="lazy" allow="accelerometer; autoplay; clipboard-write; encoding; ` +
      `encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` +
      `</div>`
    );
  }
  const text = this.parser.parseInline(tokens);
  return `<a href="${String(href || '')}"${title ? ` title="${title}"` : ''}>${text}</a>`;
};

function renderMarkdown(md) {
  const html = marked.parse(md, { gfm: true, breaks: true, renderer });
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['video', 'iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'loading'],
  });
}

function lessonUrl(m, l) {
  return `/lesson/${m}-${l}`;
}

function Header({ total, completed }) {
  const pct = total ? Math.round((completed / total) * 100) : 0;
  return (
    <header className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between flex-wrap gap-3">
      <div>
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-blue-300">
          Linux Kernel Developer Roadmap
        </Link>
        <p className="text-slate-400 text-sm mt-1">
          {total} lessons across {modules.length} modules · {completed} completed
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-48 h-2 rounded-full bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-sm font-bold text-blue-300">{pct}% complete</span>
      </div>
    </header>
  );
}

function Sidebar({ activeModule, activeLesson, completed }) {
  return (
    <aside className="w-72 shrink-0 bg-white border-r border-slate-200 h-[calc(100vh-92px)] overflow-y-auto sticky top-0">
      <nav className="p-4 space-y-4">
        {modules.map((m) => {
          const isOpen = m.module === activeModule;
          return (
            <div key={m.module}>
              <div className="font-semibold text-sm text-slate-800">{isOpen ? '▾' : '▸'} Module {m.module}: {m.title}</div>
              {isOpen && (
                <ul className="mt-2 ml-4 space-y-1 text-sm">
                  {m.lessons.map((l) => {
                    const title = lessonTitle(l.content).replace(/^Lesson\s*\d+\.\d+:\s*/i, '');
                    const active = m.module === activeModule && l.lesson === activeLesson;
                    const done = completed.includes(lessonId(m.module, l.lesson));
                    return (
                      <li key={l.lesson}>
                        <Link
                          to={lessonUrl(m.module, l.lesson)}
                          className={`w-full text-left px-2 py-1 rounded-md flex items-center gap-2 ${
                            active ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <span
                            className={`shrink-0 size-3.5 rounded-full border text-[9px] leading-none flex items-center justify-center ${
                              done ? 'bg-green-500 border-green-500 text-white' : active ? 'border-white/70' : 'border-slate-300'
                            }`}
                          >
                            {done ? '✓' : ''}
                          </span>
                          <span className="truncate">
                            L{m.module}.{l.lesson} — {title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function QuizCard({ module, lesson, onPass }) {
  const questions = QUIZZES[lessonId(module, lesson)] || [];
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (questions.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-slate-200 p-6 text-center">
        <h3 className="font-bold text-lg mb-2">Quiz</h3>
        <button
          onClick={onPass}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium"
        >
          Mark lesson complete
        </button>
      </div>
    );
  }

  const answered = questions.filter((_, i) => answers[i] !== undefined).length;
  const allAnswered = answered === questions.length;

  const handleSubmit = () => {
    if (!allAnswered) return;
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
    const passed = score >= Math.ceil(questions.length / 2);
    setResult({ score, total: questions.length, passed });
    if (passed) onPass();
  };

  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Quiz — {questions.length} questions</h3>
        <span className="text-xs font-semibold text-slate-500">
          {answered}/{questions.length} answered
        </span>
      </div>

      <div className="space-y-5">
        {questions.map((q, qi) => (
          <div key={qi} className="bg-white rounded-lg border border-slate-200 p-4">
            <p className="font-medium text-sm mb-3">{qi + 1}. {q.q}</p>
            <div className="space-y-2">
              {q.o.map((opt, oi) => {
                let cls = 'border-slate-200 hover:border-blue-400';
                if (result) {
                  if (oi === q.answer) cls = 'border-green-500 bg-green-50';
                  else if (answers[qi] === oi) cls = 'border-red-400 bg-red-50';
                  else cls = 'border-slate-200';
                } else if (answers[qi] === oi) {
                  cls = 'border-blue-500 bg-blue-50';
                }
                return (
                  <button
                    key={oi}
                    disabled={!!result}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`w-full text-left px-3 py-2 rounded-lg border text-sm ${cls} ${
                      result ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!result ? (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="mt-5 w-full py-3 bg-blue-600 text-white rounded-lg font-bold disabled:opacity-40 hover:bg-blue-700"
        >
          Submit quiz
        </button>
      ) : (
        <div
          className={`mt-5 p-4 rounded-lg text-center font-bold ${
            result.passed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {result.score}/{result.total} correct —{' '}
          {result.passed ? 'Lesson passed!' : 'Not passed yet, review the lesson and try again.'}
        </div>
      )}
    </div>
  );
}

function LessonPage({ completed, onPass }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mid, lid] = id.split('-').map(Number);
  const module = mid;
  const lesson = lid;

  const idx = flatLessons.findIndex((f) => f.module === module && f.lesson === lesson);
  if (idx === -1) return <Navigate to="/" replace />;

  const current = flatLessons[idx];
  const prevLesson = idx > 0 ? flatLessons[idx - 1] : null;
  const nextLesson = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;

  saveCurrentLesson(module, lesson);

  return (
    <div className="flex max-w-7xl mx-auto">
      <Sidebar activeModule={module} activeLesson={lesson} completed={completed} />
      <main className="flex-1 p-8 min-w-0">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-medium">
              Module {module} · Lesson {lesson}
            </span>
            {completed.includes(lessonId(module, lesson)) && (
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                ✓ Completed
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-6">
            {lessonTitle(current.content).replace(/Lesson\s*\d+\.\d+:\s*/i, '')}
          </h2>
          <div
            className="lesson-body prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(current.content) }}
          />

          <QuizCard module={module} lesson={lesson} onPass={() => onPass(module, lesson)} />
        </div>

        <div className="max-w-3xl mx-auto mt-6 flex justify-between">
          {prevLesson ? (
            <button
              onClick={() => navigate(lessonUrl(prevLesson.module, prevLesson.lesson))}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm font-medium hover:bg-slate-50"
            >
              ← L{prevLesson.module}.{prevLesson.lesson}
            </button>
          ) : (
            <span />
          )}
          {nextLesson ? (
            <button
              onClick={() => navigate(lessonUrl(nextLesson.module, nextLesson.lesson))}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              L{nextLesson.module}.{nextLesson.lesson} →
            </button>
          ) : (
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              Finish → Home
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

function ResumeButton({ completed }) {
  const firstIncomplete = flatLessons.find((l) => !completed.includes(lessonId(l.module, l.lesson)));
  if (firstIncomplete) {
    return (
      <Link
        to={lessonUrl(firstIncomplete.module, firstIncomplete.lesson)}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
      >
        Resume — L{firstIncomplete.module}.{firstIncomplete.lesson}
      </Link>
    );
  }
  return null;
}

function Home({ completed }) {
  return (
    <main className="max-w-5xl mx-auto p-8 mb-12">
      <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Your journey to kernel development</h2>
        <p className="text-slate-600 mt-2 leading-relaxed">
          Work through the modules in order — each builds on the previous one. Every lesson has a
          video, notes, and a short quiz. Pass the quiz to mark a lesson complete and track your
          progress across the whole roadmap.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ResumeButton completed={completed} />
          <Link
            to={lessonUrl(1, 1)}
            className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm font-medium hover:bg-slate-50"
          >
            Start from Lesson 1.1
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-4">
        {modules.map((m) => {
          const doneCount = m.lessons.filter((l) => completed.includes(lessonId(m.module, l.lesson))).length;
          const pct = Math.round((doneCount / m.lessons.length) * 100);
          return (
            <Link
              key={m.module}
              to={lessonUrl(m.module, m.lessons[0].lesson)}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900">
                  Module {m.module}: {m.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {doneCount}/{m.lessons.length}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs text-slate-500 mt-2">{pct}% complete</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default function App() {
  const [completed, setCompleted] = useState(() => loadCompleted());

  const handlePass = (module, lesson) => {
    markComplete(module, lesson);
    setCompleted(loadCompleted());
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header total={flatLessons.length} completed={completed.length} />
      <Routes>
        <Route path="/" element={<Home completed={completed} />} />
        <Route
          path="/lesson/:id"
          element={<LessonPage completed={completed} onPass={handlePass} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}