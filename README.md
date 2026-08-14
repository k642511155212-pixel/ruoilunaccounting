# Accounting Mastery v0.3 — GitHub Pages Edition

Static, build-free Principles of Accounting study website with a yellow / black visual system.

## v0.3 update

- Added **Accounting Lab** with 10 reusable working templates based on the updated class workbooks:
  1. Accounting Equation Analyzer — Assets = Liabilities + Equity
  2. General Journal
  3. T-Account / Ledger
  4. Trial Balance
  5. Adjusting Entries Workspace
  6. Accounting Cycle Worksheet
  7. Correcting Entries
  8. Merchandising Journal
  9. Perpetual FIFO Table
  10. Indirect Cash Flow Builder
- Templates autosave in the browser, include mechanical balance/reconciliation checks, can be reset for a new exercise, and can export the active table to CSV.
- Added a **source-practice map** for the updated workbook sheets: Intro Practice, Transaction Analysis, P2.x, P3.x, P4.x, Chapter 5, P6.8, and P14.x/Practice.
- Added original yellow/black SVG illustrations for the dashboard and lab templates.
- Expanded practice bank to **72 explained questions**.
- Expanded glossary to **55 English ↔ Vietnamese accounting terms**.
- Added updated source entries for `giaphuc practice.xlsx`, `3. ML249 Illustration.xlsx`, and the answer-marked FTU midterm PDF.
- Fixed hash routing so filtered practice/glossary links and `#lab?template=...` routes work correctly.

## Existing study system

- Source-grounded theory modules for Chapters 1, 2, 3, 4, 5, 6, and 14.
- English-first lessons with Vietnamese key-term support.
- Immediate answer feedback with explanations.
- Mistake Notebook stored in `localStorage`.
- Flashcards, glossary, formula sheet, global search, progress tracking, and 30-question timed Exam Mode.
- Worked Schilling Equipment case and a source-quality warning for the internally inconsistent Sky Castle mock.

## Files

- `index.html` — app shell
- `styles.css` — responsive yellow / black theme
- `data.js` — lessons, glossary, formulas, questions, cases, sources, and Accounting Lab catalog
- `app.js` — routing, learning/practice/exam system
- `lab.js` — interactive exercise-template engine
- Visual illustrations are embedded directly in `index.html` as SVG data URLs, so GitHub Pages does not depend on an `assets/` folder.
- `404.html` — GitHub Pages fallback
- `.nojekyll` — disables Jekyll processing

## Publish on GitHub Pages

1. Upload **all files and the `assets` folder** to the repository root.
2. Commit the changes.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**.
6. Save.

No Node.js, npm, React, Vite, or server build is required.

## Updating later

Academic content lives mainly in `data.js`. Interactive worksheets live in `lab.js`. Visual design lives in `styles.css`; SVG artwork is embedded in `index.html` for deployment reliability.

The templates intentionally check structure rather than auto-solving accounting judgment. For example, the Accounting Equation template checks whether transaction effects balance, and the journal/trial-balance templates verify debit-credit equality.
