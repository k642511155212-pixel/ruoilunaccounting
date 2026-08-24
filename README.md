# zuòi lùn Accounting Mastery

An English-taught IFRS Financial Accounting website with 15 open-access chapters, 802 interactive questions, Vietnamese translations for 74 key terms, inline knowledge checks after every lesson section, and 15 fully worked chapter problems.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file và thư mục trong gói này vào nhánh `main` (giữ `index.html` ở thư mục gốc).
3. Vào **Settings → Pages → Build and deployment**.
4. Chọn **GitHub Actions**. Workflow có sẵn sẽ tự triển khai website.

Bạn cũng có thể chọn **Deploy from a branch → main / root** vì website là static HTML, CSS và JavaScript, không cần cài package hay build.

## Cấu trúc

- `index.html`: khung website và metadata.
- `styles.css`: toàn bộ design system responsive.
- `app.bundle.js`: self-contained course data and application logic. This single root file prevents missing `content/` files on GitHub Pages.
- `app.js`: editable application source.
- `content/`: dữ liệu chương, câu hỏi, key terms, lý thuyết sâu và bài tập bổ sung.
- `assets/`: cinematic landscape hero và SVG favicon.

Important: upload `index.html`, `styles.css`, `app.bundle.js`, and the `assets` folder. The remaining source folders are included for future editing. Progress, notes, and the mistake notebook are stored in the learner's browser using `localStorage`.
