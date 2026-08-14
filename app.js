(() => {
  const D = window.ACCOUNTING_DATA;
  const M = window.ACCOUNTING_MINDMAP || {branches:[],chapterMap:{}};
  const main = document.getElementById('main');
  const sidebar = document.getElementById('sidebar');
  const chapterNav = document.getElementById('chapterNav');
  const menuBtn = document.getElementById('menuBtn');
  const toastEl = document.getElementById('toast');
  const state = loadState();
  let practiceState = { list: [], index: 0, selected: null, revealed: false };
  let flashIndex = 0;
  let flashBack = false;
  let exam = null;
  let examTimer = null;

  function loadState(){
    try { return Object.assign({answered:{}, mistakes:{}, completedChapters:{}, exams:[]}, JSON.parse(localStorage.getItem('accountingMasteryState')||'{}')); }
    catch { return {answered:{}, mistakes:{}, completedChapters:{}, exams:[]}; }
  }
  function saveState(){ localStorage.setItem('accountingMasteryState', JSON.stringify(state)); updateProgressUI(); }
  function esc(s=''){ return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
  function toast(msg){ toastEl.textContent=msg; toastEl.classList.add('show'); setTimeout(()=>toastEl.classList.remove('show'),1800); }
  function route(){ const clean=(location.hash||'#dashboard').slice(1).split('?')[0]; return clean.split('/'); }
  function chapterById(id){ return D.chapters.find(c=>c.id===id)||D.chapters[0]; }
  function questionById(id){ return D.questions.find(q=>q.id===id); }
  function progress(){
    const qPart = Math.min(1,Object.keys(state.answered).length/Math.max(1,D.questions.length));
    const chPart = Object.keys(state.completedChapters).filter(k=>state.completedChapters[k]).length/D.chapters.length;
    return Math.round((qPart*.7+chPart*.3)*100);
  }
  function updateProgressUI(){
    const p=progress();
    document.getElementById('topProgressText').textContent=p+'%';
    document.getElementById('topProgressBar').style.width=p+'%';
  }
  function setActive(){
    const [r,a]=route();
    document.querySelectorAll('[data-route]').forEach(x=>x.classList.toggle('active',x.dataset.route===r));
    chapterNav.querySelectorAll('a').forEach(x=>x.classList.toggle('active', r==='learn' && x.dataset.chapter===a));
  }
  function closeMenu(){ sidebar.classList.remove('open'); }
  menuBtn.addEventListener('click',()=>sidebar.classList.toggle('open'));
  document.addEventListener('click',e=>{ if(innerWidth<=760 && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) closeMenu(); });

  chapterNav.innerHTML = D.chapters.map(c=>`<a href="#learn/${c.id}" data-chapter="${c.id}"><span class="chapter-num">${c.number}</span><span class="cn-text">${esc(c.title)}<small>${c.sections.length} lessons${c.teacherMapped?' · teacher-flow':''}</small></span></a>`).join('');

  function pageHead(eyebrow,title,desc,action=''){
    return `<div class="page-head"><div><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>${action}</div>`;
  }
  function sourceTag(s){ return `<span class="badge yellow">${esc(s)}</span>`; }

  function defaultReview(q){
    const c=chapterById(q.chapter);
    return {
      path:q.reviewPath || (M.chapterMap[q.chapter]?.join(' · ') || `Chapter ${c.number} → ${q.topic}`),
      lesson:q.reviewLesson || `Chapter ${c.number} · ${c.title} — review the section closest to “${q.topic}”.`,
      book:q.bookRef || `Weygandt & Kimmel IFRS 5e · Chapter ${Number(c.number)}`,
      map:q.mapRef || (c.teacherMapped?'Teacher mind-map path shown at the top of this chapter.':'Textbook extension — not explicitly mapped in the supplied teacher mind map.')
    };
  }
  function mapTree(nodes,depth=0){
    return `<div class="mind-tree depth-${depth}">${(nodes||[]).map(n=>{
      const kids=n.children||[];
      if(!kids.length) return `<div class="map-leaf">${esc(n.text)}</div>`;
      return `<details class="map-node" ${depth===0?'open':''}><summary><span>${esc(n.text)}</span><small>${kids.length} branches</small></summary>${mapTree(kids,depth+1)}</details>`;
    }).join('')}</div>`;
  }
  function renderMindMap(){
    const core=['ch1','ch2','ch3','ch4','ch5','ch6','ch14'];
    main.innerHTML=`<div class="page">
      ${pageHead('TEACHER FLOW','Principles of Accounting Mind Map','This is the organizing backbone of Learn. The supplied teacher mind map determines the conceptual flow; the textbook and lecture sources fill in definitions, worked examples, edge cases, and verification.')}
      <div class="mindmap-hero"><div><span class="badge black">PRIMARY LEARNING FLOW</span><h2>Learn in the same order the concepts are connected in class.</h2><p>Top-level branches: Forms of organizations → Assumptions & Principles → Elements of FS → Financial Statements → Flow of accounting → Merchandising operations.</p></div><div class="mind-stat"><strong>${M.branches.length}</strong><span>major branches</span><strong>${window.ACCOUNTING_GENERATED_QUESTION_COUNT||0}</strong><span>new course-original questions</span></div></div>
      <div class="learning-route-grid">
        <a class="learning-route-card" href="#learn/ch1"><span>ROUTE A</span><h3>Foundations</h3><p>Forms of organizations → Assumptions & Principles → Elements of FS → Financial Statements → Accounting equation.</p><small>Primary study home: Chapter 1</small></a>
        <a class="learning-route-card featured" href="#learn/ch2"><span>ROUTE B · CORE</span><h3>Flow of Accounting</h3><p>Analyze → Journalize → Ledger → Trial Balance → Adjust → Adjusted TB → Financial Statements → Close → Post-closing TB.</p><small>Runs across Chapters 2–4</small></a>
        <a class="learning-route-card" href="#learn/ch5"><span>ROUTE C</span><h3>Merchandising & Inventory</h3><p>Purchase of inventory → Sale of inventory → Inventory system → Costing method.</p><small>Runs across Chapters 5–6</small></a>
        <a class="learning-route-card" href="#learn/ch14"><span>ROUTE D</span><h3>Statement of Cash Flows</h3><p>Operating → Investing → Financing → Non-cash disclosures → Final cash reconciliation.</p><small>Primary study home: Chapter 14</small></a>
      </div>
      <div class="teacher-route">${core.map(id=>{const c=chapterById(id);return `<a href="#learn/${id}" class="route-step"><b>${c.number}</b><span>${esc(c.title)}</span><small>${esc((M.chapterMap[id]||[])[0]||'Teacher flow')}</small></a>`}).join('')}</div>
      <div class="section-title"><div><h2>Full teacher mind map</h2><p>Expand any branch. The wording below comes from the supplied mind-map file, not from a reconstructed textbook outline.</p></div></div>
      <div class="mindmap-board">${mapTree(M.branches)}</div>
      <div class="case-warning"><strong>How Learn uses this map.</strong> Chapters 1–6 and 14 are reorganized around these teacher-flow nodes. Chapters 7–13 and 15 remain available as <em>textbook extensions</em> because those branches are not explicitly present in the supplied mind map.</div>
    </div>`;
  }
  function renderDashboard(){
    const answered=Object.keys(state.answered).length;
    const correct=Object.values(state.answered).filter(v=>v.correct).length;
    const acc=answered?Math.round(correct/answered*100):0;
    const mistakes=Object.values(state.mistakes).filter(x=>!x.mastered).length;
    const chDone=Object.values(state.completedChapters).filter(Boolean).length;
    const annotationCount=window.AccountingAnnotations?.allAnnotations?.().length||0;
    main.innerHTML=`<div class="page">
      <div class="hero-strip dashboard-hero"><div class="hero-copy"><span class="hero-kicker">TEACHER MIND MAP · FULL SOURCE PACK · YELLOW / BLACK</span><h1>Follow the flow. Understand the why. Then work it out.</h1><p>Mindmap-first lessons following your teacher’s conceptual flow, 15-chapter coverage, ${D.questions.length} interactive explained questions, Vietnamese key terms, full source exercises, and Accounting Lab workspaces.</p><div class="hero-actions"><a class="btn primary" href="#lab">Open Accounting Lab</a><a class="btn hero-light" href="#practice">Start Practice</a><a class="btn hero-ghost" href="#mindmap">Teacher Mind Map</a></div></div><img src="${window.AM_VISUALS.hero}" alt="Yellow and black accounting ledger illustration" class="dashboard-hero-art"></div>
      <div class="section-title"><div><h2>Your Study System</h2><p>Progress is saved locally in your browser.</p></div></div>
      <div class="grid four">
        <div class="card metric"><div class="kicker">Overall</div><strong>${progress()}%</strong><small>${chDone}/${D.chapters.length} chapters marked complete</small></div>
        <div class="card metric"><div class="kicker">Practice</div><strong>${answered}</strong><small>unique questions attempted</small></div>
        <div class="card metric"><div class="kicker">Accuracy</div><strong>${acc}%</strong><small>${correct} correct attempts</small></div>
        <div class="card metric"><div class="kicker">To review</div><strong>${mistakes}</strong><small>active mistake-notebook items</small></div>
      </div>
      <div class="section-title"><div><h2>Quick Actions</h2><p>Keep the loop short: learn → practice → explain → review.</p></div></div>
      <div class="quick-grid">
        <a class="card quick-card featured" href="#lab"><img class="quick-art" src="${window.AM_VISUALS.equation}" alt=""><div><h3>Accounting Lab</h3><p>A = L + E, journals, ledger, trial balance, adjustments, worksheet, FIFO and cash flows.</p></div></a>
        <a class="card quick-card" href="#exercises"><span class="q-icon">▤</span><div><h3>All textbook exercises</h3><p>Complete chapter-by-chapter exercise library from the ebook and uploaded sources.</p></div></a><a class="card quick-card" href="#practice"><span class="q-icon">✓</span><div><h3>Interactive practice</h3><p>Curated questions with immediate explanation and source tags.</p></div></a>
        <a class="card quick-card" href="#exam"><span class="q-icon">◷</span><div><h3>Exam mode</h3><p>30 randomized questions, timed, no instant feedback.</p></div></a>
        <a class="card quick-card" href="#mistakes"><span class="q-icon">↺</span><div><h3>Review mistakes</h3><p>Turn weak concepts into a targeted revision queue.</p></div></a>
        <a class="card quick-card" href="#notes"><span class="q-icon">✎</span><div><h3>My Notes & Highlights</h3><p>${annotationCount} saved annotations · highlight theory, attach comments, and jump back to the exact passage.</p></div></a>
        <a class="card quick-card" href="#glossary"><span class="q-icon">A</span><div><h3>${D.glossary.length} key terms</h3><p>English-first definitions with Vietnamese support.</p></div></a>
      </div>
      <div class="section-title"><div><h2>Chapter Library</h2><p>Core chapters follow the teacher mind map; extension chapters follow the supplied IFRS 5e textbook.</p></div></div>
      <div class="grid four">${D.chapters.map(c=>{
        const qp=D.questions.filter(q=>q.chapter===c.id); const done=qp.filter(q=>state.answered[q.id]).length; const pct=qp.length?Math.round(done/qp.length*100):0;
        return `<a class="card chapter-card" href="#learn/${c.id}"><div class="ch-no">${c.number}</div><h3>${esc(c.title)}</h3><p>${esc(c.subtitle)}</p><div class="progress-mini"><span style="width:${pct}%"></span></div><small>${done}/${qp.length} chapter questions attempted</small></a>`
      }).join('')}</div>
      <div class="section-title"><div><h2>Midterm Cases</h2><p>Long-form accounting-cycle work with error checking.</p></div></div>
      <div class="grid two">${D.cases.map(c=>`<a class="card" href="#cases/${c.id}"><span class="badge ${c.status.includes('inconsistency')?'red':'yellow'}">${esc(c.status)}</span><h3 style="margin-top:8px">${esc(c.title)}</h3><p>${esc(c.intro)}</p></a>`).join('')}</div>
    </div>`;
  }

  function renderLearn(id){
    const c=chapterById(id); const done=!!state.completedChapters[c.id]; const paths=M.chapterMap[c.id]||[]; const DT=window.AccountingDeepTheory;
    const flowBox=c.teacherMapped?`<div class="teacher-flow-box"><div class="teacher-flow-title"><span class="badge black">TEACHER FLOW</span><div><strong>This chapter is organized from the supplied mind map.</strong><small>Use these anchors as your mental route; textbook sections provide the depth, examples, and cross-checks underneath the teacher sequence.</small></div></div><div class="flow-chips">${paths.map((x,i)=>`<span><b>${i+1}</b>${esc(x)}</span>`).join('')}</div></div>`:`<div class="extension-box"><span class="badge yellow">TEXTBOOK EXTENSION</span><strong>Not explicitly mapped in the supplied teacher mind map.</strong><p>This chapter remains in Learn for complete ebook coverage and follows the IFRS 5e chapter logic.</p></div>`;
    const lessonHTML=c.sections.map((s,i)=>{
      const pointHTML=s.body.map((b,j)=>`<div class="theory-point"><div class="theory-point-no">${j+1}</div><div><h4>${esc(b)}</h4><p>${esc(DT?DT.explainPoint(b,s,c):b)}</p></div></div>`).join('');
      const steps=(DT?DT.workedSteps(s):['Identify the facts.','State the accounting rule.','Apply the rule.','Check the result.']).map((x,j)=>`<li><b>Step ${j+1}</b><span>${esc(x)}</span></li>`).join('');
      const recall=(DT?DT.activeRecall(s):[]).map(x=>`<li>${esc(x)}</li>`).join('');
      return `<article class="lesson deep-lesson" id="lesson-${i}" data-lesson-index="${i}">
        <div class="lesson-head">${s.mapPath?`<div class="map-anchor">MIND MAP ↳ ${esc(s.mapPath)}</div>`:''}<h2>${esc(s.title)}</h2><p>${esc(s.lead)}</p></div>
        <div class="lesson-body">
          <div class="depth-banner"><span>DEEP THEORY</span><div><strong>Understand the rule before memorizing the entry.</strong><small>Each idea below is explained, connected to accounting logic, then applied to a concrete example.</small></div></div>
          <div class="deep-purpose"><b>Why this chapter matters</b><p>${esc(DT?DT.whyChapter(c):c.subtitle)}</p></div>
          <h3 class="deep-heading">Detailed explanation</h3>
          <div class="theory-point-stack">${pointHTML}</div>
          <section class="worked-deep">
            <div class="worked-kicker">CONCRETE WORKED EXAMPLE</div>
            <h3>See the rule in action</h3>
            <p class="worked-scenario">${esc(s.example)}</p>
            <ol class="reason-flow">${steps}</ol>
            <div class="worked-check"><b>Final check</b><span>Explain why the account classification and statement/equation effect make sense before accepting the answer. For journal entries, also verify total debits = total credits.</span></div>
          </section>
          <div class="callout trap"><strong>Common exam trap</strong>${esc(s.trap)}</div>
          <details class="active-recall"><summary>Active recall — can you explain it without looking?</summary><ol>${recall}</ol></details>
          <div class="lesson-source"><div><b>Teacher / course position</b><span>${esc(s.mapPath||'Textbook extension')}</span></div><div><b>Read again here</b><span>${esc(DT?DT.reviewRef(c,s):(s.bookRef||c.source))}</span></div></div>
          <div class="term-chips">${s.terms.map(t=>`<a href="#glossary?q=${encodeURIComponent(t)}" class="chip">${esc(t)}</a>`).join('')}</div>
        </div>
      </article>`;
    }).join('');
    main.innerHTML=`<div class="page">
      ${pageHead(`Chapter ${c.number}`,c.title,c.subtitle,`<button class="btn ${done?'ghost':'primary'}" id="completeCh">${done?'Marked complete':'Mark chapter complete'}</button>`)}
      ${flowBox}
      <div class="theory-standard"><strong>v0.6.1 Deep Theory + Annotation</strong><span>Every theory section includes deep explanations and worked examples. Select any sentence or phrase to highlight it, attach your own comment, or turn it into a personal flashcard.</span></div>
      <div class="annotation-tip"><span>✎</span><div><b>Annotation Mode is on</b><small>Select text inside a theory block → choose a highlight color, add a comment, or save a personal flashcard. Your notes stay on this browser and can be backed up from <a href="#notes">My Notes</a>.</small></div></div>
      <nav class="lesson-route-strip" aria-label="Chapter learning flow">${c.sections.map((s,i)=>`<a href="javascript:void(0)" data-jump="lesson-${i}"><b>${i+1}</b><span>${esc(s.title.replace(/^\d+\.\s*/,''))}</span></a>`).join('<i>→</i>')}</nav>
      <div class="learn-layout"><div class="lesson-stack">${lessonHTML}</div>
      <aside class="sticky"><div class="card outline-card"><h3>Learning objectives</h3><ul class="objective-list">${c.objectives.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="source-note"><strong>Source trail</strong><br>${esc(c.source)}</div><div class="aside-actions"><a class="btn small primary" href="#practice?chapter=${c.id}">Practice this chapter</a>${c.teacherMapped?'<a class="btn small" href="#mindmap">Open teacher map</a>':''}<a class="btn small" href="#exercises/${c.id}">All source exercises</a><a class="btn small" href="#notes">My notes & highlights</a></div></div><div id="chapterAnnotationPanel"></div></aside></div>
    </div>`;
    document.getElementById('completeCh').onclick=()=>{ state.completedChapters[c.id]=!state.completedChapters[c.id]; saveState(); renderLearn(c.id); toast(state.completedChapters[c.id]?'Chapter marked complete':'Chapter reopened'); };
    main.querySelectorAll('[data-jump]').forEach(a=>a.onclick=()=>document.getElementById(a.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'}));
    if(window.AccountingAnnotations) window.AccountingAnnotations.attachChapter({chapterId:c.id,chapterNumber:c.number,chapterTitle:c.title,lessons:c.sections});
  }

  function qs(){ return new URLSearchParams((location.hash.split('?')[1]||'')); }
  function filterQuestions(){
    const ch=document.getElementById('fChapter')?.value||'all';
    const diff=document.getElementById('fDifficulty')?.value||'all';
    const type=document.getElementById('fType')?.value||'all';
    const origin=document.getElementById('fOrigin')?.value||'all';
    const term=(document.getElementById('fSearch')?.value||'').toLowerCase().trim();
    return D.questions.filter(q=>(ch==='all'||q.chapter===ch)&&(diff==='all'||q.difficulty===diff)&&(type==='all'||(q.type||'MCQ')===type)&&(origin==='all'||(origin==='original'?(q.origin==='Course-original'):(q.origin!=='Course-original')))&&(!term||(q.question+' '+q.topic+' '+q.explanation+' '+(q.reviewPath||'')).toLowerCase().includes(term)));
  }
  function initPractice(){
    const param=qs().get('chapter')||'all';
    const types=[...new Set(D.questions.map(q=>q.type||'MCQ'))].sort();
    main.innerHTML=`<div class="page">${pageHead('Practice','Guided Question Bank',`${D.questions.length} interactive questions. Source questions and course-original variants use the teacher mind-map flow; every generated question tells you exactly what to review.`)}
      <div class="practice-summary"><div><strong>${D.questions.length}</strong><span>interactive questions</span></div><div><strong>${window.ACCOUNTING_GENERATED_QUESTION_COUNT||0}</strong><span>course-original variants</span></div><div><strong>${D.chapters.length}</strong><span>chapters</span></div></div>
      <div class="filters"><select id="fChapter" class="control"><option value="all">All chapters</option>${D.chapters.map(c=>`<option value="${c.id}" ${c.id===param?'selected':''}>Ch ${c.number} · ${esc(c.title)}</option>`).join('')}</select><select id="fDifficulty" class="control"><option value="all">All difficulty</option><option>easy</option><option>medium</option><option>hard</option></select><select id="fType" class="control"><option value="all">All question types</option>${types.map(t=>`<option>${esc(t)}</option>`).join('')}</select><select id="fOrigin" class="control"><option value="all">All origins</option><option value="original">Course-original</option><option value="source">Source-based</option></select><input id="fSearch" class="control" placeholder="Search topic, wording, or mind-map path…"><button id="shuffleBtn" class="btn small">Shuffle</button></div>
      <div id="practiceHost"></div></div>`;
    ['fChapter','fDifficulty','fType','fOrigin','fSearch'].forEach(id=>document.getElementById(id).addEventListener(id==='fSearch'?'input':'change',()=>{practiceState.index=0;practiceState.selected=null;practiceState.revealed=false;practiceState.list=filterQuestions();renderPracticeCard();}));
    document.getElementById('shuffleBtn').onclick=()=>{practiceState.list=shuffle(filterQuestions());practiceState.index=0;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard();};
    practiceState.list=filterQuestions(); practiceState.index=0; renderPracticeCard();
  }
  function renderPracticeCard(){
    const host=document.getElementById('practiceHost'); if(!host)return;
    if(!practiceState.list.length){host.innerHTML=`<div class="empty">No questions match these filters.</div>`;return}
    const q=practiceState.list[Math.min(practiceState.index,practiceState.list.length-1)]; const rec=state.answered[q.id]; const rev=defaultReview(q);
    const optionReview=practiceState.revealed&&q.optionExplanations?`<details class="option-review"><summary>Why each option is right or wrong</summary>${q.options.map((o,i)=>`<div class="option-explain ${i===q.answer?'is-correct':''}"><b>${String.fromCharCode(65+i)}. ${esc(o)}</b><p>${esc(q.optionExplanations[i]||'Review the underlying rule and account effect.')}</p></div>`).join('')}</details>`:'';
    host.innerHTML=`<div class="practice-stat">Question ${practiceState.index+1} of ${practiceState.list.length}${rec?` · previously ${rec.correct?'correct':'incorrect'}`:''}</div><div class="card practice-card"><div class="practice-meta"><span class="badge">${esc(chapterById(q.chapter).title)}</span><span class="badge">${esc(q.topic)}</span><span class="badge">${esc(q.type||'MCQ')}</span><span class="badge ${q.difficulty==='hard'?'red':'yellow'}">${esc(q.difficulty)}</span>${q.origin==='Course-original'?'<span class="badge black">COURSE-ORIGINAL</span>':sourceTag(q.source)}</div><div class="question-text">${esc(q.question)}</div><div class="options">${q.options.map((o,i)=>`<button class="option ${practiceState.revealed?(i===q.answer?'correct':i===practiceState.selected&&i!==q.answer?'wrong':''):practiceState.selected===i?'selected':''}" data-opt="${i}" ${practiceState.revealed?'disabled':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join('')}</div><div class="feedback ${practiceState.revealed?'show '+(practiceState.selected===q.answer?'correct':'wrong'):''}">${practiceState.revealed?`<h4>${practiceState.selected===q.answer?'Correct':'Not quite — correct answer: '+String.fromCharCode(65+q.answer)}</h4><div class="why-grid"><div><b>Rule → Apply → Result</b><p>${esc(q.explanation)}</p></div></div>${optionReview}<div class="review-card"><div class="review-icon">↳</div><div><b>Where to review this concept</b><p><strong>Lesson:</strong> ${esc(rev.lesson)}</p><p><strong>Teacher mind-map path:</strong> ${esc(rev.path)}</p><p><strong>Textbook cross-check:</strong> ${esc(rev.book)}</p><p><strong>Map anchor:</strong> ${esc(rev.map)}</p><a class="btn small" href="#learn/${q.chapter}">Open related chapter</a></div></div>`:''}</div><div class="practice-nav"><button class="btn small" id="prevQ" ${practiceState.index===0?'disabled':''}>Previous</button><div>${practiceState.revealed?`<button class="btn small ghost" id="addMistake">${state.mistakes[q.id]&&!state.mistakes[q.id].mastered?'In notebook':'Add to notebook'}</button>`:''}</div><button class="btn small primary" id="nextQ">${practiceState.index===practiceState.list.length-1?'Restart':'Next'}</button></div></div>`;
    host.querySelectorAll('.option').forEach(b=>b.onclick=()=>{practiceState.selected=Number(b.dataset.opt); practiceState.revealed=true; const correct=practiceState.selected===q.answer; const oldA=state.answered[q.id]||{attempts:0,correctAttempts:0}; state.answered[q.id]={correct,at:Date.now(),attempts:(oldA.attempts||0)+1,correctAttempts:(oldA.correctAttempts||0)+(correct?1:0),firstTryCorrect:oldA.attempts?oldA.firstTryCorrect:correct}; if(!correct){const old=state.mistakes[q.id]||{count:0,mastered:false}; state.mistakes[q.id]={count:(old.count||0)+1,mastered:false,lastAt:Date.now()};} saveState(); renderPracticeCard();});
    document.getElementById('prevQ').onclick=()=>{practiceState.index--;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard()};
    document.getElementById('nextQ').onclick=()=>{practiceState.index=(practiceState.index+1)%practiceState.list.length;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard()};
    const am=document.getElementById('addMistake'); if(am) am.onclick=()=>{const old=state.mistakes[q.id]||{count:0};state.mistakes[q.id]={count:Math.max(1,old.count||0),mastered:false,lastAt:Date.now()};saveState();renderPracticeCard();toast('Added to Mistake Notebook')};
  }

  function renderMistakes(){
    const items=Object.entries(state.mistakes).map(([id,m])=>({q:questionById(id),m})).filter(x=>x.q).sort((a,b)=>(a.m.mastered-b.m.mastered)||(b.m.lastAt-a.m.lastAt));
    main.innerHTML=`<div class="page">${pageHead('Review','Mistake Notebook','Wrong answers are captured automatically. Mark items mastered only when you can explain the rule without looking.')}${items.length?`<div class="grid two">${items.map(({q,m})=>`<div class="card"><div class="practice-meta"><span class="badge ${m.mastered?'':'red'}">${m.mastered?'mastered':'review'}</span><span class="badge">wrong ${m.count||1}×</span><span class="badge">${esc(q.topic)}</span></div><h3>${esc(q.question)}</h3><p><strong>Correct answer:</strong> ${String.fromCharCode(65+q.answer)}. ${esc(q.options[q.answer])}</p><div class="callout"><strong>Why</strong>${esc(q.explanation)}</div>${(()=>{const r=defaultReview(q);return `<div class="mini-review"><b>Review:</b> ${esc(r.lesson)}<br><small>${esc(r.path)}</small></div>`})()}<div style="display:flex;gap:8px"><button class="btn small primary masterBtn" data-id="${q.id}">${m.mastered?'Reopen':'Mark mastered'}</button><a class="btn small" href="#practice?chapter=${q.chapter}">Practice chapter</a></div></div>`).join('')}</div>`:`<div class="empty">No mistakes yet. Practice questions you miss will appear here automatically.</div>`}</div>`;
    main.querySelectorAll('.masterBtn').forEach(b=>b.onclick=()=>{state.mistakes[b.dataset.id].mastered=!state.mistakes[b.dataset.id].mastered;saveState();renderMistakes()});
  }

  function renderFlashcards(){
    const personal=window.AccountingAnnotations?.getPersonalFlashcards?.()||[];
    const builtIn=D.glossary.map(t=>({kind:'glossary',front:t.term,back:t.definition,vi:t.vi,chapter:t.chapter}));
    const custom=personal.map(t=>({kind:'personal',front:t.front,back:t.back,vi:'My personal card',chapter:`Ch ${t.chapterNumber||''} · ${t.lessonTitle||t.chapterTitle||'Theory'}`}));
    const deck=[...builtIn,...custom];
    const t=deck[flashIndex%Math.max(1,deck.length)]||{front:'No cards yet',back:'Create a personal flashcard from any highlighted theory passage.',vi:'',chapter:''};
    main.innerHTML=`<div class="page">${pageHead('Recall','Flashcards',`Use active recall before flipping. Built-in glossary cards: ${builtIn.length} · Personal cards from highlights: ${custom.length}.`)}<div class="flash-deck-meta"><span class="badge ${t.kind==='personal'?'black':'yellow'}">${t.kind==='personal'?'PERSONAL HIGHLIGHT':'COURSE GLOSSARY'}</span><span>${flashIndex+1} / ${deck.length}</span></div><div class="flashcard" id="flashCard">${flashBack?`<div class="back"><div class="vi-big">${esc(t.vi||'Explanation')}</div><p>${esc(t.back)}</p><span class="badge yellow">${esc(t.chapter)}</span></div>`:`<div><div class="front">${esc(t.front)}</div><p>${t.kind==='personal'?'Your own card created from a theory highlight.':'Click to reveal definition + Vietnamese key term.'}</p></div>`}</div><div class="flash-controls"><button class="btn" id="prevFlash">Previous</button><button class="btn primary" id="flipFlash">Flip</button><button class="btn" id="nextFlash">Next</button></div>${custom.length?'<p class="flash-hint">Personal cards are stored with My Notes and are included in annotation backup export/import.</p>':''}</div>`;
    document.getElementById('flashCard').onclick=()=>{flashBack=!flashBack;renderFlashcards()};
    document.getElementById('flipFlash').onclick=()=>{flashBack=!flashBack;renderFlashcards()};
    document.getElementById('prevFlash').onclick=()=>{flashIndex=(flashIndex-1+deck.length)%deck.length;flashBack=false;renderFlashcards()};
    document.getElementById('nextFlash').onclick=()=>{flashIndex=(flashIndex+1)%deck.length;flashBack=false;renderFlashcards()};
  }

  function renderFormula(){
    main.innerHTML=`<div class="page">${pageHead('Reference','Formula Sheet','High-frequency equations and sign rules for quick revision.')}<div class="grid two">${D.formulae.map(x=>`<div class="card formula"><h3>${esc(x.name)}</h3><code>${esc(x.formula)}</code><div class="vi">${esc(x.vi)}</div></div>`).join('')}</div></div>`;
  }

  function renderGlossary(){
    const initial=qs().get('q')||'';
    main.innerHTML=`<div class="page">${pageHead('Terminology','English ↔ Vietnamese Glossary','Search specialized accounting terms without switching away from the English-first course language.')}<input class="search-box" id="gSearch" placeholder="Search English or Vietnamese…" value="${esc(initial)}"><div id="gHost" class="glossary-grid" style="margin-top:15px"></div></div>`;
    const draw=()=>{const s=document.getElementById('gSearch').value.toLowerCase().trim();const L=D.glossary.filter(t=>(t.term+' '+t.vi+' '+t.definition).toLowerCase().includes(s));document.getElementById('gHost').innerHTML=L.map(t=>`<div class="term-card"><h3>${esc(t.term)}</h3><div class="vi">${esc(t.vi)}</div><p>${esc(t.definition)}</p><span class="badge" style="margin-top:8px">${esc(t.chapter)}</span></div>`).join('')||'<div class="empty">No matching term.</div>'};
    document.getElementById('gSearch').oninput=draw;draw();
  }

  function renderSources(){
    const links={ifrs:'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/',openstax:'https://openstax.org/details/books/principles-financial-accounting'};
    main.innerHTML=`<div class="page">${pageHead('Traceability','Sources & Verification','Academic content and templates are organized from your uploaded textbook, lecture material, FTU practice papers, and the updated class workbooks. Cross-check sources remain clearly labeled.')}<div class="case-warning"><strong>Source fidelity rule.</strong> The site does not blindly copy a supplied solution when it conflicts with the accounting logic. Example: the K61 note says accrued revenue can decrease assets; the verified treatment increases Accounts Receivable. The Sky Castle mock also contains a trial-balance inconsistency and is flagged rather than “solved” with invented numbers.</div><div class="grid two">${D.sources.map(s=>`<div class="card"><span class="badge yellow">${esc(s.type)}</span><h3 style="margin-top:8px">${esc(s.title)}</h3><p><strong>${esc(s.author)}</strong></p><p style="margin-top:7px">${esc(s.note)}</p>${links[s.id]?`<p style="margin-top:10px"><a class="btn small" href="${links[s.id]}" target="_blank" rel="noopener">Open reference</a></p>`:''}</div>`).join('')}</div></div>`;
  }

  function renderSearch(){
    main.innerHTML=`<div class="page">${pageHead('Global search','Search Accounting Mastery','Search theory sections, Vietnamese key terms, formulas, and practice questions.')}<input id="sSearch" class="search-box" placeholder="Try: accrued expense, dồn tích, trial balance, FIFO…"><div id="sHost" class="result-list"></div></div>`;
    const draw=()=>{const s=document.getElementById('sSearch').value.toLowerCase().trim();if(!s){document.getElementById('sHost').innerHTML='<div class="empty">Type a concept to search across the site.</div>';return}let R=[];D.chapters.forEach(c=>c.sections.forEach(x=>{const hay=(x.title+' '+x.lead+' '+x.body.join(' ')+' '+x.example+' '+x.trap).toLowerCase();if(hay.includes(s))R.push({type:'Theory',title:x.title,desc:x.lead,href:'#learn/'+c.id})}));D.glossary.forEach(t=>{if((t.term+' '+t.vi+' '+t.definition).toLowerCase().includes(s))R.push({type:'Glossary',title:t.term+' — '+t.vi,desc:t.definition,href:'#glossary?q='+encodeURIComponent(t.term)})});D.questions.forEach(q=>{if((q.question+' '+q.topic+' '+q.explanation).toLowerCase().includes(s))R.push({type:'Practice',title:q.topic,desc:q.question,href:'#practice?chapter='+q.chapter})});D.formulae.forEach(f=>{if((f.name+' '+f.formula+' '+f.vi).toLowerCase().includes(s))R.push({type:'Formula',title:f.name,desc:f.formula,href:'#formula'})});if(window.ACCOUNTING_MINDMAP){const walk=(nodes,path=[])=>nodes.forEach(n=>{const p=[...path,n.text];if(p.join(' ').toLowerCase().includes(s))R.push({type:'Teacher Mind Map',title:n.text,desc:p.join(' → '),href:'#mindmap'});walk(n.children||[],p)});walk(window.ACCOUNTING_MINDMAP.branches||[]);}if(window.ACCOUNTING_EXERCISES){window.ACCOUNTING_EXERCISES.chapters.forEach(c=>{const hay=(c.title+' '+c.ebook.fullText+' '+c.sourcePacks.map(p=>p.text).join(' ')).toLowerCase();if(hay.includes(s))R.push({type:'Full Exercises',title:'Chapter '+c.number+' — '+c.title,desc:'Complete ebook and uploaded-source exercise material',href:'#exercises/'+c.id})});}document.getElementById('sHost').innerHTML=R.slice(0,30).map(r=>`<a class="result" href="${r.href}"><small>${r.type}</small><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p></a>`).join('')||'<div class="empty">No results.</div>'};
    document.getElementById('sSearch').oninput=draw;draw();
  }

  function renderCase(id){
    const c=D.cases.find(x=>x.id===id)||D.cases[0];
    main.innerHTML=`<div class="page">${pageHead('Worked case',c.title,c.intro,`<a class="btn" href="#dashboard">Back to dashboard</a>`)}${c.warning?`<div class="case-warning"><strong>Data-quality warning.</strong> ${esc(c.warning)}</div>`:''}${c.steps.map(s=>`<section class="card case-step"><h3>${esc(s.title)}</h3><div class="table-wrap"><table class="data-table"><thead><tr><th>Item</th><th>Journal / result</th><th>Reasoning</th></tr></thead><tbody>${s.rows.map(r=>`<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`).join('')}</tbody></table></div></section>`).join('')}<div class="source-note">Source: ${esc(c.source)}. Solutions are independently checked against the textbook logic used elsewhere in the site.</div></div>`;
  }

  function shuffle(a){ const x=[...a]; for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]} return x }
  function startExam(){
    const list=shuffle(D.questions).slice(0,Math.min(30,D.questions.length));
    exam={list,answers:{},started:Date.now(),duration:40*60,submitted:false};
    renderExam(); startTimer();
  }
  function startTimer(){ clearInterval(examTimer); examTimer=setInterval(()=>{if(!exam||exam.submitted)return;const left=exam.duration-Math.floor((Date.now()-exam.started)/1000);const el=document.getElementById('examTimer');if(el)el.textContent=formatTime(Math.max(0,left));if(left<=0){clearInterval(examTimer);submitExam()}},1000); }
  function formatTime(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
  function renderExam(){
    if(!exam){main.innerHTML=`<div class="page"><div class="exam-box">${pageHead('Timed practice','Exam Mode','30 randomized questions · 40 minutes · answers and explanations shown only after submission.')}<div class="card"><h3>Ready?</h3><p>This mode samples from the full interactive bank. Use chapter Practice filters for targeted teacher-flow revision. Wrong answers are added to the Mistake Notebook after submission.</p><button class="btn primary" id="startExam" style="margin-top:12px">Start 40-minute exam</button></div></div></div>`;document.getElementById('startExam').onclick=startExam;return}
    const elapsed=Math.floor((Date.now()-exam.started)/1000), left=Math.max(0,exam.duration-elapsed);
    let result=''; if(exam.submitted){const score=exam.list.filter(q=>exam.answers[q.id]===q.answer).length;result=`<div class="exam-results"><strong>Score: ${score}/${exam.list.length} (${Math.round(score/exam.list.length*100)}%)</strong><br>Review explanations below; missed questions were added to the Mistake Notebook.</div>`}
    main.innerHTML=`<div class="page"><div class="exam-box">${pageHead('Timed practice','Exam Mode',exam.submitted?'Exam submitted. Review the reasoning, not just the letter.':'No immediate feedback until submission.',`<div class="timer" id="examTimer">${formatTime(left)}</div>`)}${result}${exam.list.map((q,ix)=>`<div class="exam-q"><div class="practice-meta"><span class="badge">Q${ix+1}</span><span class="badge">${esc(chapterById(q.chapter).title)}</span></div><h3>${esc(q.question)}</h3>${q.options.map((o,i)=>`<label class="exam-opt"><input type="radio" name="${q.id}" value="${i}" ${exam.answers[q.id]===i?'checked':''} ${exam.submitted?'disabled':''}> ${String.fromCharCode(65+i)}. ${esc(o)}</label>`).join('')}${exam.submitted?`<div class="callout ${exam.answers[q.id]===q.answer?'':'trap'}"><strong>${exam.answers[q.id]===q.answer?'Correct':'Correct answer: '+String.fromCharCode(65+q.answer)}</strong>${esc(q.explanation)}</div>`:''}</div>`).join('')}${!exam.submitted?`<button class="btn primary" id="submitExam">Submit exam</button>`:`<button class="btn primary" id="newExam">New exam</button>`}</div></div>`;
    if(!exam.submitted){main.querySelectorAll('.exam-opt input').forEach(i=>i.onchange=()=>exam.answers[i.name]=Number(i.value));document.getElementById('submitExam').onclick=submitExam;} else document.getElementById('newExam').onclick=()=>{exam=null;renderExam()};
  }
  function submitExam(){ if(!exam||exam.submitted)return;exam.submitted=true;clearInterval(examTimer);let score=0;exam.list.forEach(q=>{const a=exam.answers[q.id],correct=a===q.answer;if(correct)score++;state.answered[q.id]={correct,at:Date.now()};if(!correct){const old=state.mistakes[q.id]||{count:0};state.mistakes[q.id]={count:(old.count||0)+1,mastered:false,lastAt:Date.now()}}});state.exams.push({at:Date.now(),score,total:exam.list.length});saveState();renderExam();window.scrollTo({top:0,behavior:'smooth'});}

  function render(){
    closeMenu(); setActive(); updateProgressUI(); const [r,a]=route();
    if(r==='dashboard')renderDashboard(); else if(r==='mindmap')renderMindMap(); else if(r==='learn')renderLearn(a); else if(r==='practice')initPractice(); else if(r==='exercises')window.ExerciseBank.render(main,a); else if(r==='lab')window.AccountingLab.render(); else if(r==='mistakes')renderMistakes(); else if(r==='notes'&&window.AccountingAnnotations)window.AccountingAnnotations.renderNotes(main,D); else if(r==='flashcards')renderFlashcards(); else if(r==='formula')renderFormula(); else if(r==='exam')renderExam(); else if(r==='glossary')renderGlossary(); else if(r==='sources')renderSources(); else if(r==='search')renderSearch(); else if(r==='cases')renderCase(a); else renderDashboard();
    setActive(); main.focus({preventScroll:true}); window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',render);
  render();
})();
