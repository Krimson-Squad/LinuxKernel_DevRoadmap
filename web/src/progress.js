// Progress persistence — mirrors the zenithrank pattern:
//  - roadmap_progress:        array of completed lesson ids, e.g. ["1-1", "1-2"]
//  - roadmap_current_lesson:  id of the lesson you last visited
const PROGRESS_KEY = 'roadmap_progress';
const CURRENT_KEY = 'roadmap_current_lesson';

export function lessonId(module, lesson) {
  return `${module}-${lesson}`;
}

export function loadCompleted() {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCompleted(ids) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids));
}

export function isComplete(module, lesson) {
  return loadCompleted().includes(lessonId(module, lesson));
}

export function markComplete(module, lesson) {
  const id = lessonId(module, lesson);
  const next = [...new Set([...loadCompleted(), id])];
  saveCompleted(next);
  return next;
}

export function loadCurrentLesson() {
  return localStorage.getItem(CURRENT_KEY);
}

export function saveCurrentLesson(module, lesson) {
  localStorage.setItem(CURRENT_KEY, lessonId(module, lesson));
}