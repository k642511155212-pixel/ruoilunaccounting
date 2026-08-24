(function () {
  "use strict";

  const D = window.ACCOUNTING_DATA || {};
  const Deep = window.AccountingDeepTheory || {};
  const Extra = window.AM_ENHANCEMENTS || { glossaryVi: {}, mistranslations: [], exercises: [] };
  const main = document.getElementById("main");
  const header = document.getElementById("site-header");
  const toastNode = document.getElementById("toast");
  const searchDialog = document.getElementById("search-dialog");
  const globalSearch = document.getElementById("global-search");
  const searchResults = document.getElementById("search-results");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const appState = {
    practiceIndex: 0,
    selectedAnswer: null,
    practiceFilters: { query: "", chapter: "all", difficulty: "all" },
    glossaryQuery: "",
    glossaryLetter: "ALL"
  };

  function readStore(key, fallback) {
    try {
      const raw = localStorage.getItem("ruoilun:" + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem("ruoilun:" + key, JSON.stringify(value));
    } catch (_) {
      toast("Trình duyệt đang chặn lưu cục bộ. Nội dung vẫn có thể đọc bình thường.");
    }
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function norm(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function titleVi(chapter) {
    const titles = {
      ch1: "Kế toán trong hoạt động kinh doanh",
      ch2: "Quy trình ghi nhận nghiệp vụ",
      ch3: "Bút toán điều chỉnh",
      ch4: "Hoàn tất chu trình kế toán",
      ch5: "Kế toán doanh nghiệp thương mại",
      ch6: "Hàng tồn kho",
      ch7: "Kiểm soát nội bộ và tiền",
      ch8: "Kế toán các khoản phải thu",
      ch9: "Tài sản dài hạn",
      ch10: "Nợ phải trả ngắn hạn",
      ch11: "Nợ phải trả dài hạn",
      ch12: "Vốn chủ sở hữu",
      ch13: "Các khoản đầu tư",
      ch14: "Báo cáo lưu chuyển tiền tệ",
      ch15: "Phân tích báo cáo tài chính"
    };
    return titles[chapter.id] || chapter.title;
  }

  function getChapter(id) {
    return (D.chapters || []).find((chapter) => chapter.id === id) || D.chapters?.[0];
  }

  function routeParts() {
    const raw = (location.hash || "#home").slice(1);
    const [path, query = ""] = raw.split("?");
    return {
      parts: path.split("/").filter(Boolean),
      params: new URLSearchParams(query)
    };
  }

  function navigate(route) {
    location.hash = route.startsWith("#") ? route : "#" + route;
  }

  function toast(message) {
    toastNode.textContent = message;
    toastNode.classList.add("show");
    window.clearTimeout(toastNode._timer);
    toastNode._timer = window.setTimeout(() => toastNode.classList.remove("show"), 2600);
  }

  function completedSet() {
    return new Set(readStore("completed", []));
  }

  function attemptsMap() {
    return readStore("attempts", {});
  }

  function notesMap() {
    return readStore("notes", {});
  }

  function wrongIds() {
    return readStore("wrong", []);
  }

  function updateProgressUI() {
    const percent = Math.round((completedSet().size / Math.max(1, D.chapters?.length || 15)) * 100);
    const degrees = Math.round(percent * 3.6) + "deg";
    document.querySelectorAll(".progress-ring").forEach((node) => node.style.setProperty("--progress", degrees));
    const label = document.getElementById("header-progress");
    if (label) label.textContent = percent + "%";
  }

  function chapterCard(chapter) {
    const done = completedSet().has(chapter.id);
    const questionCount = (D.questions || []).filter((q) => q.chapter === chapter.id).length;
    return `
      <a class="chapter-card" href="#chapter/${esc(chapter.id)}">
        <div class="chapter-card-top">
          <span class="chapter-number">CH ${esc(chapter.number)}</span>
          <span class="chapter-status ${done ? "done" : ""}">${done ? "Đã hoàn thành" : "Chưa học"}</span>
        </div>
        <div class="chapter-card-copy">
          <h3>${esc(titleVi(chapter))}</h3>
          <p>${esc(chapter.title)} · ${esc(chapter.sections?.length || 0)} chuyên đề được giải thích theo bản chất.</p>
          <div class="chapter-meta">
            <span>${esc(chapter.objectives?.length || 0)} mục tiêu</span>
            <span>${esc(questionCount)} câu luyện tập</span>
          </div>
        </div>
      </a>`;
  }

  function routeHead(eyebrow, title, copy, actions = "") {
    return `
      <section class="route-head">
        <span class="eyebrow">${esc(eyebrow)}</span>
        <h1>${title}</h1>
        <p>${copy}</p>
        ${actions ? `<div class="route-actions">${actions}</div>` : ""}
      </section>`;
  }

  function heroContours() {
    return `
      <svg class="hero-contours" viewBox="0 0 1440 760" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="contour-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
            <stop offset=".45" stop-color="#ffffff" stop-opacity=".16"/>
            <stop offset="1" stop-color="#f6d9ba" stop-opacity=".28"/>
          </linearGradient>
        </defs>
        <path d="M-80 630 C180 500 360 690 620 565 S1030 370 1510 535" fill="none" stroke="url(#contour-fade)"/>
        <path d="M-90 672 C170 542 382 725 665 603 S1088 414 1518 582" fill="none" stroke="url(#contour-fade)"/>
        <path d="M-120 714 C138 594 405 758 690 650 S1120 482 1530 634" fill="none" stroke="url(#contour-fade)"/>
        <circle cx="1210" cy="166" r="84" fill="none" stroke="#fff" stroke-opacity=".12"/>
        <circle cx="1210" cy="166" r="118" fill="none" stroke="#fff" stroke-opacity=".055"/>
      </svg>`;
  }

  function renderHome() {
    const firstChapters = (D.chapters || []).slice(0, 6).map(chapterCard).join("");
    const corrections = (Extra.mistranslations || []).slice(0, 3).map((item) => `
      <div class="correction-row">
        <del>${esc(item.wrong)}</del>
        <div><strong>${esc(item.right)}</strong>${esc(item.why)}</div>
      </div>`).join("");

    main.innerHTML = `
      <div class="page-shell">
        <div class="content-width">
          <section class="hero" aria-labelledby="hero-title">
            ${heroContours()}
            <div class="hero-inner">
              <div class="hero-copy">
                <span class="eyebrow">Financial Accounting · IFRS · Việt–Anh</span>
                <h1 id="hero-title">Hiểu bản chất.<em>Ghi đúng từng bút toán.</em></h1>
                <p class="hero-lead">Một không gian học kế toán tài chính từ nền tảng đến phân tích báo cáo: lý thuyết đủ sâu, thuật ngữ tiếng Việt chuẩn xác, bài tập theo từng chương và lời giải chỉ rõ vì sao.</p>
                <div class="hero-actions">
                  <a class="button primary" href="#learn">Bắt đầu lộ trình <span aria-hidden="true">→</span></a>
                  <a class="button ghost" href="#practice">Làm câu hỏi ngay</a>
                </div>
              </div>
              <aside class="hero-panel" aria-label="Lộ trình khởi động">
                <div class="hero-panel-label"><span>BẮT ĐẦU ĐÚNG NỀN</span><span>3 điểm chạm</span></div>
                <div class="hero-route">
                  <a href="#chapter/ch1"><b>01</b><span>Phương trình kế toán</span><small>Hiểu bản chất</small></a>
                  <a href="#chapter/ch2"><b>02</b><span>Nợ / Có và chu trình ghi sổ</span><small>Làm chủ cơ chế</small></a>
                  <a href="#chapter/ch3"><b>03</b><span>Cơ sở dồn tích và điều chỉnh</span><small>Đúng kỳ kế toán</small></a>
                </div>
              </aside>
            </div>
          </section>

          <section class="metric-ribbon" aria-label="Quy mô học liệu">
            <div class="metric"><b>${esc(D.chapters?.length || 15)}</b><span>chương theo IFRS</span></div>
            <div class="metric"><b>${esc(D.questions?.length || 0)}</b><span>câu hỏi tương tác</span></div>
            <div class="metric"><b>${esc(D.glossary?.length || 0)}</b><span>key terms Việt–Anh</span></div>
            <div class="metric"><b>Local</b><span>lưu tiến độ riêng tư</span></div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">The learning loop</span><h2>Học theo logic, không học thuộc máy móc.</h2><p>Mỗi chuyên đề đi qua bốn lớp: kinh tế thực → phân tích tài khoản → ghi nhận → tự kiểm tra.</p></div></div>
            <div class="learning-loop">
              <article class="loop-card" data-step="1"><div class="icon-tile">◎</div><h3>Understand</h3><p>Nhận diện sự kiện kinh tế, đối tượng chịu ảnh hưởng và thời điểm ghi nhận.</p></article>
              <article class="loop-card" data-step="2"><div class="icon-tile">◇</div><h3>Analyze</h3><p>Phân loại tài sản, nợ phải trả, vốn, doanh thu, chi phí trước khi nghĩ đến Nợ/Có.</p></article>
              <article class="loop-card" data-step="3"><div class="icon-tile">↗</div><h3>Record</h3><p>Ghi nhật ký, chuyển sổ, lập bảng cân đối thử và truy vết dòng số liệu.</p></article>
              <article class="loop-card" data-step="4"><div class="icon-tile">✓</div><h3>Review</h3><p>Đối chiếu phương trình, Nợ = Có, kỳ ghi nhận và ảnh hưởng lên báo cáo.</p></article>
            </div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">15-chapter path</span><h2>Lộ trình từ nguyên lý đến phân tích.</h2><p>Nội dung bám cấu trúc giáo trình Financial Accounting IFRS 5e, được Việt hóa theo ngữ nghĩa kế toán thay vì dịch từng chữ.</p></div><a class="text-link" href="#learn">Xem đủ 15 chương</a></div>
            <div class="chapter-grid">${firstChapters}</div>
          </section>

          <section class="section-block trust-strip">
            <div class="trust-copy"><span class="eyebrow">Terminology matters</span><h2>Dịch đúng thuật ngữ là bước đầu của tư duy đúng.</h2><p>Website phân biệt rõ doanh thu với lợi nhuận, bên Nợ/Có với tăng/giảm, và lợi nhuận giữ lại với chi phí. Mỗi key term có định nghĩa tiếng Anh lẫn diễn giải tiếng Việt.</p></div>
            <div class="correction-card"><h3>Ba lỗi dịch cần sửa ngay</h3><div class="correction-list">${corrections}</div></div>
          </section>
        </div>
      </div>`;
  }

  function renderLearn() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Lộ trình đầy đủ", "15 chương, một mạch tư duy.", "Bắt đầu từ bản chất của phương trình kế toán, đi qua chu trình ghi sổ và kết thúc ở dòng tiền, tỷ số tài chính. Mỗi chương có mục tiêu, ví dụ, bẫy thi và bài tập riêng.", `<a class="button primary" href="#chapter/ch1">Bắt đầu Chương 01</a><a class="button ghost" href="#exercises">Xem bài tự luận</a>`)}
        <div class="chapter-grid">${(D.chapters || []).map(chapterCard).join("")}</div>
      </div></div>`;
  }

  function viExplanation(point) {
    const clean = String(point || "");
    const lower = clean.toLowerCase();
    if (/^sole trader/.test(lower)) return "Doanh nghiệp một chủ thuộc quyền sở hữu của một cá nhân. Trong mô hình cơ bản, chủ sở hữu thường chịu trách nhiệm vô hạn; tuy vậy, khi ghi sổ vẫn phải tách tài sản và giao dịch của doanh nghiệp khỏi tài sản, giao dịch cá nhân.";
    if (/^partnership/.test(lower)) return "Công ty hợp danh có từ hai chủ sở hữu trở lên. Quyền, nghĩa vụ và trách nhiệm pháp lý phụ thuộc hình thức pháp lý, nhưng sổ kế toán luôn được lập cho đơn vị báo cáo chứ không trộn với giao dịch riêng của từng thành viên.";
    if (/^corporation/.test(lower)) return "Công ty cổ phần là một pháp nhân tách biệt với cổ đông. Cổ đông thường chỉ chịu trách nhiệm trong phạm vi vốn góp; vốn chủ sở hữu của công ty được phản ánh qua vốn cổ phần và các cấu phần vốn liên quan.";
    if (/accounting entity is not|economic\/business entity|economic entity/.test(lower)) return "Giả định đơn vị kế toán yêu cầu xác định rõ ranh giới của đơn vị báo cáo. Chỉ giao dịch thuộc về doanh nghiệp mới được ghi nhận; chi tiêu cá nhân của chủ sở hữu không được làm thay đổi doanh thu hoặc chi phí của doanh nghiệp.";
    if (/^monetary unit/.test(lower)) return "Giả định đơn vị tiền tệ dùng tiền làm thước đo chung để ghi nhận. Một yếu tố có thể rất quan trọng nhưng nếu chưa đo lường đáng tin cậy bằng tiền thì thường không xuất hiện như một số dư tài khoản.";
    if (/^time period/.test(lower)) return "Giả định kỳ kế toán chia vòng đời liên tục của doanh nghiệp thành tháng, quý hoặc năm. Vì vậy doanh thu và chi phí phải được đưa về đúng kỳ, tạo nền tảng cho bút toán điều chỉnh.";
    if (/^going concern/.test(lower)) return "Giả định hoạt động liên tục cho rằng doanh nghiệp sẽ tiếp tục vận hành đủ lâu để sử dụng tài sản và thanh toán nghĩa vụ theo hoạt động thông thường. Nếu giả định này không còn phù hợp, cơ sở đo lường và trình bày có thể phải thay đổi.";
    if (/^historical cost/.test(lower)) return "Giá gốc dựa trên số tiền của giao dịch ban đầu và tạo bằng chứng kiểm chứng được. Tuy nhiên, IFRS có thể yêu cầu hoặc cho phép cơ sở giá trị hiện hành đối với từng khoản mục cụ thể; không được tự ý dùng một cơ sở cho mọi tài sản.";
    if (/^fair value/.test(lower)) return "Giá trị hợp lý là cơ sở đo lường theo điều kiện thị trường tại ngày đo lường. Trong bài tập, chỉ dùng khi chuẩn mực hoặc đề bài yêu cầu; đừng thay giá gốc bằng giá thị trường theo cảm tính.";
    if (/^full disclosure/.test(lower)) return "Nguyên tắc công bố đầy đủ yêu cầu trình bày mọi thông tin trọng yếu giúp người đọc hiểu đúng báo cáo, trong báo cáo chính hoặc thuyết minh. Đầy đủ không có nghĩa là đưa mọi chi tiết vụn vặt.";
    if (/^statement of profit|^income statement/.test(lower)) return "Báo cáo kết quả hoạt động trình bày doanh thu, chi phí và lợi nhuận hoặc lỗ trong một kỳ. Đây là báo cáo theo khoảng thời gian, không phải ảnh chụp tại một ngày.";
    if (/^statement of changes|^statement of retained/.test(lower)) return "Báo cáo biến động vốn chủ sở hữu giải thích vì sao vốn thay đổi trong kỳ: vốn góp, lợi nhuận hoặc lỗ, cổ tức và các biến động vốn khác. Lợi nhuận giữ lại cuối kỳ nối sang báo cáo tình hình tài chính.";
    if (/^statement of financial|^balance sheet/.test(lower)) return "Báo cáo tình hình tài chính trình bày tài sản, nợ phải trả và vốn chủ sở hữu tại một thời điểm. Cụm từ “tại ngày/as at” là dấu hiệu quan trọng để phân biệt với báo cáo theo kỳ.";
    if (/^statement of cash flows/.test(lower)) return "Báo cáo lưu chuyển tiền tệ giải thích tiền vào, tiền ra theo hoạt động kinh doanh, đầu tư và tài chính trong kỳ; số tiền cuối kỳ phải khớp với Cash trên báo cáo tình hình tài chính.";
    const exactTerm = (D.glossary || []).find((item) => {
      const term = item.term.toLowerCase();
      return lower === term || lower.startsWith(term + ":") || lower.startsWith(term + " ");
    });
    if (exactTerm && Extra.glossaryVi?.[exactTerm.term.toLowerCase()]) {
      return Extra.glossaryVi[exactTerm.term.toLowerCase()];
    }
    if (/debit|credit|normal balance/.test(lower)) return "Hãy coi Nợ là bên trái và Có là bên phải. Tăng hay giảm phụ thuộc loại tài khoản: tài sản/chi phí thường tăng bên Nợ; nợ phải trả/vốn/doanh thu thường tăng bên Có. Luôn phân loại tài khoản trước khi chọn bên ghi.";
    if (/cash|receive|pay|collection/.test(lower)) return "Dòng tiền chỉ cho biết Cash thay đổi. Để xác định tài khoản đối ứng, phải hỏi doanh nghiệp đã hoàn thành nghĩa vụ chưa, lợi ích đã được tiêu dùng chưa, hay khoản phải thu/phải trả cũ đang được tất toán.";
    if (/revenue|earned/.test(lower)) return "Doanh thu được ghi khi nghĩa vụ tạo hàng hóa hoặc dịch vụ đã được thực hiện theo mô hình bài học, không mặc nhiên khi thu tiền. Thu trước thường tạo nợ phải trả; thu khoản phải thu chỉ đổi cấu trúc tài sản.";
    if (/expense|incurred|consumed/.test(lower)) return "Chi phí được ghi khi nguồn lực đã bị tiêu dùng hoặc nghĩa vụ đã phát sinh trong kỳ. Chi tiền trước có thể là tài sản trả trước; trả một khoản nợ cũ không tạo chi phí mới.";
    if (/asset|inventory|receivable/.test(lower)) return "Tập trung vào quyền kiểm soát nguồn lực và lợi ích kinh tế tương lai. Một khoản chỉ được xếp là tài sản khi doanh nghiệp kiểm soát nguồn lực hiện tại từ sự kiện đã xảy ra; không phải cứ đã chi tiền là có tài sản.";
    if (/liabilit|payable|obligation/.test(lower)) return "Nợ phải trả phản ánh nghĩa vụ hiện tại phải chuyển giao nguồn lực. Cần phân biệt nghĩa vụ đã phát sinh với một cam kết tương lai chưa đủ điều kiện ghi nhận.";
    if (/adjust|accrual|prepaid|unearned/.test(lower)) return "Bút toán điều chỉnh sửa lệch pha giữa dòng tiền và thời điểm ghi nhận. Xác định phần đã thuộc kỳ này trước, sau đó cập nhật đồng thời một tài khoản báo cáo tình hình tài chính và một tài khoản kết quả kinh doanh.";
    if (/inventory|cost of goods sold|fifo|average/.test(lower)) return "Tách dòng vận động vật chất khỏi giả định dòng chi phí. Mục tiêu là phân bổ tổng chi phí hàng sẵn có giữa giá vốn hàng bán và tồn kho cuối kỳ, rồi kiểm tra hai phần cộng lại bằng tổng ban đầu.";
    if (/depreciation|amortization|depletion/.test(lower)) return "Đây là phân bổ chi phí theo thời gian hoặc mức khai thác, không phải đo mức mất giá thị trường. Ghi nhận chi phí kỳ này và cập nhật tài khoản điều chỉnh hoặc giá trị ghi sổ liên quan.";
    if (/cash flow|operating|investing|financing/.test(lower)) return "Phân loại theo bản chất giao dịch: hoạt động cốt lõi tạo doanh thu, mua/bán nguồn lực dài hạn, hay thay đổi nguồn tài trợ. Sau phân loại, tổng ba nhóm phải giải thích đúng biến động tiền.";
    return "Đừng ghi nhớ câu này như một khẩu hiệu. Hãy diễn giải thành ba câu hỏi: sự kiện kinh tế nào đã xảy ra, yếu tố báo cáo nào thay đổi, và điều kiện ghi nhận đã thỏa ở kỳ hiện tại hay chưa.";
  }

  function pointTitle(point) {
    const text = String(point || "");
    const colon = text.indexOf(":");
    return colon > 0 && colon < 62 ? text.slice(0, colon) : text.slice(0, 105) + (text.length > 105 ? "…" : "");
  }

  function termsHtml(terms) {
    if (!terms?.length) return "";
    return `<div class="term-row">${terms.map((term) => `<button class="term-chip" type="button" data-term="${esc(term)}">${esc(term)}</button>`).join("")}</div>`;
  }

  function renderChapter(id) {
    const chapter = getChapter(id);
    if (!chapter) return renderNotFound();
    const index = D.chapters.indexOf(chapter);
    const prev = D.chapters[index - 1];
    const next = D.chapters[index + 1];
    const done = completedSet().has(chapter.id);
    const nav = chapter.sections.map((section, i) => `<a href="#section-${i + 1}"><b>${i + 1}</b><span>${esc(section.title)}</span></a>`).join("");
    const objectives = (chapter.objectives || []).map((item, i) => `<div class="objective"><b>LO${i + 1}</b><span>${esc(item)}</span></div>`).join("");
    const why = typeof Deep.whyChapter === "function" ? Deep.whyChapter(chapter) : chapter.subtitle;

    const sections = chapter.sections.map((section, sIndex) => {
      const points = (section.body || []).map((point, pIndex) => {
        const deep = typeof Deep.explainPoint === "function" ? Deep.explainPoint(point, section, chapter) : point;
        return `
          <details class="point-card" ${pIndex === 0 ? "open" : ""}>
            <summary><b>${pIndex + 1}</b><span class="point-title">${esc(pointTitle(point))}</span><span class="point-toggle" aria-hidden="true"></span></summary>
            <div class="point-explanation">
              <div class="explain-pane"><span>Accounting logic · EN</span>${esc(deep)}</div>
              <div class="explain-pane vi"><span>Diễn giải tiếng Việt</span>${esc(viExplanation(point))}</div>
            </div>
          </details>`;
      }).join("");
      const steps = typeof Deep.workedSteps === "function" ? Deep.workedSteps(section) : [
        "Đọc dữ kiện và xác định yêu cầu.",
        "Nêu nguyên tắc áp dụng.",
        "Ghi nhận hoặc tính toán từng bước.",
        "Kiểm tra tính cân bằng và hợp lý."
      ];
      const recalls = typeof Deep.activeRecall === "function" ? Deep.activeRecall(section, chapter) : [];
      return `
        <section class="lesson-section" id="section-${sIndex + 1}">
          <span class="lesson-index">Chuyên đề ${String(sIndex + 1).padStart(2, "0")}</span>
          <h2>${esc(section.title)}</h2>
          <p class="lesson-lead">${esc(section.lead)}</p>
          <div class="point-stack">${points}</div>
          <div class="lesson-two-col">
            <div class="worked-example">
              <span class="micro-label">Worked example · ví dụ có quy trình</span>
              <h3>Từ dữ kiện đến kết luận</h3>
              <p>${esc(section.example)}</p>
              <div class="solution-steps">${steps.map((step) => `<div class="solution-step">${esc(step)}</div>`).join("")}</div>
            </div>
            <div class="exam-trap">
              <span class="micro-label">Exam trap · bẫy thường gặp</span>
              <h3>Dừng lại trước khi chọn đáp án</h3>
              <p>${esc(section.trap)}</p>
            </div>
          </div>
          <div class="section-tools">
            <button class="tool-button note-toggle" type="button" data-note-key="${esc(chapter.id + ":" + sIndex)}">＋ Ghi chú chuyên đề</button>
            <button class="tool-button recall-toggle" type="button" data-recall="${esc(JSON.stringify(recalls))}">↻ Active recall</button>
            <span class="tool-button">Nguồn: ${esc(typeof Deep.reviewRef === "function" ? Deep.reviewRef(chapter, section) : section.bookRef || chapter.source)}</span>
          </div>
          <div class="inline-slot"></div>
          ${termsHtml(section.terms)}
        </section>`;
    }).join("");

    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        <div class="chapter-shell">
          <aside class="chapter-aside">
            <div class="aside-label">Trong chương</div>
            <nav>${nav}</nav>
            <div class="chapter-nav-buttons">
              ${prev ? `<a class="button ghost small" href="#chapter/${prev.id}">← Ch ${prev.number}</a>` : "<span></span>"}
              ${next ? `<a class="button ghost small" href="#chapter/${next.id}">Ch ${next.number} →</a>` : ""}
            </div>
          </aside>
          <article class="chapter-main">
            <header class="chapter-cover">
              <div class="chapter-cover-top">
                <div><span class="eyebrow">CHƯƠNG ${esc(chapter.number)} · ${esc(chapter.title)}</span><h1>${esc(titleVi(chapter))}</h1><p>${esc(chapter.subtitle)}</p></div>
                <button class="complete-button ${done ? "done" : ""}" type="button" data-complete="${chapter.id}">${done ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}</button>
              </div>
              <div class="objective-grid">${objectives}</div>
            </header>
            <div class="logic-banner"><div><strong>Vì sao chương này quan trọng?</strong><p>${esc(why)}</p></div><span class="logic-equation">${chapter.id === "ch1" ? "A = L + E" : "Substance → Analyze → Record"}</span></div>
            ${sections}
          </article>
        </div>
      </div></div>`;

    bindChapterEvents(chapter);
  }

  function bindChapterEvents(chapter) {
    document.querySelector("[data-complete]")?.addEventListener("click", (event) => {
      const set = completedSet();
      if (set.has(chapter.id)) set.delete(chapter.id);
      else set.add(chapter.id);
      writeStore("completed", [...set]);
      event.currentTarget.classList.toggle("done", set.has(chapter.id));
      event.currentTarget.textContent = set.has(chapter.id) ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành";
      updateProgressUI();
      toast(set.has(chapter.id) ? "Đã lưu tiến độ chương." : "Đã bỏ đánh dấu hoàn thành.");
    });

    document.querySelectorAll(".term-chip").forEach((button) => button.addEventListener("click", () => {
      navigate("glossary?term=" + encodeURIComponent(button.dataset.term));
    }));

    document.querySelectorAll(".note-toggle").forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.noteKey;
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      const sectionIndex = Number(key.split(":")[1]);
      const existing = notesMap()[key]?.text || "";
      slot.innerHTML = `
        <div class="inline-note">
          <textarea aria-label="Ghi chú cá nhân" placeholder="Viết lại nguyên tắc bằng lời của bạn…">${esc(existing)}</textarea>
          <div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Đóng</button><button class="button primary small save-note" type="button">Lưu ghi chú</button></div>
        </div>`;
      slot.querySelector("textarea").focus();
      slot.querySelector(".cancel-note").addEventListener("click", () => slot.innerHTML = "");
      slot.querySelector(".save-note").addEventListener("click", () => {
        const notes = notesMap();
        const text = slot.querySelector("textarea").value.trim();
        if (text) {
          notes[key] = { text, chapter: chapter.id, section: sectionIndex, title: chapter.sections[sectionIndex].title, updated: new Date().toISOString() };
        } else {
          delete notes[key];
        }
        writeStore("notes", notes);
        toast(text ? "Đã lưu ghi chú trên thiết bị này." : "Ghi chú trống đã được xóa.");
        slot.innerHTML = "";
      });
    }));

    document.querySelectorAll(".recall-toggle").forEach((button) => button.addEventListener("click", () => {
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      let prompts = [];
      try { prompts = JSON.parse(button.dataset.recall || "[]"); } catch (_) {}
      slot.innerHTML = `<div class="inline-note"><strong>Active recall — trả lời mà không nhìn phần trên</strong><ol>${prompts.map((item) => `<li>${esc(item)}</li>`).join("")}</ol><div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Đóng</button></div></div>`;
      slot.querySelector(".cancel-note").addEventListener("click", () => slot.innerHTML = "");
    }));
  }

  function filteredQuestions() {
    const f = appState.practiceFilters;
    const query = norm(f.query);
    return (D.questions || []).filter((q) => {
      const chapterOk = f.chapter === "all" || q.chapter === f.chapter;
      const difficultyOk = f.difficulty === "all" || q.difficulty === f.difficulty;
      const queryOk = !query || norm(q.question + " " + q.topic + " " + q.options.join(" ")).includes(query);
      return chapterOk && difficultyOk && queryOk;
    });
  }

  function practiceStats() {
    const attempts = Object.values(attemptsMap());
    const correct = attempts.filter((item) => item.correct).length;
    return { attempted: attempts.length, correct, rate: attempts.length ? Math.round(correct / attempts.length * 100) : 0 };
  }

  function renderPractice(chapterId) {
    if (chapterId) appState.practiceFilters.chapter = chapterId;
    const chapterOptions = (D.chapters || []).map((ch) => `<option value="${ch.id}" ${appState.practiceFilters.chapter === ch.id ? "selected" : ""}>Ch ${ch.number} · ${esc(titleVi(ch))}</option>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Question studio", "Luyện tập và hiểu từng lựa chọn.", "802 câu hỏi được gắn chương, chủ đề và độ khó. Sau khi trả lời, bạn nhận lời giải đúng, nguyên nhân phương án sai và đường dẫn ôn lại.", `<a class="button ghost" href="#notes">Xem sổ lỗi sai</a>`)}
        <div class="filter-bar">
          <input id="practice-search" type="search" value="${esc(appState.practiceFilters.query)}" placeholder="Tìm theo nội dung hoặc chủ đề…" />
          <select id="practice-chapter" aria-label="Lọc theo chương"><option value="all">Tất cả chương</option>${chapterOptions}</select>
          <select id="practice-difficulty" aria-label="Lọc theo độ khó">
            <option value="all">Mọi độ khó</option>
            <option value="easy" ${appState.practiceFilters.difficulty === "easy" ? "selected" : ""}>Dễ</option>
            <option value="medium" ${appState.practiceFilters.difficulty === "medium" ? "selected" : ""}>Trung bình</option>
            <option value="hard" ${appState.practiceFilters.difficulty === "hard" ? "selected" : ""}>Khó</option>
          </select>
        </div>
        <div id="practice-root"></div>
      </div></div>`;
    bindPracticeFilters();
    renderQuestion();
  }

  function bindPracticeFilters() {
    let timer;
    document.getElementById("practice-search")?.addEventListener("input", (event) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        appState.practiceFilters.query = event.target.value;
        appState.practiceIndex = 0;
        appState.selectedAnswer = null;
        renderQuestion();
      }, 160);
    });
    document.getElementById("practice-chapter")?.addEventListener("change", (event) => {
      appState.practiceFilters.chapter = event.target.value;
      appState.practiceIndex = 0;
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("practice-difficulty")?.addEventListener("change", (event) => {
      appState.practiceFilters.difficulty = event.target.value;
      appState.practiceIndex = 0;
      appState.selectedAnswer = null;
      renderQuestion();
    });
  }

  function breakdownText(question, index) {
    if (index === question.answer) return question.explanation;
    if (index === appState.selectedAnswer) return "Phương án bạn chọn không đồng thời thỏa bản chất tài khoản, thời điểm ghi nhận hoặc chiều Nợ/Có. Hãy phân loại các yếu tố trước khi nhìn vào tên tài khoản.";
    return "Không đúng vì lựa chọn này không phù hợp đầy đủ với nguyên tắc được nêu trong lời giải. Kiểm tra lại sự kiện kinh tế và tác động kép.";
  }

  function viQuestionExplanation(question) {
    const text = norm(question.topic + " " + question.question + " " + question.explanation);
    if (/accrued revenue|doanh thu don tich/.test(text)) return "Dịch vụ đã hoàn thành nên doanh thu thuộc kỳ hiện tại. Chưa thu tiền làm phát sinh quyền đòi tiền: Accounts Receivable là tài sản tăng bên Nợ; Service Revenue làm tăng vốn chủ sở hữu và tăng bên Có.";
    if (/accrued expense|chi phi don tich/.test(text)) return "Chi phí đã phát sinh trong kỳ dù chưa trả tiền. Vì vậy ghi Nợ tài khoản chi phí và ghi Có một khoản phải trả; không chờ đến ngày chi tiền mới ghi nhận.";
    if (/unearned revenue|deferred revenue/.test(text)) return "Tiền nhận trước chưa phải toàn bộ doanh thu vì doanh nghiệp còn nghĩa vụ cung cấp hàng hóa hoặc dịch vụ. Khi thực hiện nghĩa vụ, giảm Unearned Revenue và tăng Revenue cho phần đã kiếm được.";
    if (/prepaid|tra truoc/.test(text)) return "Khoản trả trước ban đầu là tài sản vì lợi ích chưa được tiêu dùng. Cuối kỳ, phần đã sử dụng được chuyển sang chi phí; phần còn lại tiếp tục là tài sản.";
    if (/depreciation|khau hao/.test(text)) return "Khấu hao phân bổ giá trị phải khấu hao cho kỳ sử dụng. Ghi Nợ Depreciation Expense và ghi Có Accumulated Depreciation; không ghi giảm trực tiếp nguyên giá trong mô hình cơ bản.";
    if (/inventory|fifo|average cost|cost of goods sold/.test(text)) return "Hãy phân bổ tổng chi phí hàng sẵn có giữa giá vốn và tồn kho cuối kỳ theo đúng giả định dòng chi phí. Sau khi tính, Cost of Goods Sold cộng Ending Inventory phải khớp tổng chi phí ban đầu.";
    if (/cash flow|operating|investing|financing/.test(text)) return "Phân loại dòng tiền theo bản chất giao dịch, không theo tên tài khoản đơn lẻ: hoạt động tạo doanh thu thường xuyên, đầu tư vào tài sản dài hạn, hay huy động và hoàn trả nguồn tài trợ.";
    if (/debit|credit|journal|entry/.test(text)) return "Trước hết phân loại từng tài khoản và xác định tăng hay giảm. Sau đó dùng số dư bình thường để chọn bên Nợ/Có, cuối cùng kiểm tra tổng Nợ bằng tổng Có.";
    if (/revenue|expense|cash/.test(text)) return "Không suy ra doanh thu hoặc chi phí chỉ từ dòng tiền. Cần xác định doanh thu đã được kiếm hay nguồn lực đã bị tiêu dùng trong kỳ, rồi mới chọn tài khoản và thời điểm ghi nhận.";
    return "Đáp án đúng là phương án duy nhất phù hợp đồng thời với bản chất kinh tế, điều kiện ghi nhận và tác động kép. Hãy đối chiếu từng lựa chọn với ba câu hỏi đó, rồi kiểm tra tính cân bằng trước khi kết luận.";
  }

  function renderQuestion() {
    const root = document.getElementById("practice-root");
    if (!root) return;
    const questions = filteredQuestions();
    if (!questions.length) {
      root.innerHTML = `<div class="empty-state"><strong>Không tìm thấy câu phù hợp.</strong><span>Thử đổi từ khóa, chương hoặc độ khó.</span></div>`;
      return;
    }
    if (appState.practiceIndex >= questions.length) appState.practiceIndex = questions.length - 1;
    const q = questions[appState.practiceIndex];
    const chapter = getChapter(q.chapter);
    const selected = appState.selectedAnswer;
    const answered = selected !== null;
    const isCorrect = answered && selected === q.answer;
    const options = q.options.map((option, i) => {
      let cls = "";
      if (answered && i === q.answer) cls = "correct";
      else if (answered && i === selected) cls = "wrong";
      return `<button class="option-button ${cls}" type="button" data-answer="${i}" ${answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span class="option-copy">${esc(option)}</span></button>`;
    }).join("");
    const feedback = answered ? `
      <section class="feedback">
        <div class="feedback-head ${isCorrect ? "" : "wrong"}"><strong>${isCorrect ? "Chính xác — bạn đã nhận diện đúng bản chất." : "Chưa chính xác — cùng truy nguyên điểm sai."}</strong><span>${isCorrect ? "✓" : "↻"}</span></div>
        <div class="feedback-body">
          <h3>Vì sao đáp án ${String.fromCharCode(65 + q.answer)} đúng?</h3>
          <p>${esc(q.explanation)}</p>
          <div class="explain-pane vi"><span>Diễn giải tiếng Việt</span>${esc(viQuestionExplanation(q))}</div>
          <div class="option-breakdown">${q.options.map((option, i) => `<div class="breakdown-row"><b>${String.fromCharCode(65 + i)}</b><span><strong>${esc(option)}</strong><br>${esc(breakdownText(q, i))}</span></div>`).join("")}</div>
          <div class="review-path">Ôn lại: <a class="text-link" href="#chapter/${esc(q.chapter)}">${esc(titleVi(chapter))}</a> · Nguồn câu hỏi: ${esc(q.source || "Source pack")}</div>
        </div>
      </section>` : "";
    const stats = practiceStats();
    const wrongQuestions = wrongIds().slice(-5).reverse().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    root.innerHTML = `
      <div class="practice-layout">
        <section class="question-card">
          <div class="question-top"><span class="question-count">Câu ${appState.practiceIndex + 1} / ${questions.length}</span><div class="question-tags"><span class="tag accent">${esc(q.topic)}</span><span class="tag">${esc(q.difficulty || "medium")}</span><span class="tag">Ch ${esc(chapter?.number || "")}</span></div></div>
          <h2>${esc(q.question)}</h2>
          <div class="options">${options}</div>
          ${feedback}
          <div class="question-actions">
            <button class="button ghost small" type="button" id="prev-question" ${appState.practiceIndex === 0 ? "disabled" : ""}>← Câu trước</button>
            <div><button class="button ghost small" type="button" id="shuffle-question">Câu ngẫu nhiên</button><button class="button primary small" type="button" id="next-question">Câu tiếp →</button></div>
          </div>
        </section>
        <aside class="practice-aside">
          <div class="aside-card"><h3>Tiến độ luyện tập</h3><div class="score-grid"><div class="score-box"><b>${stats.attempted}</b><span>đã làm</span></div><div class="score-box"><b>${stats.rate}%</b><span>đúng</span></div></div></div>
          <div class="aside-card"><h3>Câu cần ôn lại</h3><div class="mistake-list-mini">${wrongQuestions.length ? wrongQuestions.map((item) => `<button type="button" data-question-id="${esc(item.id)}">${esc(item.id)} · ${esc(item.topic)}</button>`).join("") : "<span>Chưa có câu sai nào được lưu.</span>"}</div></div>
        </aside>
      </div>`;

    root.querySelectorAll("[data-answer]").forEach((button) => button.addEventListener("click", () => {
      const answer = Number(button.dataset.answer);
      appState.selectedAnswer = answer;
      const attempts = attemptsMap();
      attempts[q.id] = { selected: answer, correct: answer === q.answer, at: new Date().toISOString() };
      writeStore("attempts", attempts);
      const wrong = new Set(wrongIds());
      if (answer === q.answer) wrong.delete(q.id);
      else wrong.add(q.id);
      writeStore("wrong", [...wrong]);
      renderQuestion();
    }));
    document.getElementById("prev-question")?.addEventListener("click", () => {
      appState.practiceIndex = Math.max(0, appState.practiceIndex - 1);
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("next-question")?.addEventListener("click", () => {
      appState.practiceIndex = (appState.practiceIndex + 1) % questions.length;
      appState.selectedAnswer = null;
      renderQuestion();
    });
    document.getElementById("shuffle-question")?.addEventListener("click", () => {
      appState.practiceIndex = Math.floor(Math.random() * questions.length);
      appState.selectedAnswer = null;
      renderQuestion();
    });
    root.querySelectorAll("[data-question-id]").forEach((button) => button.addEventListener("click", () => {
      const index = questions.findIndex((item) => item.id === button.dataset.questionId);
      if (index >= 0) {
        appState.practiceIndex = index;
        appState.selectedAnswer = null;
        renderQuestion();
      } else {
        const target = (D.questions || []).find((item) => item.id === button.dataset.questionId);
        if (target) {
          appState.practiceFilters = { query: target.id, chapter: "all", difficulty: "all" };
          renderPractice();
        }
      }
    }));
  }

  function renderGlossary(termQuery) {
    appState.glossaryQuery = termQuery || appState.glossaryQuery;
    const query = norm(appState.glossaryQuery);
    const filtered = (D.glossary || []).filter((item) => {
      const letterOk = appState.glossaryLetter === "ALL" || item.term.toUpperCase().startsWith(appState.glossaryLetter);
      const queryOk = !query || norm(item.term + " " + item.vi + " " + item.definition + " " + (Extra.glossaryVi?.[item.term.toLowerCase()] || "")).includes(query);
      return letterOk && queryOk;
    });
    const cards = filtered.map((item) => `
      <article class="term-card" id="term-${norm(item.term).replace(/[^a-z0-9]+/g, "-")}">
        <div class="term-card-top"><div><h3>${esc(item.term)}</h3><div class="term-vi">${esc(item.vi)}</div></div><span class="term-chapter">${esc(item.chapter)}</span></div>
        <div class="definition-block">
          <div><span>Definition · EN</span>${esc(item.definition)}</div>
          <div><span>Giải thích chuẩn · VI</span>${esc(Extra.glossaryVi?.[item.term.toLowerCase()] || viExplanation(item.definition))}</div>
        </div>
      </article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Bilingual glossary", "Key terms Việt–Anh, rõ đến bản chất.", "Không chỉ dịch từ: mỗi thuật ngữ có định nghĩa tiếng Anh, tên gọi tiếng Việt và diễn giải để tránh nhầm lẫn khi làm bài.")}
        <div class="glossary-toolbar">
          <input class="glossary-search" id="glossary-search" type="search" value="${esc(appState.glossaryQuery)}" placeholder="Tìm asset, retained earnings, doanh thu…" />
          <div class="alphabet-filter"><button class="${appState.glossaryLetter === "ALL" ? "active" : ""}" type="button" data-letter="ALL">ALL</button>${letters.map((letter) => `<button class="${appState.glossaryLetter === letter ? "active" : ""}" type="button" data-letter="${letter}">${letter}</button>`).join("")}</div>
        </div>
        <div class="glossary-grid">${cards || `<div class="empty-state"><strong>Không có thuật ngữ phù hợp.</strong><span>Thử từ khóa khác hoặc chọn ALL.</span></div>`}</div>
      </div></div>`;
    let timer;
    document.getElementById("glossary-search")?.addEventListener("input", (event) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        appState.glossaryQuery = event.target.value;
        renderGlossary();
      }, 140);
    });
    document.querySelectorAll("[data-letter]").forEach((button) => button.addEventListener("click", () => {
      appState.glossaryLetter = button.dataset.letter;
      renderGlossary();
    }));
  }

  function renderExercises(chapterId) {
    const chapter = getChapter(chapterId || Extra.exercises?.[0]?.chapter || "ch1");
    const exercise = (Extra.exercises || []).find((item) => item.chapter === chapter.id);
    const pack = (D.sourcePracticePacks || []).find((item) => String(item.chapter || "").includes(String(Number(chapter.number)))) || D.sourcePracticePacks?.[0];
    const tabs = (D.chapters || []).map((ch) => `<button class="${ch.id === chapter.id ? "active" : ""}" type="button" data-exercise-chapter="${ch.id}">Ch ${ch.number}</button>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Chapter exercises", "Bài tập rõ theo từng chương.", "Mỗi bài nêu yêu cầu, dữ kiện, quy trình giải và điểm kiểm tra cuối. Lời giải được mở khi bạn cần đối chiếu, giúp tự làm trước khi xem đáp án.")}
        <div class="exercise-tabs" aria-label="Chọn chương">${tabs}</div>
        <div class="exercise-summary">
          <div class="exercise-brief"><span class="eyebrow">CHƯƠNG ${esc(chapter.number)}</span><h2>${esc(titleVi(chapter))}</h2><p>${esc(chapter.objectives?.[0] || chapter.subtitle)}</p></div>
          <aside class="exercise-map"><h3>Quy trình đề nghị</h3><ol><li>Tóm tắt sự kiện kinh tế.</li><li>Nêu nguyên tắc và tài khoản.</li><li>Tính hoặc ghi từng bước.</li><li>Đối chiếu tổng và kết luận.</li></ol>${pack ? `<p><small>Source pack: ${esc(pack.source)} · ${esc(pack.note)}</small></p>` : ""}</aside>
        </div>
        ${exercise ? `
          <article class="exercise-card">
            <header><div><span class="tag accent">Ch ${esc(chapter.number)}</span><span class="tag">${esc(exercise.level || "Vận dụng")}</span></div><h3>${esc(exercise.title)}</h3><p class="prompt">${esc(exercise.prompt)}</p></header>
            <details><summary><span>Mở lời giải chi tiết</span><span aria-hidden="true">＋</span></summary><div class="exercise-solution">${(exercise.solution || []).map((step) => `<div>${esc(step)}</div>`).join("")}</div></details>
          </article>` : `<div class="empty-state"><strong>Bài tập đang được cập nhật.</strong><span>Chọn chương khác để tiếp tục.</span></div>`}
      </div></div>`;
    document.querySelectorAll("[data-exercise-chapter]").forEach((button) => button.addEventListener("click", () => navigate("exercises/" + button.dataset.exerciseChapter)));
  }

  function renderNotes() {
    const entries = Object.entries(notesMap());
    const noteCards = entries.map(([key, note]) => {
      const chapter = getChapter(note.chapter);
      return `
        <article class="note-card">
          <div class="note-card-top"><div><h3>${esc(note.title)}</h3><small>Ch ${esc(chapter?.number || "")} · cập nhật ${esc(new Date(note.updated).toLocaleDateString("vi-VN"))}</small></div></div>
          <p>${esc(note.text)}</p>
          <div class="note-card-actions"><button type="button" data-open-note="${esc(key)}">Mở chuyên đề</button><button type="button" data-delete-note="${esc(key)}">Xóa</button></div>
        </article>`;
    }).join("");
    const wrong = wrongIds().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    const wrongCards = wrong.slice(-12).reverse().map((q) => `
      <article class="note-card"><div class="note-card-top"><div><h3>${esc(q.topic)}</h3><small>${esc(q.id)} · Ch ${esc(getChapter(q.chapter)?.number || "")}</small></div></div><p>${esc(q.question)}</p><div class="note-card-actions"><button type="button" data-review-question="${esc(q.id)}">Làm lại câu này</button></div></article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Personal notebook", "Ghi chú và sổ lỗi sai.", "Mọi dữ liệu được lưu cục bộ trong trình duyệt của bạn. Ghi chú bám đúng chuyên đề; câu trả lời sai được gom lại để luyện có chủ đích.")}
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">My notes</span><h2>Ghi chú chuyên đề</h2></div></div><div class="notes-grid">${noteCards || `<div class="empty-state"><strong>Chưa có ghi chú.</strong><span>Vào một chương và chọn “Ghi chú chuyên đề”.</span></div>`}</div></section>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">Mistake notebook</span><h2>Câu cần làm lại</h2></div></div><div class="notes-grid">${wrongCards || `<div class="empty-state"><strong>Sổ lỗi sai đang trống.</strong><span>Làm câu hỏi để hệ thống tự tạo danh sách ôn tập.</span></div>`}</div></section>
      </div></div>`;
    document.querySelectorAll("[data-open-note]").forEach((button) => button.addEventListener("click", () => {
      const note = notesMap()[button.dataset.openNote];
      if (note) navigate("chapter/" + note.chapter);
    }));
    document.querySelectorAll("[data-delete-note]").forEach((button) => button.addEventListener("click", () => {
      if (!window.confirm("Xóa ghi chú này? Thao tác không thể hoàn tác.")) return;
      const notes = notesMap();
      delete notes[button.dataset.deleteNote];
      writeStore("notes", notes);
      renderNotes();
    }));
    document.querySelectorAll("[data-review-question]").forEach((button) => button.addEventListener("click", () => {
      const q = (D.questions || []).find((item) => item.id === button.dataset.reviewQuestion);
      if (!q) return;
      appState.practiceFilters = { query: q.id, chapter: "all", difficulty: "all" };
      navigate("practice");
    }));
  }

  function renderProgress() {
    const completed = completedSet();
    const total = D.chapters?.length || 15;
    const percent = Math.round(completed.size / total * 100);
    const attempts = practiceStats();
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Learning progress", "Tiến độ là tín hiệu, không phải áp lực.", "Đánh dấu chương đã hiểu, theo dõi câu đã làm và quay lại đúng nơi còn yếu. Dữ liệu không rời khỏi thiết bị.")}
        <div class="progress-layout">
          <section class="progress-hero-card"><div><div class="big-ring" style="--progress:${percent * 3.6}deg"><div><b>${percent}%</b></div></div><h2>${completed.size}/${total} chương</h2><p>${attempts.attempted} câu đã làm · tỷ lệ đúng ${attempts.rate}%</p></div></section>
          <section class="progress-list">${(D.chapters || []).map((ch) => {
            const done = completed.has(ch.id);
            return `<a class="progress-row" href="#chapter/${ch.id}"><b>${ch.number}</b><div><strong>${esc(titleVi(ch))}</strong><span>${esc(ch.sections?.length || 0)} chuyên đề</span></div><em>${done ? "✓ Hoàn thành" : "Mở chương →"}</em></a>`;
          }).join("")}</section>
        </div>
      </div></div>`;
  }

  function renderSources() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Source-grounded", "Học liệu có nguồn và có phương pháp.", "Nội dung được đối chiếu giữa giáo trình IFRS, mind map môn học, slide chương, ngân hàng câu hỏi và workbook thực hành. Website chủ động sửa các lỗi dịch phổ biến thay vì sao chép nguyên văn.")}
        <div class="source-grid">${(D.sources || []).map((source) => `
          <article class="source-card"><span class="micro-label">${esc(source.type)}</span><h3>${esc(source.title)}</h3><p><strong>${esc(source.author || "")}</strong></p><p>${esc(source.note)}</p></article>`).join("")}</div>
        <section class="section-block trust-strip">
          <div class="trust-copy"><span class="eyebrow">Editorial method</span><h2>Bản chất trước thuật ngữ, thuật ngữ trước bút toán.</h2><p>Mọi lời giải theo bốn bước: nhận diện sự kiện, phân loại yếu tố, áp dụng quy tắc ghi nhận, rồi kiểm tra phương trình hoặc Nợ = Có.</p></div>
          <div class="correction-card"><h3>Nguyên tắc sử dụng học liệu</h3><div class="correction-list"><div class="correction-row"><del>Sao chép đáp án</del><div><strong>Giải thích lại có cấu trúc</strong>Dữ kiện và câu hỏi được dùng để kiểm tra kiến thức; lời giải được biên tập theo logic học tập.</div></div><div class="correction-row"><del>Dịch từng chữ</del><div><strong>Dịch theo nghĩa kế toán</strong>Key terms giữ tên tiếng Anh để đối chiếu, kèm tên và định nghĩa tiếng Việt chuẩn.</div></div></div></div>
        </section>
      </div></div>`;
  }

  function renderNotFound() {
    main.innerHTML = `<div class="page-shell"><div class="content-width"><div class="empty-state"><strong>Không tìm thấy trang.</strong><span><a class="text-link" href="#home">Trở về trang chủ</a></span></div></div></div>`;
  }

  function renderSearchResults(query) {
    const value = norm(query);
    if (!value) {
      searchResults.innerHTML = `<div class="empty-state"><strong>Tìm xuyên suốt 15 chương.</strong><span>Gõ ví dụ: adjusting entry, hàng tồn kho, retained earnings.</span></div>`;
      return;
    }
    const chapterHits = (D.chapters || []).filter((ch) => norm(ch.title + " " + titleVi(ch) + " " + ch.subtitle + " " + ch.sections.map((s) => s.title).join(" ")).includes(value)).slice(0, 6);
    const termHits = (D.glossary || []).filter((item) => norm(item.term + " " + item.vi + " " + item.definition + " " + (Extra.glossaryVi?.[item.term.toLowerCase()] || "")).includes(value)).slice(0, 8);
    const hits = [
      ...chapterHits.map((ch) => ({ icon: ch.number, title: titleVi(ch), meta: ch.title, route: "chapter/" + ch.id, kind: "Chương" })),
      ...termHits.map((item) => ({ icon: "Aa", title: item.term, meta: item.vi, route: "glossary?term=" + encodeURIComponent(item.term), kind: "Thuật ngữ" }))
    ];
    searchResults.innerHTML = hits.length ? hits.map((hit) => `
      <button class="search-result" type="button" data-search-route="${esc(hit.route)}"><b>${esc(hit.icon)}</b><span><strong>${esc(hit.title)}</strong><span>${esc(hit.meta)}</span></span><em>${esc(hit.kind)}</em></button>`).join("") : `<div class="empty-state"><strong>Chưa tìm thấy kết quả.</strong><span>Thử một thuật ngữ ngắn hơn.</span></div>`;
    searchResults.querySelectorAll("[data-search-route]").forEach((button) => button.addEventListener("click", () => {
      searchDialog.close();
      navigate(button.dataset.searchRoute);
    }));
  }

  function openSearch() {
    if (!searchDialog.open) searchDialog.showModal();
    globalSearch.value = "";
    renderSearchResults("");
    window.setTimeout(() => globalSearch.focus(), 30);
  }

  function renderRoute() {
    const route = routeParts();
    const [name = "home", id] = route.parts;
    document.body.dataset.route = name;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (name === "home") renderHome();
    else if (name === "learn") renderLearn();
    else if (name === "chapter") renderChapter(id);
    else if (name === "practice") renderPractice(id);
    else if (name === "exercises") renderExercises(id);
    else if (name === "glossary") renderGlossary(route.params.get("term") || "");
    else if (name === "notes") renderNotes();
    else if (name === "progress") renderProgress();
    else if (name === "sources") renderSources();
    else renderNotFound();
    updateProgressUI();
    document.getElementById("mobile-menu").hidden = true;
    document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    document.title = name === "home" ? "Ruoilun Accounting Mastery" : (main.querySelector("h1")?.textContent || "Ruoilun") + " · Ruoilun";
  }

  document.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.route)));
  document.querySelectorAll(".search-trigger").forEach((button) => button.addEventListener("click", openSearch));
  document.querySelector(".dialog-close")?.addEventListener("click", () => searchDialog.close());
  globalSearch?.addEventListener("input", (event) => renderSearchResults(event.target.value));
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });

  const menuButton = document.querySelector(".menu-button");
  menuButton?.addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute("aria-expanded", String(open));
  });
  document.getElementById("mobile-menu")?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      event.currentTarget.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 16), { passive: true });
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
})();
