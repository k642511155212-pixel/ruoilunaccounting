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
- `styles.css`: toàn bộ design system responsive; cinematic hero đã được nhúng trực tiếp để không bị lỗi đường dẫn ảnh.
- `app.bundle.js`: self-contained course data and application logic. This single root file prevents missing `content/` files on GitHub Pages.
- `app.js`: editable application source.
- `content/`: dữ liệu chương, câu hỏi, key terms, lý thuyết sâu và bài tập bổ sung.
- `assets/`: bản nguồn của hero và bộ logo/icon để chỉnh sửa hoặc dùng cho social preview.

Important: luôn thay đồng thời ba file gốc `index.html`, `styles.css` và `app.bundle.js`. Logo header, favicon và hero hiển thị trong trang đã được nhúng trực tiếp, nên ba file này vẫn hoạt động kể cả khi GitHub bỏ sót thư mục `assets`. Tuy vậy, nên upload toàn bộ gói để giữ đủ file nguồn và social preview. Progress, notes, and the mistake notebook are stored in the learner's browser using `localStorage`.
