import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { getModules, lessonTitle } from './lessons.js';

const modules = getModules();
const flatLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ module: m.module, lesson: l.lesson, content: l.content }))
);

function renderMarkdown(md) {
  const html = marked.parse(md, { gfm: true, breaks: true });
  return DOMPurify.sanitize(html, {
    ADD_TAGS: ['video', 'iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder'],
  });
}

export default function App() {
  const [module, setModule] = useState(modules[0].module);
  const [index, setIndex] = useState(0);

  const current = flatLessons[index];
  const currentModule = modules.find((m) => m.module === current.module);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(flatLessons.length - 1, i + 1));

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-white px-6 py-5">
        <h1 className="text-xl font-bold tracking-tight">Linux Kernel Developer Roadmap</h1>
        <p className="text-slate-400 text-sm mt-1">
          {flatLessons.length} lessons across {modules.length} modules
        </p>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 bg-white border-r border-slate-200 h-[calc(100vh-92px)] overflow-y-auto sticky top-0">
          <nav className="p-4 space-y-4">
            {modules.map((m) => {
              const isOpen = m.module === currentModule.module;
              return (
                <div key={m.module}>
                  <button
                    onClick={() => setModule(m.module)}
                    className="w-full text-left font-semibold text-sm text-slate-800 hover:text-blue-700"
                  >
                    {isOpen ? '▾' : '▸'} Module {m.module}: {m.title}
                  </button>
                  {isOpen && (
                    <ul className="mt-2 ml-4 space-y-1 text-sm">
                      {m.lessons.map((l) => {
                        const title = lessonTitle(l.content).replace(/^Lesson\s*\d+\.\d+:\s*/i, '');
                        const active =
                          m.module === current.module && l.lesson === current.lesson;
                        return (
                          <li key={l.lesson}>
                            <button
                              onClick={() =>
                                setIndex(
                                  flatLessons.findIndex(
                                    (f) =>
                                      f.module === m.module && f.lesson === l.lesson
                                  )
                                )
                              }
                              className={`w-full text-left px-2 py-1 rounded-md ${
                                active
                                  ? 'bg-blue-600 text-white'
                                  : 'text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              L{m.module}.{l.lesson} — {title}
                            </button>
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

        {/* Lesson viewer */}
        <main className="flex-1 p-8 min-w-0">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-medium">
              Module {current.module} · Lesson {current.lesson}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-6">
              {lessonTitle(current.content).replace(/Lesson\s*\d+\.\d+:\s*/i, '')}
            </h2>
            <div
              className="lesson-body prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(current.content) }}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-6 flex justify-between">
            <button
              onClick={prev}
              disabled={index === 0}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm font-medium disabled:opacity-40 hover:bg-slate-50"
            >
              ← Previous lesson
            </button>
            <button
              onClick={next}
              disabled={index === flatLessons.length - 1}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium disabled:opacity-40 hover:bg-blue-700"
            >
              Next lesson →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}