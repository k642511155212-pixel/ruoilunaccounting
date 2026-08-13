# Accounting Mastery — GitHub Pages Edition

Static, build-free study website for Principles of Accounting.

## What is included

- Yellow / gold UI theme matching the requested direction.
- 7 source-grounded theory modules: Chapters 1, 2, 3, 4, 5, 6, and 14.
- English-first lessons with Vietnamese key-term support.
- 62 explained practice questions, including verified/adapted FTU midterm-style questions.
- Immediate answer feedback and detailed reasoning.
- Mistake Notebook stored in `localStorage`.
- Flashcards, glossary, formula sheet, global search, and 30-question timed Exam Mode.
- Two long-form midterm cases:
  - Schilling Equipment: fully worked accounting cycle.
  - Sky Castle: source inconsistency is detected and flagged instead of forcing a fake balance.
- Source page showing how textbook, slides, practice papers, IFRS Foundation, and OpenStax were used.

## Files

- `index.html` — app shell
- `styles.css` — responsive yellow theme
- `data.js` — lessons, glossary, formulas, practice questions, cases, and source manifest
- `app.js` — routing, practice engine, progress, mistake notebook, flashcards, search, and exam mode
- `404.html` — GitHub Pages fallback
- `.nojekyll` — disables Jekyll processing

## Publish on GitHub Pages

### Option A — simplest

1. Create or open your GitHub repository.
2. Upload **all files in this folder to the repository root**.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**.
7. Save.
8. GitHub will generate a public URL such as `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

No Node.js, npm, Vite, React build, or server configuration is required.

## Updating content later

Most academic content is in `data.js`:

- `chapters` → theory modules
- `glossary` → English/Vietnamese terms
- `questions` → practice bank
- `cases` → worked long-form cases
- `formulae` → formula sheet
- `sources` → source manifest

After editing, commit and push to GitHub. GitHub Pages will redeploy automatically.

## Important source-quality note

The site uses supplied practice material as a source of question patterns, but explanations are independently checked against the core textbook logic. It does not reproduce a questionable answer simply because it appears in a study note.
