// Copies ../.. /Lessons into src/lessons-data so the Vite build (which is rooted
// at web/, as on Vercel) can glob and inline every lesson as raw text.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..', '..');
const source = join(repoRoot, 'Lessons');
const dest = join(here, '..', 'src', 'lessons-data');

// On CI/Vercel only the web/ project folder is uploaded, so the parent Lessons/
// folder is absent — use the committed copy inside src/lessons-data instead.
if (!existsSync(source)) {
  console.log('Parent Lessons/ not found (CI build) — using committed src/lessons-data copy.');
} else {
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  cpSync(source, dest, { recursive: true });
  console.log('Lessons synced into src/lessons-data/');
}