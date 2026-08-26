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
    glossaryLetter: "ALL",
    flashcardIndex: 0,
    flashcardRevealed: false,
    examQuestions: [],
    examAnswers: {},
    examSubmitted: false
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
      toast("The browser is blocking local saving. Course content remains available.");
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
    if (!id) return D.chapters?.[0];
    return (D.chapters || []).find((chapter) => chapter.id === id);
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

  function annotationsList() {
    const value = readStore("annotations", []);
    return Array.isArray(value) ? value : [];
  }

  function saveAnnotations(value) {
    writeStore("annotations", value);
  }

  function annotationId() {
    return "an-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function textOffset(root, node, offset) {
    const range = document.createRange();
    range.selectNodeContents(root);
    range.setEnd(node, offset);
    return range.toString().length;
  }

  function locateTextPosition(root, target) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    let count = 0;
    while ((node = walker.nextNode())) {
      const next = count + node.nodeValue.length;
      if (target <= next) return { node, offset: Math.max(0, target - count) };
      count = next;
    }
    return null;
  }

  function renderAnnotationMarks() {
    document.querySelectorAll("[data-annotatable]").forEach((root) => {
      const key = root.dataset.annotatable;
      const records = annotationsList().filter((item) => item.source === key).sort((a, b) => b.start - a.start);
      records.forEach((item) => {
        const start = locateTextPosition(root, item.start);
        const end = locateTextPosition(root, item.end);
        if (!start || !end || item.end <= item.start) return;
        try {
          const range = document.createRange();
          range.setStart(start.node, start.offset);
          range.setEnd(end.node, end.offset);
          if (range.toString() !== item.quote) return;
          const mark = document.createElement("mark");
          mark.className = `annotation-mark ${item.type} ${item.color || "lavender"}`;
          mark.dataset.annotationId = item.id;
          mark.tabIndex = 0;
          mark.title = item.body || (item.type === "highlight" ? "Saved highlight" : item.type);
          range.surroundContents(mark);
        } catch (_) {}
      });
    });
  }

  function closeAnnotationUI() {
    document.getElementById("annotation-toolbar")?.remove();
    document.getElementById("annotation-composer")?.remove();
  }

  function addAnnotation(type, color, selectionData, body) {
    const records = annotationsList();
    const overlaps = records.some((item) => item.source === selectionData.source && item.start < selectionData.end && item.end > selectionData.start);
    if (overlaps) {
      toast("This passage already contains an annotation. Select a different sentence.");
      return;
    }
    records.push({
      id: annotationId(), type, color, body: String(body || "").trim(),
      chapter: selectionData.chapter, section: selectionData.section,
      title: selectionData.title, source: selectionData.source,
      start: selectionData.start, end: selectionData.end, quote: selectionData.quote,
      created: new Date().toISOString(), updated: new Date().toISOString()
    });
    saveAnnotations(records);
    closeAnnotationUI();
    window.getSelection()?.removeAllRanges();
    renderChapter(selectionData.chapter, "section-" + (Number(selectionData.section) + 1));
    toast(type === "highlight" ? "Highlight saved." : `${type === "note" ? "Note" : "Comment"} attached to the passage.`);
  }

  function openAnnotationComposer(type, selectionData) {
    document.getElementById("annotation-toolbar")?.remove();
    const panel = document.createElement("div");
    panel.id = "annotation-composer";
    panel.className = "annotation-composer";
    panel.innerHTML = `<div class="annotation-panel-head"><div><span class="micro-label">${type === "note" ? "Study note" : "Comment"}</span><strong>${type === "note" ? "Connect this passage to your own understanding" : "Leave a question or observation"}</strong></div><button type="button" data-close-annotation aria-label="Close">×</button></div><blockquote>${esc(selectionData.quote)}</blockquote><textarea maxlength="1200" placeholder="${type === "note" ? "Restate, connect, or add a memory cue…" : "Write your question or observation…"}"></textarea><div class="annotation-panel-actions"><button class="button ghost small" type="button" data-close-annotation>Cancel</button><button class="button primary small" type="button" data-save-annotation>Save ${type}</button></div>`;
    document.body.appendChild(panel);
    panel.querySelector("textarea").focus();
    panel.querySelectorAll("[data-close-annotation]").forEach((button) => button.addEventListener("click", closeAnnotationUI));
    panel.querySelector("[data-save-annotation]").addEventListener("click", () => {
      const body = panel.querySelector("textarea").value.trim();
      if (!body) return toast("Write a short note before saving.");
      addAnnotation(type, type === "note" ? "peach" : "sage", selectionData, body);
    });
  }

  function showSelectionToolbar() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const root = (range.commonAncestorContainer.nodeType === 1 ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement)?.closest?.("[data-annotatable]");
    const quote = selection.toString().trim();
    if (!root || quote.length < 2 || quote.length > 700) return;
    const start = textOffset(root, range.startContainer, range.startOffset);
    const end = textOffset(root, range.endContainer, range.endOffset);
    const selectionData = { source: root.dataset.annotatable, chapter: root.dataset.chapter, section: root.dataset.section, title: root.dataset.title, start, end, quote: selection.toString() };
    document.getElementById("annotation-toolbar")?.remove();
    const toolbar = document.createElement("div");
    toolbar.id = "annotation-toolbar";
    toolbar.className = "annotation-toolbar";
    toolbar.innerHTML = `<span>Highlight</span><button type="button" class="color-dot lavender" data-highlight="lavender" aria-label="Lavender highlight"></button><button type="button" class="color-dot peach" data-highlight="peach" aria-label="Peach highlight"></button><button type="button" class="color-dot sage" data-highlight="sage" aria-label="Sage highlight"></button><button type="button" class="color-dot rose" data-highlight="rose" aria-label="Rose highlight"></button><i></i><button type="button" data-annotation-type="note">＋ Note</button><button type="button" data-annotation-type="comment">◌ Comment</button><button type="button" data-close-annotation aria-label="Close">×</button>`;
    document.body.appendChild(toolbar);
    const box = range.getBoundingClientRect();
    toolbar.style.left = Math.max(12, Math.min(window.innerWidth - toolbar.offsetWidth - 12, box.left + box.width / 2 - toolbar.offsetWidth / 2)) + "px";
    toolbar.style.top = Math.max(12, box.top + window.scrollY - toolbar.offsetHeight - 12) + "px";
    toolbar.querySelectorAll("[data-highlight]").forEach((button) => button.addEventListener("click", () => addAnnotation("highlight", button.dataset.highlight, selectionData, "")));
    toolbar.querySelectorAll("[data-annotation-type]").forEach((button) => button.addEventListener("click", () => openAnnotationComposer(button.dataset.annotationType, selectionData)));
    toolbar.querySelector("[data-close-annotation]").addEventListener("click", closeAnnotationUI);
  }

  function bindAnnotationEvents() {
    main.querySelectorAll("[data-annotatable]").forEach((node) => node.addEventListener("mouseup", () => window.setTimeout(showSelectionToolbar, 0)));
    main.querySelectorAll(".annotation-mark").forEach((mark) => {
      const open = () => {
        const item = annotationsList().find((record) => record.id === mark.dataset.annotationId);
        if (!item) return;
        const action = window.confirm(`${item.type === "highlight" ? "Highlight" : item.type === "note" ? "Note" : "Comment"}${item.body ? "\n\n" + item.body : ""}\n\nRemove this annotation?`);
        if (!action) return;
        saveAnnotations(annotationsList().filter((record) => record.id !== item.id));
        renderChapter(item.chapter, "section-" + (Number(item.section) + 1));
        toast("Annotation removed.");
      };
      mark.addEventListener("click", open);
      mark.addEventListener("keydown", (event) => { if (event.key === "Enter") open(); });
    });
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
          <span class="chapter-status ${done ? "done" : ""}">${done ? "Completed" : "Open access"}</span>
        </div>
        <div class="chapter-card-copy">
          <h3>${esc(chapter.title)}</h3>
          <p>${esc(chapter.subtitle)}</p>
          <div class="chapter-meta">
            <span>${esc(chapter.sections?.length || 0)} full lessons</span>
            <span>${esc(questionCount)} practice questions</span>
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
                <span class="eyebrow">Financial Accounting · IFRS · English-first</span>
                <h1 id="hero-title">Understand the logic.<em>Record with confidence.</em></h1>
                <p class="hero-lead">A complete English-taught Financial Accounting course: all 15 chapters are open from the start, with deep theory, worked examples, exam traps, and Vietnamese support for key terms.</p>
                <div class="hero-actions">
                  <a class="button primary" href="#learn">Browse all 15 chapters <span aria-hidden="true">→</span></a>
                  <a class="button ghost" href="#practice">Start practice</a>
                </div>
              </div>
              <aside class="hero-panel" aria-label="Quick chapter access">
                <div class="hero-panel-label"><span>JUMP TO ANY CHAPTER</span><span>No locked lessons</span></div>
                <div class="hero-route">
                  <a href="#chapter/ch1"><b>01</b><span>Accounting in Action</span><small>Accounting equation</small></a>
                  <a href="#chapter/ch2"><b>02</b><span>The Recording Process</span><small>Debit, credit, journal, ledger</small></a>
                  <a href="#chapter/ch15"><b>15</b><span>Financial Statement Analysis</span><small>Open the final chapter directly</small></a>
                </div>
              </aside>
            </div>
          </section>

          <section class="metric-ribbon" aria-label="Course coverage">
            <div class="metric"><b>${esc(D.chapters?.length || 0)}</b><span>complete IFRS chapters</span></div>
            <div class="metric"><b>${esc(D.questions?.length || 0)}</b><span>interactive questions</span></div>
            <div class="metric"><b>${esc(D.glossary?.length || 0)}</b><span>bilingual key terms</span></div>
            <div class="metric"><b>Open</b><span>no chapter prerequisites</span></div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">The learning loop</span><h2>Learn the logic, not isolated rules.</h2><p>Every lesson moves from economic substance to account analysis, recording, and a final check.</p></div></div>
            <div class="learning-loop">
              <article class="loop-card" data-step="1"><div class="icon-tile">◎</div><h3>Understand</h3><p>Identify the economic event, the reporting entity, and the recognition point.</p></article>
              <article class="loop-card" data-step="2"><div class="icon-tile">◇</div><h3>Analyze</h3><p>Classify assets, liabilities, equity, revenues, and expenses before choosing debit or credit.</p></article>
              <article class="loop-card" data-step="3"><div class="icon-tile">↗</div><h3>Record</h3><p>Journalize, post to the ledger, prepare a trial balance, and trace the reporting flow.</p></article>
              <article class="loop-card" data-step="4"><div class="icon-tile">✓</div><h3>Review</h3><p>Check the accounting equation, debit = credit, recognition period, and statement effects.</p></article>
            </div>
          </section>

          <section class="section-block">
            <div class="section-heading"><div><span class="eyebrow">15-chapter library</span><h2>Open any chapter, in any order.</h2><p>The complete Financial Accounting IFRS 5e learning path is visible immediately. There is no completion gate.</p></div><a class="text-link" href="#learn">View the full set</a></div>
            <div class="chapter-grid">${firstChapters}</div>
          </section>

          <section class="section-block trust-strip">
            <div class="trust-copy"><span class="eyebrow">Vietnamese key-term support</span><h2>The lesson stays in English. Translation appears only where terminology needs it.</h2><p>Core teaching, examples, objectives, and solutions use English. The glossary provides accurate Vietnamese equivalents for terms such as revenue, retained earnings, debit, and credit.</p></div>
            <div class="correction-card"><h3>Three translation traps to avoid</h3><div class="correction-list">${corrections}</div></div>
          </section>
        </div>
      </div>`;
  }

  function renderLearn() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Complete course library", "All 15 chapters are available now.", "Start with Chapter 1 or jump directly to any later topic. Every chapter contains full theory, learning objectives, worked examples, exam traps, review prompts, and chapter-specific practice.", `<a class="button primary" href="#chapter/ch1">Open Chapter 01</a><a class="button ghost" href="#chapter/ch15">Jump to Chapter 15</a><a class="button ghost" href="#exercises">Worked problems</a>`)}
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

  function glossaryMatch(point) {
    const lower = String(point || "").toLowerCase();
    return (D.glossary || []).find((item) => {
      const term = item.term.toLowerCase();
      return lower === term || lower.startsWith(term + ":") || lower.startsWith(term + " ") || lower.startsWith(term + "/");
    });
  }

  function keyTermSupport(point) {
    const item = glossaryMatch(point);
    if (!item) return "";
    const explanation = Extra.glossaryVi?.[item.term.toLowerCase()];
    return `<div class="explain-pane vi"><span>Key term · Vietnamese support</span><strong>${esc(item.term)} — ${esc(item.vi)}</strong><br>${esc(explanation || item.vi)}</div>`;
  }

  function termsHtml(terms) {
    if (!terms?.length) return "";
    return `<div class="term-row">${terms.map((term) => `<button class="term-chip" type="button" data-term="${esc(term)}">${esc(term)}</button>`).join("")}</div>`;
  }

  function sectionQuestion(chapter, section, sectionIndex) {
    const pool = (D.questions || []).filter((question) => question.chapter === chapter.id);
    if (!pool.length) return null;
    const tokens = norm([section.title, section.lead, ...(section.terms || [])].join(" ")).split(/\s+/).filter((token) => token.length > 3);
    const ranked = pool.map((question, index) => {
      const haystack = norm([question.topic, question.question, question.explanation].join(" "));
      const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      return { question, score, index };
    }).sort((a, b) => b.score - a.score || a.index - b.index);
    return ranked[0]?.score > 0 ? ranked[0].question : pool[sectionIndex % pool.length];
  }

  function distractorExplanation(question, optionIndex) {
    if (optionIndex === question.answer) return question.explanation;
    const option = norm(question.options[optionIndex]);
    const context = norm(question.question + " " + question.explanation);
    if (/no entry|wait until cash|when cash/.test(option) && /earned|incurred|accru|receivable|payable/.test(context)) {
      return "This choice incorrectly waits for cash. Under accrual accounting, recognition follows when revenue is earned or an expense is incurred, not merely when cash moves.";
    }
    if (/dr .*revenue|debit .*revenue/.test(option)) {
      return "This choice places revenue on the debit side even though revenue normally increases equity and carries a credit balance. A debit would reduce or close revenue rather than record revenue earned.";
    }
    if (/cr .*expense|credit .*expense/.test(option)) {
      return "This choice credits an expense even though an expense normally increases on the debit side. A credit would reduce or close an expense account.";
    }
    if (/cash/.test(option) && /not yet|unpaid|on account|receivable|payable/.test(context)) {
      return "This choice uses Cash even though the facts say cash has not moved. The counterpart should normally be a receivable, payable, prepaid item, or unearned revenue depending on the recognition status.";
    }
    if (/asset|liabil|equity|revenue|expense/.test(context)) {
      return "This choice misclassifies at least one financial-statement element or gives it the wrong direction. Reclassify each account first, decide whether it increases or decreases, and only then apply debit and credit rules.";
    }
    return `This choice proposes “${question.options[optionIndex]},” but it does not satisfy the recognition rule and dual effect described in the correct explanation. Check the event, the accounts affected, and the required direction for each account.`;
  }

  function inlineQuizHtml(question, chapter, sectionIndex) {
    if (!question) return "";
    return `
      <section class="knowledge-check" data-inline-quiz="${esc(question.id)}" data-section-index="${sectionIndex}">
        <div class="knowledge-head">
          <div><span class="micro-label">Knowledge check · 1 minute</span><h3>Can you apply the lesson immediately?</h3></div>
          <span class="tag accent">${esc(question.topic)}</span>
        </div>
        <p class="knowledge-question">${esc(question.question)}</p>
        <div class="knowledge-options">${question.options.map((option, optionIndex) => `<button type="button" data-inline-answer="${optionIndex}"><b>${String.fromCharCode(65 + optionIndex)}</b><span>${esc(option)}</span></button>`).join("")}</div>
        <div class="knowledge-feedback" aria-live="polite"></div>
        <div class="knowledge-foot"><span>Based on ${esc(question.source || chapter.source)}</span><a href="#practice/${chapter.id}">More Chapter ${esc(chapter.number)} practice →</a></div>
      </section>`;
  }

  function renderChapter(id, anchor) {
    const chapter = getChapter(id);
    if (!chapter) return renderNotFound();
    writeStore("lastChapter", chapter.id);
    const index = D.chapters.indexOf(chapter);
    const prev = D.chapters[index - 1];
    const next = D.chapters[index + 1];
    const done = completedSet().has(chapter.id);
    const nav = chapter.sections.map((section, i) => `<a href="#chapter/${chapter.id}/section-${i + 1}"><b>${i + 1}</b><span>${esc(section.title)}</span></a>`).join("");
    const objectives = (chapter.objectives || []).map((item, i) => `<div class="objective"><b>LO${i + 1}</b><span>${esc(item)}</span></div>`).join("");
    const why = typeof Deep.whyChapter === "function" ? Deep.whyChapter(chapter) : chapter.subtitle;

    const sections = chapter.sections.map((section, sIndex) => {
      const quickQuestion = sectionQuestion(chapter, section, sIndex);
      const points = (section.body || []).map((point, pIndex) => {
        const deep = typeof Deep.explainPoint === "function" ? Deep.explainPoint(point, section, chapter) : point;
        const termSupport = keyTermSupport(point);
        return `
          <details class="point-card" ${pIndex === 0 ? "open" : ""}>
            <summary><b>${pIndex + 1}</b><span class="point-title">${esc(pointTitle(point))}</span><span class="point-toggle" aria-hidden="true"></span></summary>
            <div class="point-explanation ${termSupport ? "" : "single"}">
              <div class="explain-pane"><span>Full explanation · English</span><p class="annotation-copy" data-annotatable="${esc(chapter.id + ":" + sIndex + ":point:" + pIndex)}" data-chapter="${esc(chapter.id)}" data-section="${sIndex}" data-title="${esc(section.title)}">${esc(deep)}</p></div>
              ${termSupport}
            </div>
          </details>`;
      }).join("");
      const steps = typeof Deep.workedSteps === "function" ? Deep.workedSteps(section) : [
        "Extract the facts and identify the requirement.",
        "State the accounting rule before calculating or journalizing.",
        "Apply the rule step by step.",
        "Check the equation, debit-credit equality, or ending balance."
      ];
      const recalls = typeof Deep.activeRecall === "function" ? Deep.activeRecall(section, chapter) : [];
      return `
        <section class="lesson-section" id="section-${sIndex + 1}">
          <span class="lesson-index">Lesson ${String(sIndex + 1).padStart(2, "0")}</span>
          <h2>${esc(section.title)}</h2>
          <p class="lesson-lead" data-annotatable="${esc(chapter.id + ":" + sIndex + ":lead")}" data-chapter="${esc(chapter.id)}" data-section="${sIndex}" data-title="${esc(section.title)}">${esc(section.lead)}</p>
          <div class="annotation-guide"><span>✦</span><p><strong>Read actively.</strong> Select any sentence to highlight it, attach a study note, or leave a comment.</p></div>
          <div class="point-stack">${points}</div>
          <div class="lesson-two-col">
            <div class="worked-example">
              <span class="micro-label">Worked example · step by step</span>
              <h3>From facts to a defensible answer</h3>
              <p data-annotatable="${esc(chapter.id + ":" + sIndex + ":example")}" data-chapter="${esc(chapter.id)}" data-section="${sIndex}" data-title="${esc(section.title)}">${esc(section.example)}</p>
              <div class="solution-steps">${steps.map((step, stepIndex) => `<div class="solution-step" data-annotatable="${esc(chapter.id + ":" + sIndex + ":step:" + stepIndex)}" data-chapter="${esc(chapter.id)}" data-section="${sIndex}" data-title="${esc(section.title)}">${esc(step)}</div>`).join("")}</div>
            </div>
            <div class="exam-trap">
              <span class="micro-label">Exam trap</span>
              <h3>Pause before choosing an answer</h3>
              <p data-annotatable="${esc(chapter.id + ":" + sIndex + ":trap")}" data-chapter="${esc(chapter.id)}" data-section="${sIndex}" data-title="${esc(section.title)}">${esc(section.trap)}</p>
            </div>
          </div>
          ${inlineQuizHtml(quickQuestion, chapter, sIndex)}
          <div class="section-tools">
            <button class="tool-button note-toggle" type="button" data-note-key="${esc(chapter.id + ":" + sIndex)}">＋ Add lesson note</button>
            <button class="tool-button recall-toggle" type="button" data-recall="${esc(JSON.stringify(recalls))}">↻ Active recall</button>
            <span class="tool-button">Source: ${esc(typeof Deep.reviewRef === "function" ? Deep.reviewRef(chapter, section) : section.bookRef || chapter.source)}</span>
          </div>
          <div class="inline-slot"></div>
          ${termsHtml(section.terms)}
        </section>`;
    }).join("");

    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        <div class="chapter-shell">
          <aside class="chapter-aside">
            <div class="aside-label">In this chapter</div>
            <nav>${nav}</nav>
            <div class="chapter-nav-buttons">
              ${prev ? `<a class="button ghost small" href="#chapter/${prev.id}">← Ch ${prev.number}</a>` : "<span></span>"}
              ${next ? `<a class="button ghost small" href="#chapter/${next.id}">Ch ${next.number} →</a>` : ""}
            </div>
          </aside>
          <article class="chapter-main">
            <header class="chapter-cover">
              <div class="chapter-cover-top">
                <div><span class="eyebrow">CHAPTER ${esc(chapter.number)} · COMPLETE LESSON SET</span><h1>${esc(chapter.title)}</h1><p>${esc(chapter.subtitle)}</p></div>
                <button class="complete-button ${done ? "done" : ""}" type="button" data-complete="${chapter.id}">${done ? "✓ Completed" : "Mark chapter complete"}</button>
              </div>
              <div class="objective-grid">${objectives}</div>
            </header>
            <div class="logic-banner"><div><strong>Why this chapter matters</strong><p>${esc(why)}</p></div><span class="logic-equation">${chapter.id === "ch1" ? "A = L + E" : "Substance → Analyze → Record"}</span></div>
            ${sections}
          </article>
        </div>
      </div></div>`;

    renderAnnotationMarks();
    bindChapterEvents(chapter, anchor);
    bindAnnotationEvents();
  }

  function bindChapterEvents(chapter, anchor) {
    document.querySelector("[data-complete]")?.addEventListener("click", (event) => {
      const set = completedSet();
      if (set.has(chapter.id)) set.delete(chapter.id);
      else set.add(chapter.id);
      writeStore("completed", [...set]);
      event.currentTarget.classList.toggle("done", set.has(chapter.id));
      event.currentTarget.textContent = set.has(chapter.id) ? "✓ Completed" : "Mark chapter complete";
      updateProgressUI();
      toast(set.has(chapter.id) ? "Chapter progress saved." : "Completion mark removed.");
    });

    document.querySelectorAll(".term-chip").forEach((button) => button.addEventListener("click", () => {
      navigate("glossary?term=" + encodeURIComponent(button.dataset.term));
    }));

    document.querySelectorAll(".knowledge-check").forEach((quiz) => {
      quiz.querySelectorAll("[data-inline-answer]").forEach((button) => button.addEventListener("click", () => {
        if (quiz.dataset.answered === "true") return;
        const question = (D.questions || []).find((item) => item.id === quiz.dataset.inlineQuiz);
        if (!question) return;
        const selected = Number(button.dataset.inlineAnswer);
        const correct = selected === question.answer;
        quiz.dataset.answered = "true";
        quiz.querySelectorAll("[data-inline-answer]").forEach((optionButton) => {
          const optionIndex = Number(optionButton.dataset.inlineAnswer);
          optionButton.disabled = true;
          if (optionIndex === question.answer) optionButton.classList.add("correct");
          else if (optionIndex === selected) optionButton.classList.add("wrong");
        });
        const feedback = quiz.querySelector(".knowledge-feedback");
        feedback.innerHTML = `
          <div class="knowledge-result ${correct ? "correct" : "wrong"}"><strong>${correct ? "Correct — the rule has been applied consistently." : "Not correct yet — compare every option below."}</strong><span>${correct ? "✓" : "↻"}</span></div>
          <div class="knowledge-breakdown">${question.options.map((option, optionIndex) => `<div><b>${String.fromCharCode(65 + optionIndex)}</b><p><strong>${esc(option)}</strong><br>${esc(distractorExplanation(question, optionIndex))}</p></div>`).join("")}</div>`;
        const attempts = attemptsMap();
        attempts[question.id] = { selected, correct, at: new Date().toISOString(), source: "inline-check" };
        writeStore("attempts", attempts);
        const wrong = new Set(wrongIds());
        if (correct) wrong.delete(question.id); else wrong.add(question.id);
        writeStore("wrong", [...wrong]);
      }));
    });

    document.querySelectorAll(".note-toggle").forEach((button) => button.addEventListener("click", () => {
      const key = button.dataset.noteKey;
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      const sectionIndex = Number(key.split(":")[1]);
      const existing = notesMap()[key]?.text || "";
      slot.innerHTML = `
        <div class="inline-note">
          <textarea aria-label="Personal note" placeholder="Restate the principle in your own words…">${esc(existing)}</textarea>
          <div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Close</button><button class="button primary small save-note" type="button">Save note</button></div>
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
        toast(text ? "Note saved on this device." : "The empty note was removed.");
        slot.innerHTML = "";
      });
    }));

    document.querySelectorAll(".recall-toggle").forEach((button) => button.addEventListener("click", () => {
      const slot = button.closest(".lesson-section").querySelector(".inline-slot");
      let prompts = [];
      try { prompts = JSON.parse(button.dataset.recall || "[]"); } catch (_) {}
      slot.innerHTML = `<div class="inline-note"><strong>Active recall — answer without looking above</strong><ol>${prompts.map((item) => `<li>${esc(item)}</li>`).join("")}</ol><div class="inline-note-actions"><button class="button dark small cancel-note" type="button">Close</button></div></div>`;
      slot.querySelector(".cancel-note").addEventListener("click", () => slot.innerHTML = "");
    }));

    if (anchor && /^section-\d+$/.test(anchor)) {
      window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
    }
  }

  function filteredQuestions() {
    const f = appState.practiceFilters;
    const query = norm(f.query);
    return (D.questions || []).filter((q) => {
      const chapterOk = f.chapter === "all" || q.chapter === f.chapter;
      const difficultyOk = f.difficulty === "all" || q.difficulty === f.difficulty;
      const queryOk = !query || norm(q.id + " " + q.question + " " + q.topic + " " + q.options.join(" ")).includes(query);
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
    const chapterOptions = (D.chapters || []).map((ch) => `<option value="${ch.id}" ${appState.practiceFilters.chapter === ch.id ? "selected" : ""}>Ch ${ch.number} · ${esc(ch.title)}</option>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Question studio", "Practice with an explanation for every answer.", "All questions are tagged by chapter, topic, and difficulty. Feedback appears immediately and incorrect answers are collected for focused review.", `<a class="button ghost" href="#notes">Open mistake notebook</a>`)}
        <div class="filter-bar">
          <input id="practice-search" type="search" value="${esc(appState.practiceFilters.query)}" placeholder="Search by question text or topic…" />
          <select id="practice-chapter" aria-label="Filter by chapter"><option value="all">All chapters</option>${chapterOptions}</select>
          <select id="practice-difficulty" aria-label="Filter by difficulty">
            <option value="all">All difficulty levels</option>
            <option value="easy" ${appState.practiceFilters.difficulty === "easy" ? "selected" : ""}>Easy</option>
            <option value="medium" ${appState.practiceFilters.difficulty === "medium" ? "selected" : ""}>Medium</option>
            <option value="hard" ${appState.practiceFilters.difficulty === "hard" ? "selected" : ""}>Hard</option>
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
    if (index === appState.selectedAnswer) return "Your choice does not satisfy the account classification, recognition timing, or debit/credit direction. Classify the affected elements before relying on account names.";
    return "This option does not fully satisfy the accounting rule in the explanation. Recheck the economic event, recognition point, and dual effect.";
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
      root.innerHTML = `<div class="empty-state"><strong>No matching question found.</strong><span>Try another keyword, chapter, or difficulty level.</span></div>`;
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
        <div class="feedback-head ${isCorrect ? "" : "wrong"}"><strong>${isCorrect ? "Correct — the accounting logic is consistent." : "Not yet — trace the exact point of failure."}</strong><span>${isCorrect ? "✓" : "↻"}</span></div>
        <div class="feedback-body">
          <h3>Why is option ${String.fromCharCode(65 + q.answer)} correct?</h3>
          <p>${esc(q.explanation)}</p>
          <div class="option-breakdown">${q.options.map((option, i) => `<div class="breakdown-row"><b>${String.fromCharCode(65 + i)}</b><span><strong>${esc(option)}</strong><br>${esc(breakdownText(q, i))}</span></div>`).join("")}</div>
          <div class="review-path">Review: <a class="text-link" href="#chapter/${esc(q.chapter)}">${esc(chapter?.title || "Chapter")}</a> · Question source: ${esc(q.source || "Source pack")}</div>
        </div>
      </section>` : "";
    const stats = practiceStats();
    const wrongQuestions = wrongIds().slice(-5).reverse().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    root.innerHTML = `
      <div class="practice-layout">
        <section class="question-card">
          <div class="question-top"><span class="question-count">Question ${appState.practiceIndex + 1} / ${questions.length}</span><div class="question-tags"><span class="tag accent">${esc(q.topic)}</span><span class="tag">${esc(q.difficulty || "medium")}</span><span class="tag">Ch ${esc(chapter?.number || "")}</span></div></div>
          <h2>${esc(q.question)}</h2>
          <div class="options">${options}</div>
          ${feedback}
          <div class="question-actions">
            <button class="button ghost small" type="button" id="prev-question" ${appState.practiceIndex === 0 ? "disabled" : ""}>← Previous</button>
            <div><button class="button ghost small" type="button" id="shuffle-question">Random question</button><button class="button primary small" type="button" id="next-question">Next →</button></div>
          </div>
        </section>
        <aside class="practice-aside">
          <div class="aside-card"><h3>Practice progress</h3><div class="score-grid"><div class="score-box"><b>${stats.attempted}</b><span>attempted</span></div><div class="score-box"><b>${stats.rate}%</b><span>correct</span></div></div></div>
          <div class="aside-card"><h3>Review queue</h3><div class="mistake-list-mini">${wrongQuestions.length ? wrongQuestions.map((item) => `<button type="button" data-question-id="${esc(item.id)}">${esc(item.id)} · ${esc(item.topic)}</button>`).join("") : "<span>No incorrect answers saved yet.</span>"}</div></div>
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
          <div><span>Vietnamese key-term explanation</span>${esc(Extra.glossaryVi?.[item.term.toLowerCase()] || viExplanation(item.definition))}</div>
        </div>
      </article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Bilingual glossary", "English teaching, precise Vietnamese terminology.", "Each entry keeps the English accounting term and definition, then provides an accurate Vietnamese equivalent and clarification. Vietnamese is used here as terminology support, not as the teaching language.")}
        <div class="glossary-toolbar">
          <input class="glossary-search" id="glossary-search" type="search" value="${esc(appState.glossaryQuery)}" placeholder="Search asset, retained earnings, doanh thu…" />
          <div class="alphabet-filter"><button class="${appState.glossaryLetter === "ALL" ? "active" : ""}" type="button" data-letter="ALL">ALL</button>${letters.map((letter) => `<button class="${appState.glossaryLetter === letter ? "active" : ""}" type="button" data-letter="${letter}">${letter}</button>`).join("")}</div>
        </div>
        <div class="glossary-grid">${cards || `<div class="empty-state"><strong>No matching term found.</strong><span>Try another keyword or select ALL.</span></div>`}</div>
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
    const exerciseSet = Extra.englishExercises || Extra.exercises || [];
    const chapter = getChapter(chapterId || exerciseSet[0]?.chapter || "ch1");
    if (!chapter) return renderNotFound();
    const exercise = exerciseSet.find((item) => item.chapter === chapter.id);
    const pack = (D.sourcePracticePacks || []).find((item) => String(item.chapter || "").includes(String(Number(chapter.number)))) || D.sourcePracticePacks?.[0];
    const tabs = (D.chapters || []).map((ch) => `<button class="${ch.id === chapter.id ? "active" : ""}" type="button" data-exercise-chapter="${ch.id}">Ch ${ch.number}</button>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Chapter exercises", "A fully worked problem for every chapter.", "Each problem states the facts and requirement clearly. Attempt it first, then open the solution to compare the rule, calculation, journal entry, and final check step by step.")}
        <div class="exercise-tabs" aria-label="Choose a chapter">${tabs}</div>
        <div class="exercise-summary">
          <div class="exercise-brief"><span class="eyebrow">CHAPTER ${esc(chapter.number)}</span><h2>${esc(chapter.title)}</h2><p>${esc(chapter.objectives?.[0] || chapter.subtitle)}</p></div>
          <aside class="exercise-map"><h3>Recommended process</h3><ol><li>Extract the economic facts.</li><li>State the rule and accounts.</li><li>Calculate or journalize step by step.</li><li>Reconcile totals and conclude.</li></ol>${pack ? `<p><small>Source pack: ${esc(pack.source)} · ${esc(pack.note)}</small></p>` : ""}</aside>
        </div>
        ${exercise ? `
          <article class="exercise-card">
            <header><div><span class="tag accent">Ch ${esc(chapter.number)}</span><span class="tag">${esc(exercise.level || "Applied")}</span></div><h3>${esc(exercise.title)}</h3><p class="prompt">${esc(exercise.prompt)}</p></header>
            <details><summary><span>Open the detailed solution</span><span aria-hidden="true">＋</span></summary><div class="exercise-solution">${(exercise.solution || []).map((step) => `<div>${esc(step)}</div>`).join("")}</div></details>
          </article>` : `<div class="empty-state"><strong>This worked problem is being updated.</strong><span>Select another chapter to continue.</span></div>`}
      </div></div>`;
    document.querySelectorAll("[data-exercise-chapter]").forEach((button) => button.addEventListener("click", () => navigate("exercises/" + button.dataset.exerciseChapter)));
  }

  function renderNotes() {
    const entries = Object.entries(notesMap());
    const annotations = annotationsList().slice().sort((a, b) => new Date(b.updated) - new Date(a.updated));
    const highlightCards = annotations.filter((item) => item.type === "highlight").map((item) => {
      const chapter = getChapter(item.chapter);
      return `<article class="note-card annotation-note-card"><div class="note-card-top"><div><span class="annotation-kind ${esc(item.color || "lavender")}">Highlight</span><h3>${esc(item.title)}</h3><small>Ch ${esc(chapter?.number || "")} · ${esc(new Date(item.updated).toLocaleDateString("en-GB"))}</small></div></div><blockquote>${esc(item.quote)}</blockquote><div class="note-card-actions"><button type="button" data-open-annotation="${esc(item.id)}">Open passage</button><button type="button" data-delete-annotation="${esc(item.id)}">Delete</button></div></article>`;
    }).join("");
    const attachedCards = annotations.filter((item) => item.type !== "highlight").map((item) => {
      const chapter = getChapter(item.chapter);
      return `<article class="note-card annotation-note-card"><div class="note-card-top"><div><span class="annotation-kind ${esc(item.type)}">${item.type === "note" ? "Study note" : "Comment"}</span><h3>${esc(item.title)}</h3><small>Ch ${esc(chapter?.number || "")} · ${esc(new Date(item.updated).toLocaleDateString("en-GB"))}</small></div></div><blockquote>${esc(item.quote)}</blockquote><p>${esc(item.body)}</p><div class="note-card-actions"><button type="button" data-open-annotation="${esc(item.id)}">Open passage</button><button type="button" data-delete-annotation="${esc(item.id)}">Delete</button></div></article>`;
    }).join("");
    const noteCards = entries.map(([key, note]) => {
      const chapter = getChapter(note.chapter);
      return `
        <article class="note-card">
          <div class="note-card-top"><div><h3>${esc(note.title)}</h3><small>Ch ${esc(chapter?.number || "")} · updated ${esc(new Date(note.updated).toLocaleDateString("en-GB"))}</small></div></div>
          <p>${esc(note.text)}</p>
          <div class="note-card-actions"><button type="button" data-open-note="${esc(key)}">Open lesson</button><button type="button" data-delete-note="${esc(key)}">Delete</button></div>
        </article>`;
    }).join("");
    const wrong = wrongIds().map((id) => (D.questions || []).find((item) => item.id === id)).filter(Boolean);
    const wrongCards = wrong.slice(-12).reverse().map((q) => `
      <article class="note-card"><div class="note-card-top"><div><h3>${esc(q.topic)}</h3><small>${esc(q.id)} · Ch ${esc(getChapter(q.chapter)?.number || "")}</small></div></div><p>${esc(q.question)}</p><div class="note-card-actions"><button type="button" data-review-question="${esc(q.id)}">Attempt again</button></div></article>`).join("");
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Personal notebook", "Highlights, notes, comments, and mistakes—together.", "Select text inside any lesson to highlight it or attach a note or comment. Everything is stored locally in this browser and stays linked to its original passage.")}
        <div class="annotation-stats"><div><b>${annotations.filter((item) => item.type === "highlight").length}</b><span>Highlights</span></div><div><b>${annotations.filter((item) => item.type === "note").length}</b><span>Attached notes</span></div><div><b>${annotations.filter((item) => item.type === "comment").length}</b><span>Comments</span></div><div><b>${entries.length}</b><span>Lesson notes</span></div></div>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">Selected passages</span><h2>Highlights</h2></div></div><div class="notes-grid">${highlightCards || `<div class="empty-state"><strong>No highlights yet.</strong><span>Select a sentence in any lesson and choose a highlight colour.</span></div>`}</div></section>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">In-context thinking</span><h2>Notes & comments</h2></div></div><div class="notes-grid">${attachedCards || `<div class="empty-state"><strong>No attached notes or comments yet.</strong><span>Select a passage, then choose Note or Comment.</span></div>`}</div></section>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">My notes</span><h2>Lesson notes</h2></div></div><div class="notes-grid">${noteCards || `<div class="empty-state"><strong>No notes yet.</strong><span>Open any chapter and select “Add lesson note”.</span></div>`}</div></section>
        <section class="section-block"><div class="section-heading"><div><span class="eyebrow">Mistake notebook</span><h2>Questions to attempt again</h2></div></div><div class="notes-grid">${wrongCards || `<div class="empty-state"><strong>Your mistake notebook is empty.</strong><span>Answer a knowledge check or Practice question to build a review queue.</span></div>`}</div></section>
      </div></div>`;
    document.querySelectorAll("[data-open-note]").forEach((button) => button.addEventListener("click", () => {
      const note = notesMap()[button.dataset.openNote];
      if (note) navigate("chapter/" + note.chapter);
    }));
    document.querySelectorAll("[data-delete-note]").forEach((button) => button.addEventListener("click", () => {
      if (!window.confirm("Delete this note? This action cannot be undone.")) return;
      const notes = notesMap();
      delete notes[button.dataset.deleteNote];
      writeStore("notes", notes);
      renderNotes();
    }));
    document.querySelectorAll("[data-open-annotation]").forEach((button) => button.addEventListener("click", () => {
      const item = annotationsList().find((record) => record.id === button.dataset.openAnnotation);
      if (item) navigate("chapter/" + item.chapter + "/section-" + (Number(item.section) + 1));
    }));
    document.querySelectorAll("[data-delete-annotation]").forEach((button) => button.addEventListener("click", () => {
      if (!window.confirm("Delete this annotation?")) return;
      saveAnnotations(annotationsList().filter((item) => item.id !== button.dataset.deleteAnnotation));
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
        ${routeHead("Learning progress", "Progress is a signal, not a gate.", "Every chapter remains open. Completion marks, question attempts, and the mistake notebook simply help you identify where to review next.")}
        <div class="progress-layout">
          <section class="progress-hero-card"><div><div class="big-ring" style="--progress:${percent * 3.6}deg"><div><b>${percent}%</b></div></div><h2>${completed.size}/${total} chapters</h2><p>${attempts.attempted} questions attempted · ${attempts.rate}% correct</p></div></section>
          <section class="progress-list">${(D.chapters || []).map((ch) => {
            const done = completed.has(ch.id);
            return `<a class="progress-row" href="#chapter/${ch.id}"><b>${ch.number}</b><div><strong>${esc(ch.title)}</strong><span>${esc(ch.sections?.length || 0)} full lessons</span></div><em>${done ? "✓ Completed" : "Open chapter →"}</em></a>`;
          }).join("")}</section>
        </div>
      </div></div>`;
  }

  function renderSources() {
    main.innerHTML = `
      <div class="page-shell"><div class="content-width">
        ${routeHead("Source-grounded", "A course built from the textbook and your teacher’s learning map.", "Theory is cross-checked against Financial Accounting IFRS 5e, the teacher mind map, chapter slides, verified question banks, and the supplied practice workbooks.")}
        <div class="source-grid">${(D.sources || []).map((source) => `
          <article class="source-card"><span class="micro-label">${esc(source.type)}</span><h3>${esc(source.title)}</h3><p><strong>${esc(source.author || "")}</strong></p><p>${esc(source.note)}</p></article>`).join("")}</div>
        <section class="section-block trust-strip">
          <div class="trust-copy"><span class="eyebrow">Editorial method</span><h2>Substance first, terminology second, journal entry third.</h2><p>Every solution follows four checks: identify the event, classify the elements, apply the recognition rule, then reconcile the equation or debit-credit totals.</p></div>
          <div class="correction-card"><h3>How the sources are used</h3><div class="correction-list"><div class="correction-row"><del>Copy an answer</del><div><strong>Rebuild the reasoning</strong>Questions test the source material; explanations are structured around economic substance and exam reasoning.</div></div><div class="correction-row"><del>Translate word by word</del><div><strong>Translate accounting meaning</strong>Lessons remain in English; key terms retain their English form with precise Vietnamese support.</div></div></div></div>
        </section>
      </div></div>`;
  }

  function renderTools() {
    const tools = [
      ["mindmap", "Teacher Mind Map", "See how the teacher connects organization forms, assumptions, elements, statements, recording flow, and merchandising."],
      ["lab", "Accounting Lab", "Practice the accounting equation, debit-credit balance, journals, trial balances, adjustments, and cash-flow structure."],
      ["flashcards", "Flashcards", "Review English accounting terms with precise Vietnamese translations and definitions."],
      ["formulae", "Formula Sheet", "Keep equations, ratios, inventory measures, depreciation, interest, and cash-flow checks in one clean reference."],
      ["exam", "Exam Mode", "Take a 20-question mixed mock test and receive a complete answer review after submission."],
      ["sources", "Sources", "Trace the textbook, teacher mind map, slides, question banks, workbooks, and solved source packs behind the course."]
    ];
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Study tools", "The original learning toolkit, preserved.", "The cinematic redesign changes presentation, not the core study structure. Mind map, lab, flashcards, formula sheet, exam mode, notes, mistake review, and sources remain available.")}
      <div class="tool-hub-grid">${tools.map(([route, title, copy], index) => `<a class="tool-hub-card" href="#${route}"><b>${String(index + 1).padStart(2, "0")}</b><div><h2>${esc(title)}</h2><p>${esc(copy)}</p><span>Open tool →</span></div></a>`).join("")}</div>
    </div></div>`;
  }

  function mindmapBranch(node, depth = 0) {
    const children = node.children || [];
    if (!children.length) return `<li><span>${esc(node.text)}</span></li>`;
    return `<li><details ${depth < 1 ? "open" : ""}><summary>${esc(node.text)}</summary><ul>${children.map((child) => mindmapBranch(child, depth + 1)).join("")}</ul></details></li>`;
  }

  function renderMindmap() {
    const map = window.ACCOUNTING_MINDMAP;
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Teacher mind map", "The conceptual map behind the course.", "This view preserves the teacher's hierarchy. Open each branch to trace how a definition, statement, or transaction rule connects to the next stage of accounting.", `<a class="button ghost" href="#chapter/ch1">Open Chapter 01 theory</a>`)}
      ${map ? `<div class="mindmap-board"><div class="mindmap-root"><span>${esc(map.title)}</span><small>${esc(map.source)}</small></div><ul>${map.branches.map((branch) => mindmapBranch(branch)).join("")}</ul></div>` : `<div class="empty-state"><strong>Mind map data is unavailable.</strong><span>Use the chapter route while the source is reloaded.</span></div>`}
    </div></div>`;
  }

  function renderFormulae() {
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Formula sheet", "Readable formulas with meaning and checks.", "Each card shows the English formula first. Vietnamese appears only as key-term support so the course remains English-taught.")}
      <div class="formula-grid">${(D.formulae || []).map((item, index) => `<article class="formula-card"><span>${String(index + 1).padStart(2, "0")}</span><h2>${esc(item.name)}</h2><div class="formula-display">${esc(item.formula)}</div><p><b>VI key-term support:</b> ${esc(item.vi || "—")}</p></article>`).join("")}</div>
    </div></div>`;
  }

  function renderFlashcards() {
    const cards = D.glossary || [];
    if (!cards.length) return renderNotFound();
    const card = cards[appState.flashcardIndex % cards.length];
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Flashcards", "Recall the English term before revealing support.", "Say the definition aloud first. Then reveal the English definition, Vietnamese equivalent, and precise Vietnamese clarification.")}
      <section class="flashcard-stage">
        <div class="flashcard-count">Card ${appState.flashcardIndex + 1} / ${cards.length} · ${esc(card.chapter)}</div>
        <button class="flashcard ${appState.flashcardRevealed ? "revealed" : ""}" id="flashcard-reveal" type="button">
          <span class="eyebrow">Accounting key term</span><h2>${esc(card.term)}</h2>
          ${appState.flashcardRevealed ? `<div class="flashcard-answer"><strong>${esc(card.definition)}</strong><p>${esc(card.vi)}</p><small>${esc(Extra.glossaryVi?.[card.term.toLowerCase()] || card.vi)}</small></div>` : `<p>Define this term in English, then click to reveal.</p>`}
        </button>
        <div class="flashcard-actions"><button class="button ghost" id="flashcard-prev" type="button">← Previous</button><button class="button primary" id="flashcard-next" type="button">Next card →</button></div>
      </section>
    </div></div>`;
    document.getElementById("flashcard-reveal")?.addEventListener("click", () => { appState.flashcardRevealed = !appState.flashcardRevealed; renderFlashcards(); });
    document.getElementById("flashcard-prev")?.addEventListener("click", () => { appState.flashcardIndex = (appState.flashcardIndex - 1 + cards.length) % cards.length; appState.flashcardRevealed = false; renderFlashcards(); });
    document.getElementById("flashcard-next")?.addEventListener("click", () => { appState.flashcardIndex = (appState.flashcardIndex + 1) % cards.length; appState.flashcardRevealed = false; renderFlashcards(); });
  }

  function labWorkspace(template) {
    const balanceLab = ["journal", "ledger", "trial", "worksheet", "cashflow"].includes(template.id);
    if (template.id === "equation") return `<div class="lab-panel"><h2>Equation balance checker</h2><p>Enter the cumulative change in each element. The accounting equation is balanced when Assets = Liabilities + Equity.</p><div class="lab-inputs"><label>Δ Assets<input id="lab-assets" type="number" value="0"></label><label>Δ Liabilities<input id="lab-liabilities" type="number" value="0"></label><label>Δ Equity<input id="lab-equity" type="number" value="0"></label></div><button class="button primary" id="lab-check" type="button">Check equation</button><div class="lab-result" id="lab-result" aria-live="polite"></div></div>`;
    if (balanceLab) return `<div class="lab-panel"><h2>${esc(template.title)} balance checker</h2><p>Enter the total debit and credit columns after completing your working table.</p><div class="lab-inputs two"><label>Total debits<input id="lab-debits" type="number" value="0"></label><label>Total credits<input id="lab-credits" type="number" value="0"></label></div><button class="button primary" id="lab-check" type="button">Check debit-credit equality</button><div class="lab-result" id="lab-result" aria-live="polite"></div></div>`;
    return `<div class="lab-panel"><h2>${esc(template.title)}</h2><p>${esc(template.desc)}</p><label class="lab-working">Working area<textarea placeholder="Enter accounts, calculations, and reconciliation notes here…"></textarea></label><div class="lab-checklist"><span>1 · Identify the event</span><span>2 · Classify accounts</span><span>3 · Apply the rule</span><span>4 · Reconcile totals</span></div></div>`;
  }

  function renderLab(templateId) {
    const templates = D.labTemplates || [];
    const selected = templates.find((item) => item.id === templateId) || templates[0];
    if (!selected) return renderNotFound();
    main.innerHTML = `<div class="page-shell"><div class="content-width">
      ${routeHead("Accounting lab", "Build the working before checking the answer.", "The lab preserves the original practice templates and gives you a clean space to test equation balance, debit-credit equality, and reconciliation logic.")}
      <div class="lab-layout"><aside class="lab-menu">${templates.map((item) => `<a class="${item.id === selected.id ? "active" : ""}" href="#lab/${item.id}"><strong>${esc(item.title)}</strong><small>${esc(item.vi)}</small></a>`).join("")}</aside><section><div class="lab-source">${esc(selected.desc)}<br><small>Source: ${esc(selected.source)}</small></div>${labWorkspace(selected)}</section></div>
    </div></div>`;
    document.getElementById("lab-check")?.addEventListener("click", () => {
      const result = document.getElementById("lab-result");
      if (selected.id === "equation") {
        const assets = Number(document.getElementById("lab-assets").value || 0);
        const liabilities = Number(document.getElementById("lab-liabilities").value || 0);
        const equity = Number(document.getElementById("lab-equity").value || 0);
        const balanced = Math.abs(assets - liabilities - equity) < 0.001;
        result.className = `lab-result ${balanced ? "correct" : "wrong"}`;
        result.textContent = balanced ? `Balanced: ${assets} = ${liabilities} + ${equity}.` : `Not balanced: Assets differ from Liabilities + Equity by ${(assets - liabilities - equity).toFixed(2)}.`;
      } else {
        const debits = Number(document.getElementById("lab-debits").value || 0);
        const credits = Number(document.getElementById("lab-credits").value || 0);
        const balanced = Math.abs(debits - credits) < 0.001;
        result.className = `lab-result ${balanced ? "correct" : "wrong"}`;
        result.textContent = balanced ? `Balanced: total debits = total credits = ${debits}.` : `Difference: ${(debits - credits).toFixed(2)}. Recheck posting, amount, and debit-credit direction.`;
      }
    });
  }

  function renderExam() {
    if (!appState.examQuestions.length) {
      main.innerHTML = `<div class="page-shell"><div class="content-width">${routeHead("Exam mode", "A 20-question mixed mock exam.", "Questions are drawn from all chapters. Submit once to receive your score and a complete explanation for every option.")}<div class="exam-start"><h2>Ready to test the full course?</h2><p>All chapters remain open before and after the exam. This mode measures recall; it does not lock content.</p><button class="button primary" id="start-exam" type="button">Start 20-question exam</button></div></div></div>`;
      document.getElementById("start-exam")?.addEventListener("click", () => {
        appState.examQuestions = [...(D.questions || [])].sort(() => Math.random() - .5).slice(0, 20);
        appState.examAnswers = {};
        appState.examSubmitted = false;
        renderExam();
      });
      return;
    }
    const score = appState.examQuestions.filter((q) => Number(appState.examAnswers[q.id]) === q.answer).length;
    main.innerHTML = `<div class="page-shell"><div class="content-width">${routeHead("Exam mode", appState.examSubmitted ? `Score: ${score} / ${appState.examQuestions.length}` : "20-question mock in progress.", appState.examSubmitted ? "Review every answer below, then return to the relevant chapter or restart the exam." : "Choose one answer per question. Explanations appear only after submission.")}
      <div class="exam-list">${appState.examQuestions.map((q, qIndex) => `<article class="exam-question"><span>Question ${qIndex + 1} · ${esc(q.topic)}</span><h2>${esc(q.question)}</h2><div>${q.options.map((option, optionIndex) => `<label class="${appState.examSubmitted ? (optionIndex === q.answer ? "correct" : Number(appState.examAnswers[q.id]) === optionIndex ? "wrong" : "") : ""}"><input type="radio" name="exam-${esc(q.id)}" value="${optionIndex}" ${Number(appState.examAnswers[q.id]) === optionIndex ? "checked" : ""} ${appState.examSubmitted ? "disabled" : ""}><b>${String.fromCharCode(65 + optionIndex)}</b><span>${esc(option)}</span></label>`).join("")}</div>${appState.examSubmitted ? `<details><summary>Review all option explanations</summary><div class="knowledge-breakdown">${q.options.map((option, optionIndex) => `<div><b>${String.fromCharCode(65 + optionIndex)}</b><p><strong>${esc(option)}</strong><br>${esc(distractorExplanation(q, optionIndex))}</p></div>`).join("")}</div></details>` : ""}</article>`).join("")}</div>
      <div class="exam-actions">${appState.examSubmitted ? `<button class="button primary" id="restart-exam" type="button">Start a new exam</button>` : `<button class="button primary" id="submit-exam" type="button">Submit exam</button>`}</div>
    </div></div>`;
    document.querySelectorAll('.exam-question input[type="radio"]').forEach((input) => input.addEventListener("change", () => { appState.examAnswers[input.name.replace("exam-", "")] = Number(input.value); }));
    document.getElementById("submit-exam")?.addEventListener("click", () => { appState.examSubmitted = true; renderExam(); });
    document.getElementById("restart-exam")?.addEventListener("click", () => { appState.examQuestions = []; appState.examAnswers = {}; appState.examSubmitted = false; renderExam(); });
  }

  function renderNotFound() {
    main.innerHTML = `<div class="page-shell"><div class="content-width"><div class="empty-state"><strong>Page not found.</strong><span><a class="text-link" href="#learn">Open all 15 chapters</a></span></div></div></div>`;
  }

  function renderSearchResults(query) {
    const value = norm(query);
    if (!value) {
      searchResults.innerHTML = `<div class="empty-state"><strong>Search all 15 chapters.</strong><span>Try adjusting entry, inventory, or retained earnings.</span></div>`;
      return;
    }
    const chapterHits = (D.chapters || []).filter((ch) => norm(ch.title + " " + titleVi(ch) + " " + ch.subtitle + " " + ch.sections.map((s) => s.title).join(" ")).includes(value)).slice(0, 6);
    const termHits = (D.glossary || []).filter((item) => norm(item.term + " " + item.vi + " " + item.definition + " " + (Extra.glossaryVi?.[item.term.toLowerCase()] || "")).includes(value)).slice(0, 8);
    const hits = [
      ...chapterHits.map((ch) => ({ icon: ch.number, title: ch.title, meta: `${ch.sections.length} full lessons`, route: "chapter/" + ch.id, kind: "Chapter" })),
      ...termHits.map((item) => ({ icon: "Aa", title: item.term, meta: item.vi, route: "glossary?term=" + encodeURIComponent(item.term), kind: "Key term" }))
    ];
    searchResults.innerHTML = hits.length ? hits.map((hit) => `
      <button class="search-result" type="button" data-search-route="${esc(hit.route)}"><b>${esc(hit.icon)}</b><span><strong>${esc(hit.title)}</strong><span>${esc(hit.meta)}</span></span><em>${esc(hit.kind)}</em></button>`).join("") : `<div class="empty-state"><strong>No search result found.</strong><span>Try a shorter accounting term.</span></div>`;
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
    const [name = "home", id, anchor] = route.parts;
    document.body.dataset.route = name;
    if (!anchor && !/^section-\d+$/.test(name)) window.scrollTo({ top: 0, behavior: "instant" });
    if (name === "home") renderHome();
    else if (name === "learn") renderLearn();
    else if (name === "chapter") renderChapter(id, anchor);
    else if (/^section-\d+$/.test(name)) renderChapter(readStore("lastChapter", "ch1"), name);
    else if (name === "practice") renderPractice(id);
    else if (name === "exercises") renderExercises(id);
    else if (name === "glossary") renderGlossary(route.params.get("term") || "");
    else if (name === "notes") renderNotes();
    else if (name === "progress") renderProgress();
    else if (name === "sources") renderSources();
    else if (name === "tools") renderTools();
    else if (name === "mindmap") renderMindmap();
    else if (name === "lab") renderLab(id);
    else if (name === "flashcards") renderFlashcards();
    else if (name === "formulae") renderFormulae();
    else if (name === "exam") renderExam();
    else renderNotFound();
    updateProgressUI();
    document.getElementById("mobile-menu").hidden = true;
    document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    document.title = name === "home" ? "zuòi lùn Accounting Mastery" : (main.querySelector("h1")?.textContent || "zuòi lùn") + " · zuòi lùn";
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
