# zuòi lùn Accounting Mastery

An English-taught IFRS Financial Accounting website with 15 open-access chapters, 802 interactive questions, Vietnamese translations for 74 key terms, inline knowledge checks after every lesson section, and 15 fully worked chapter problems.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file và thư mục trong gói này vào nhánh `main` (giữ `index.html` ở thư mục gốc).
3. Vào **Settings → Pages → Build and deployment**.
4. Chọn **GitHub Actions**. Workflow có sẵn sẽ tự triển khai website.

Bạn cũng có thể chọn **Deploy from a branch → main / root** vì website là static HTML, CSS và JavaScript, không cần cài package hay build.

## Cấu trúc

- `index.html`: bản deploy một file, đã chứa luôn logo con ruồi, favicon PNG, cinematic hero, CSS, toàn bộ dữ liệu và JavaScript.
- `styles.css`: bản nguồn riêng của design system responsive để tiện chỉnh sửa sau này.
- `app.bundle.js`: self-contained course data and application logic. This single root file prevents missing `content/` files on GitHub Pages.
- `app.js`: editable application source.
- `content/`: dữ liệu chương, câu hỏi, key terms, lý thuyết sâu và bài tập bổ sung.
- `assets/zuoi-character.png`: hình nhân vật gốc mà bạn cung cấp.
- `assets/brand-mark-user.png`: nhân vật được đặt trên tile gradient đồng bộ với giao diện, dùng làm icon ứng dụng.
- `assets/`: đồng thời chứa hero và các kích thước favicon/app icon.
- `favicon.ico`: favicon desktop nhiều kích thước dành cho các trình duyệt cũ; favicon PNG cũng đã được nhúng trong `index.html`.

Important: để cập nhật website nhanh và tránh cache lệch phiên bản, chỉ cần thay file gốc `index.html`. File này hoạt động độc lập ngay cả khi GitHub bỏ sót mọi thư mục khác. Nên upload thêm `favicon.ico` và toàn bộ gói để giữ đủ bản nguồn, biểu tượng dự phòng và social preview. Progress, notes, and the mistake notebook are stored in the learner's browser using `localStorage`.
