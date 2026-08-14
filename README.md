# Accounting Mastery v0.6 — Deep Theory Edition

## v0.6 theory-depth upgrade

- Teacher mind map remains the primary learning flow for mapped course topics.
- Every theory section now contains expanded concept explanations rather than short bullet-only notes.
- Every lesson section contains a concrete worked example and a step-by-step reasoning flow.
- Added active-recall checks, exam traps, bilingual term links, and visible “Read again here” source locations.
- Chapters outside the supplied teacher map remain clearly labeled **Textbook Extension** and are still explained from the IFRS 5e ebook.
- Existing v0.5 exercise library, generated practice, Accounting Lab, mistake notebook, exam mode, and image fixes are preserved.


Static GitHub Pages study system for Principles of Accounting.

## Core design decision

**Teacher mind map first; textbook/slides second.**

The supplied `4. Principles of Accounting 8.26.html` MindManager map is now the primary conceptual architecture for the Learn experience. The Weygandt & Kimmel IFRS 5e textbook, lecture slides, workbooks, FTU tests, and other supplied sources are used to expand each node with rigorous definitions, worked examples, edge cases, practice, and verification.

### Teacher-flow branches

1. Forms of organizations
2. Assumptions & Principles
3. Elements of Financial Statements
4. Financial Statements
5. Flow of Accounting
6. Merchandising Operations

The **Flow of Accounting** is rendered explicitly as:

Analyze transaction → Journalize → Post to ledger → Trial balance → Adjusting entries → Adjusted trial balance → Financial statements → Closing entries → Post-closing trial balance.

Chapters 1–6 and 14 are reorganized around the relevant teacher-mind-map nodes. Chapters 7–13 and 15 are clearly labeled **Textbook Extensions** where the teacher mind map does not contain an explicit branch.

## Practice system

- **802 interactive explained questions** in the current build.
  - 72 prior/source-adapted interactive questions.
  - 730 course-original variants generated from the supplied question patterns and accounting concepts.
- Every generated question includes:
  - correct answer,
  - detailed reasoning,
  - where to review the concept in the website,
  - teacher-mind-map path where applicable,
  - textbook chapter/LO cross-check,
  - topic, type, chapter, difficulty, and origin tags.
- Full source/textbook exercise library remains separate under **All Exercises**.
- Mistake Notebook keeps the review location attached to missed questions.

## Theory

- 15 chapters available.
- Chapters 1–6 and 14 are **mindmap-first**.
- Chapters 7–13 and 15 are **textbook extensions**.
- English-first explanations with Vietnamese key-term support.
- Theory is expanded rather than reduced to Learning Objectives; each lesson includes rule, meaning, examples, connections, common traps, and source/review pointers.

## Other features

- Teacher Mind Map explorer.
- Accounting Lab with reusable working templates.
- Full Exercise Library from textbook and supplied sources.
- Flashcards, Formula Sheet, Glossary, Search, Exam Mode, progress tracking, and Mistake Notebook.
- Yellow / black visual system.
- Build-free deployment on GitHub Pages.

## GitHub Pages

Upload all files in this folder to the repository root and deploy from `main / (root)` in **Settings → Pages**. No npm/Vite/React build is required.
