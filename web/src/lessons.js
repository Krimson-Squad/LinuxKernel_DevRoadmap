// Vite glob: import every lesson Markdown file as a raw string at build time.
// The app is in web/src, lessons are two levels up under Lessons/.
const rawLessons = import.meta.glob('../../Lessons/**/L*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const MODULE_TITLES = {
  1: 'Introduction to Linux and the Kernel',
  2: 'Operating System Fundamentals',
  3: 'Learning Rust Programming Language',
  4: 'Getting Started with Linux',
  5: 'Linux Internals',
  6: 'Exploring the Linux Kernel',
  7: 'Setting Up a Kernel Development Environment',
  8: 'Making Your First Contributions',
  9: 'Advanced Linux Kernel Development',
  10: 'Linux Kernel Development with Rust',
  11: 'Contributing to the Linux Community',
  12: 'Linux Kernel Security',
};

// "…/Lessons/Module4/L4.5.md" -> { module: 4, lesson: 5 }
function parseKey(key) {
  const m = key.match(/Module(\d+)\/L\d+\.(\d+)\.md$/);
  return m ? { module: Number(m[1]), lesson: Number(m[2]) } : null;
}

export const LESSONS = Object.entries(rawLessons)
  .map(([key, content]) => ({
    ...parseKey(key),
    content,
  }))
  .filter((l) => l.module != null)
  .sort((a, b) => a.module - b.module || a.lesson - b.lesson);

export function getModules() {
  const modules = [];
  for (const { module, lesson, content } of LESSONS) {
    let entry = modules.find((m) => m.module === module);
    if (!entry) {
      entry = { module, title: MODULE_TITLES[module] || `Module ${module}`, lessons: [] };
      modules.push(entry);
    }
    entry.lessons.push({ lesson, content });
  }
  return modules;
}

export function lessonTitle(raw) {
  const firstHeading = raw.match(/^#{1,3}\s*(.+)$/m);
  return firstHeading ? firstHeading[1].replace(/\*\*/g, '') : 'Untitled lesson';
}