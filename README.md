# Ruoilun Accounting Mastery

Website học Financial Accounting theo IFRS bằng tiếng Việt, gồm 15 chương, 802 câu hỏi tương tác, 74 thuật ngữ Việt–Anh và 15 bài tập tự luận có lời giải từng bước.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file và thư mục trong gói này vào nhánh `main` (giữ `index.html` ở thư mục gốc).
3. Vào **Settings → Pages → Build and deployment**.
4. Chọn **GitHub Actions**. Workflow có sẵn sẽ tự triển khai website.

Bạn cũng có thể chọn **Deploy from a branch → main / root** vì website là static HTML, CSS và JavaScript, không cần cài package hay build.

## Cấu trúc

- `index.html`: khung website và metadata.
- `styles.css`: toàn bộ design system responsive.
- `app.js`: router, học theo chương, luyện tập, glossary, bài tự luận, ghi chú và tiến độ.
- `content/`: dữ liệu chương, câu hỏi, key terms, lý thuyết sâu và bài tập bổ sung.
- `assets/`: cinematic landscape hero và SVG favicon.

Tiến độ, ghi chú và sổ lỗi sai được lưu bằng `localStorage` trên trình duyệt của người học.
