(() => {
  const D = window.ACCOUNTING_DATA;
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

  chapterNav.innerHTML = D.chapters.map(c=>`<a href="#learn/${c.id}" data-chapter="${c.id}"><span class="chapter-num">${c.number}</span><span class="cn-text">${esc(c.title)}<small>${c.sections.length} theory blocks</small></span></a>`).join('');

  function pageHead(eyebrow,title,desc,action=''){
    return `<div class="page-head"><div><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>${action}</div>`;
  }
  function sourceTag(s){ return `<span class="badge yellow">${esc(s)}</span>`; }

  function renderDashboard(){
    const answered=Object.keys(state.answered).length;
    const correct=Object.values(state.answered).filter(v=>v.correct).length;
    const acc=answered?Math.round(correct/answered*100):0;
    const mistakes=Object.values(state.mistakes).filter(x=>!x.mastered).length;
    const chDone=Object.values(state.completedChapters).filter(Boolean).length;
    main.innerHTML=`<div class="page">
      <div class="hero-strip dashboard-hero"><div class="hero-copy"><span class="hero-kicker">UPDATED CLASS WORKBOOK · YELLOW / BLACK EDITION</span><h1>Study. Work it out. Check the structure.</h1><p>Expanded theory, 72 explained questions, Vietnamese key terms, source-based practice packs, and a new Accounting Lab with reusable worksheets for teacher and textbook exercises.</p><div class="hero-actions"><a class="btn primary" href="#lab">Open Accounting Lab</a><a class="btn hero-light" href="#practice">Start Practice</a><a class="btn hero-ghost" href="#learn/ch1">Course Map</a></div></div><img src="assets/hero-ledger.svg" alt="Yellow and black accounting ledger illustration" class="dashboard-hero-art"></div>
      <div class="section-title"><div><h2>Your Study System</h2><p>Progress is saved locally in your browser.</p></div></div>
      <div class="grid four">
        <div class="card metric"><div class="kicker">Overall</div><strong>${progress()}%</strong><small>${chDone}/${D.chapters.length} chapters marked complete</small></div>
        <div class="card metric"><div class="kicker">Practice</div><strong>${answered}</strong><small>unique questions attempted</small></div>
        <div class="card metric"><div class="kicker">Accuracy</div><strong>${acc}%</strong><small>${correct} correct attempts</small></div>
        <div class="card metric"><div class="kicker">To review</div><strong>${mistakes}</strong><small>active mistake-notebook items</small></div>
      </div>
      <div class="section-title"><div><h2>Quick Actions</h2><p>Keep the loop short: learn → practice → explain → review.</p></div></div>
      <div class="quick-grid">
        <a class="card quick-card featured" href="#lab"><img class="quick-art" src="assets/equation.svg" alt=""><div><h3>Accounting Lab</h3><p>A = L + E, journals, ledger, trial balance, adjustments, worksheet, FIFO and cash flows.</p></div></a>
        <a class="card quick-card" href="#practice"><span class="q-icon">✓</span><div><h3>Practice questions</h3><p>72 questions with immediate explanation and source tags.</p></div></a>
        <a class="card quick-card" href="#exam"><span class="q-icon">◷</span><div><h3>Exam mode</h3><p>30 randomized questions, timed, no instant feedback.</p></div></a>
        <a class="card quick-card" href="#mistakes"><span class="q-icon">↺</span><div><h3>Review mistakes</h3><p>Turn weak concepts into a targeted revision queue.</p></div></a>
        <a class="card quick-card" href="#glossary"><span class="q-icon">A</span><div><h3>55 key terms</h3><p>English-first definitions with Vietnamese support.</p></div></a>
      </div>
      <div class="section-title"><div><h2>Course Map</h2><p>Source-grounded theory for the supplied chapter set.</p></div></div>
      <div class="grid four">${D.chapters.map(c=>{
        const qp=D.questions.filter(q=>q.chapter===c.id); const done=qp.filter(q=>state.answered[q.id]).length; const pct=qp.length?Math.round(done/qp.length*100):0;
        return `<a class="card chapter-card" href="#learn/${c.id}"><div class="ch-no">${c.number}</div><h3>${esc(c.title)}</h3><p>${esc(c.subtitle)}</p><div class="progress-mini"><span style="width:${pct}%"></span></div><small>${done}/${qp.length} chapter questions attempted</small></a>`
      }).join('')}</div>
      <div class="section-title"><div><h2>Midterm Cases</h2><p>Long-form accounting-cycle work with error checking.</p></div></div>
      <div class="grid two">${D.cases.map(c=>`<a class="card" href="#cases/${c.id}"><span class="badge ${c.status.includes('inconsistency')?'red':'yellow'}">${esc(c.status)}</span><h3 style="margin-top:8px">${esc(c.title)}</h3><p>${esc(c.intro)}</p></a>`).join('')}</div>
    </div>`;
  }

  function renderLearn(id){
    const c=chapterById(id); const done=!!state.completedChapters[c.id];
    main.innerHTML=`<div class="page">
      ${pageHead(`Chapter ${c.number}`,c.title,c.subtitle,`<button class="btn ${done?'ghost':'primary'}" id="completeCh">${done?'Marked complete':'Mark chapter complete'}</button>`)}
      <div class="learn-layout"><div class="lesson-stack">${c.sections.map((s,i)=>`<article class="lesson" id="lesson-${i}"><div class="lesson-head"><h2>${esc(s.title)}</h2><p>${esc(s.lead)}</p></div><div class="lesson-body"><ul>${s.body.map(b=>`<li>${esc(b)}</li>`).join('')}</ul><div class="callout"><strong>Worked example</strong>${esc(s.example)}</div><div class="callout trap"><strong>Common exam trap</strong>${esc(s.trap)}</div><div class="term-chips">${s.terms.map(t=>`<a href="#glossary?q=${encodeURIComponent(t)}" class="chip">${esc(t)}</a>`).join('')}</div></div></article>`).join('')}</div>
      <aside class="sticky"><div class="card outline-card"><h3>Learning objectives</h3><ul class="objective-list">${c.objectives.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="source-note"><strong>Source trail</strong><br>${esc(c.source)}</div><div style="margin-top:12px"><a class="btn small primary" href="#practice?chapter=${c.id}">Practice this chapter</a></div></div></aside></div>
    </div>`;
    document.getElementById('completeCh').onclick=()=>{ state.completedChapters[c.id]=!state.completedChapters[c.id]; saveState(); renderLearn(c.id); toast(state.completedChapters[c.id]?'Chapter marked complete':'Chapter reopened'); };
  }

  function qs(){ return new URLSearchParams((location.hash.split('?')[1]||'')); }
  function filterQuestions(){
    const ch=document.getElementById('fChapter')?.value||'all';
    const diff=document.getElementById('fDifficulty')?.value||'all';
    const term=(document.getElementById('fSearch')?.value||'').toLowerCase().trim();
    return D.questions.filter(q=>(ch==='all'||q.chapter===ch)&&(diff==='all'||q.difficulty===diff)&&(!term||(q.question+' '+q.topic+' '+q.explanation).toLowerCase().includes(term)));
  }
  function initPractice(){
    const param=qs().get('chapter')||'all';
    main.innerHTML=`<div class="page">${pageHead('Practice','Guided Question Bank','Source-based and course-original questions with immediate feedback, detailed reasoning, and automatic mistake capture.')}
      <div class="filters"><select id="fChapter" class="control"><option value="all">All chapters</option>${D.chapters.map(c=>`<option value="${c.id}" ${c.id===param?'selected':''}>Ch ${c.number} · ${esc(c.title)}</option>`).join('')}</select><select id="fDifficulty" class="control"><option value="all">All difficulty</option><option>easy</option><option>medium</option><option>hard</option></select><input id="fSearch" class="control" placeholder="Search topic or wording…"><button id="shuffleBtn" class="btn small">Shuffle</button></div>
      <div id="practiceHost"></div></div>`;
    ['fChapter','fDifficulty','fSearch'].forEach(id=>document.getElementById(id).addEventListener(id==='fSearch'?'input':'change',()=>{practiceState.index=0;practiceState.selected=null;practiceState.revealed=false;practiceState.list=filterQuestions();renderPracticeCard();}));
    document.getElementById('shuffleBtn').onclick=()=>{practiceState.list=shuffle(filterQuestions());practiceState.index=0;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard();};
    practiceState.list=filterQuestions(); practiceState.index=0; renderPracticeCard();
  }
  function renderPracticeCard(){
    const host=document.getElementById('practiceHost'); if(!host)return;
    if(!practiceState.list.length){host.innerHTML=`<div class="empty">No questions match these filters.</div>`;return}
    const q=practiceState.list[Math.min(practiceState.index,practiceState.list.length-1)];
    const rec=state.answered[q.id];
    host.innerHTML=`<div class="practice-stat">Question ${practiceState.index+1} of ${practiceState.list.length}${rec?` · previously ${rec.correct?'correct':'incorrect'}`:''}</div><div class="card practice-card"><div class="practice-meta"><span class="badge">${esc(chapterById(q.chapter).title)}</span><span class="badge">${esc(q.topic)}</span><span class="badge ${q.difficulty==='hard'?'red':'yellow'}">${esc(q.difficulty)}</span>${sourceTag(q.source)}</div><div class="question-text">${esc(q.question)}</div><div class="options">${q.options.map((o,i)=>`<button class="option ${practiceState.revealed?(i===q.answer?'correct':i===practiceState.selected&&i!==q.answer?'wrong':''):practiceState.selected===i?'selected':''}" data-opt="${i}" ${practiceState.revealed?'disabled':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${esc(o)}</span></button>`).join('')}</div><div class="feedback ${practiceState.revealed?'show '+(practiceState.selected===q.answer?'correct':'wrong'):''}">${practiceState.revealed?`<h4>${practiceState.selected===q.answer?'Correct':'Not quite — correct answer: '+String.fromCharCode(65+q.answer)}</h4><p>${esc(q.explanation)}</p>`:''}</div><div class="practice-nav"><button class="btn small" id="prevQ" ${practiceState.index===0?'disabled':''}>Previous</button><div>${practiceState.revealed?`<button class="btn small ghost" id="addMistake">${state.mistakes[q.id]&&!state.mistakes[q.id].mastered?'In notebook':'Add to notebook'}</button>`:''}</div><button class="btn small primary" id="nextQ">${practiceState.index===practiceState.list.length-1?'Restart':'Next'}</button></div></div>`;
    host.querySelectorAll('.option').forEach(b=>b.onclick=()=>{practiceState.selected=Number(b.dataset.opt); practiceState.revealed=true; const correct=practiceState.selected===q.answer; state.answered[q.id]={correct,at:Date.now()}; if(!correct){const old=state.mistakes[q.id]||{count:0,mastered:false}; state.mistakes[q.id]={count:(old.count||0)+1,mastered:false,lastAt:Date.now()};} saveState(); renderPracticeCard();});
    document.getElementById('prevQ').onclick=()=>{practiceState.index--;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard()};
    document.getElementById('nextQ').onclick=()=>{practiceState.index=(practiceState.index+1)%practiceState.list.length;practiceState.selected=null;practiceState.revealed=false;renderPracticeCard()};
    const am=document.getElementById('addMistake'); if(am) am.onclick=()=>{const old=state.mistakes[q.id]||{count:0};state.mistakes[q.id]={count:Math.max(1,old.count||0),mastered:false,lastAt:Date.now()};saveState();renderPracticeCard();toast('Added to Mistake Notebook')};
  }

  function renderMistakes(){
    const items=Object.entries(state.mistakes).map(([id,m])=>({q:questionById(id),m})).filter(x=>x.q).sort((a,b)=>(a.m.mastered-b.m.mastered)||(b.m.lastAt-a.m.lastAt));
    main.innerHTML=`<div class="page">${pageHead('Review','Mistake Notebook','Wrong answers are captured automatically. Mark items mastered only when you can explain the rule without looking.')}${items.length?`<div class="grid two">${items.map(({q,m})=>`<div class="card"><div class="practice-meta"><span class="badge ${m.mastered?'':'red'}">${m.mastered?'mastered':'review'}</span><span class="badge">wrong ${m.count||1}×</span><span class="badge">${esc(q.topic)}</span></div><h3>${esc(q.question)}</h3><p><strong>Correct answer:</strong> ${String.fromCharCode(65+q.answer)}. ${esc(q.options[q.answer])}</p><div class="callout"><strong>Why</strong>${esc(q.explanation)}</div><div style="display:flex;gap:8px"><button class="btn small primary masterBtn" data-id="${q.id}">${m.mastered?'Reopen':'Mark mastered'}</button><a class="btn small" href="#practice?chapter=${q.chapter}">Practice chapter</a></div></div>`).join('')}</div>`:`<div class="empty">No mistakes yet. Practice questions you miss will appear here automatically.</div>`}</div>`;
    main.querySelectorAll('.masterBtn').forEach(b=>b.onclick=()=>{state.mistakes[b.dataset.id].mastered=!state.mistakes[b.dataset.id].mastered;saveState();renderMistakes()});
  }

  function renderFlashcards(){
    const t=D.glossary[flashIndex%D.glossary.length];
    main.innerHTML=`<div class="page">${pageHead('Recall','Flashcards','Use active recall: say the definition and Vietnamese meaning before flipping the card.')}<div class="flashcard" id="flashCard">${flashBack?`<div class="back"><div class="vi-big">${esc(t.vi)}</div><p>${esc(t.definition)}</p><span class="badge yellow">${esc(t.chapter)}</span></div>`:`<div><div class="front">${esc(t.term)}</div><p>Click to reveal definition + Vietnamese key term.</p></div>`}</div><div class="flash-controls"><button class="btn" id="prevFlash">Previous</button><button class="btn primary" id="flipFlash">Flip</button><button class="btn" id="nextFlash">Next</button></div></div>`;
    document.getElementById('flashCard').onclick=()=>{flashBack=!flashBack;renderFlashcards()};
    document.getElementById('flipFlash').onclick=()=>{flashBack=!flashBack;renderFlashcards()};
    document.getElementById('prevFlash').onclick=()=>{flashIndex=(flashIndex-1+D.glossary.length)%D.glossary.length;flashBack=false;renderFlashcards()};
    document.getElementById('nextFlash').onclick=()=>{flashIndex=(flashIndex+1)%D.glossary.length;flashBack=false;renderFlashcards()};
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
    const draw=()=>{const s=document.getElementById('sSearch').value.toLowerCase().trim();if(!s){document.getElementById('sHost').innerHTML='<div class="empty">Type a concept to search across the site.</div>';return}let R=[];D.chapters.forEach(c=>c.sections.forEach(x=>{const hay=(x.title+' '+x.lead+' '+x.body.join(' ')+' '+x.example+' '+x.trap).toLowerCase();if(hay.includes(s))R.push({type:'Theory',title:x.title,desc:x.lead,href:'#learn/'+c.id})}));D.glossary.forEach(t=>{if((t.term+' '+t.vi+' '+t.definition).toLowerCase().includes(s))R.push({type:'Glossary',title:t.term+' — '+t.vi,desc:t.definition,href:'#glossary?q='+encodeURIComponent(t.term)})});D.questions.forEach(q=>{if((q.question+' '+q.topic+' '+q.explanation).toLowerCase().includes(s))R.push({type:'Practice',title:q.topic,desc:q.question,href:'#practice?chapter='+q.chapter})});D.formulae.forEach(f=>{if((f.name+' '+f.formula+' '+f.vi).toLowerCase().includes(s))R.push({type:'Formula',title:f.name,desc:f.formula,href:'#formula'})});document.getElementById('sHost').innerHTML=R.slice(0,30).map(r=>`<a class="result" href="${r.href}"><small>${r.type}</small><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p></a>`).join('')||'<div class="empty">No results.</div>'};
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
    if(!exam){main.innerHTML=`<div class="page"><div class="exam-box">${pageHead('Timed practice','Exam Mode','30 randomized questions · 40 minutes · answers and explanations shown only after submission.')}<div class="card"><h3>Ready?</h3><p>This mode samples across all seven chapters. Wrong answers are added to the Mistake Notebook after submission.</p><button class="btn primary" id="startExam" style="margin-top:12px">Start 40-minute exam</button></div></div></div>`;document.getElementById('startExam').onclick=startExam;return}
    const elapsed=Math.floor((Date.now()-exam.started)/1000), left=Math.max(0,exam.duration-elapsed);
    let result=''; if(exam.submitted){const score=exam.list.filter(q=>exam.answers[q.id]===q.answer).length;result=`<div class="exam-results"><strong>Score: ${score}/${exam.list.length} (${Math.round(score/exam.list.length*100)}%)</strong><br>Review explanations below; missed questions were added to the Mistake Notebook.</div>`}
    main.innerHTML=`<div class="page"><div class="exam-box">${pageHead('Timed practice','Exam Mode',exam.submitted?'Exam submitted. Review the reasoning, not just the letter.':'No immediate feedback until submission.',`<div class="timer" id="examTimer">${formatTime(left)}</div>`)}${result}${exam.list.map((q,ix)=>`<div class="exam-q"><div class="practice-meta"><span class="badge">Q${ix+1}</span><span class="badge">${esc(chapterById(q.chapter).title)}</span></div><h3>${esc(q.question)}</h3>${q.options.map((o,i)=>`<label class="exam-opt"><input type="radio" name="${q.id}" value="${i}" ${exam.answers[q.id]===i?'checked':''} ${exam.submitted?'disabled':''}> ${String.fromCharCode(65+i)}. ${esc(o)}</label>`).join('')}${exam.submitted?`<div class="callout ${exam.answers[q.id]===q.answer?'':'trap'}"><strong>${exam.answers[q.id]===q.answer?'Correct':'Correct answer: '+String.fromCharCode(65+q.answer)}</strong>${esc(q.explanation)}</div>`:''}</div>`).join('')}${!exam.submitted?`<button class="btn primary" id="submitExam">Submit exam</button>`:`<button class="btn primary" id="newExam">New exam</button>`}</div></div>`;
    if(!exam.submitted){main.querySelectorAll('.exam-opt input').forEach(i=>i.onchange=()=>exam.answers[i.name]=Number(i.value));document.getElementById('submitExam').onclick=submitExam;} else document.getElementById('newExam').onclick=()=>{exam=null;renderExam()};
  }
  function submitExam(){ if(!exam||exam.submitted)return;exam.submitted=true;clearInterval(examTimer);let score=0;exam.list.forEach(q=>{const a=exam.answers[q.id],correct=a===q.answer;if(correct)score++;state.answered[q.id]={correct,at:Date.now()};if(!correct){const old=state.mistakes[q.id]||{count:0};state.mistakes[q.id]={count:(old.count||0)+1,mastered:false,lastAt:Date.now()}}});state.exams.push({at:Date.now(),score,total:exam.list.length});saveState();renderExam();window.scrollTo({top:0,behavior:'smooth'});}

  function render(){
    closeMenu(); setActive(); updateProgressUI(); const [r,a]=route();
    if(r==='dashboard')renderDashboard(); else if(r==='learn')renderLearn(a); else if(r==='practice')initPractice(); else if(r==='lab')window.AccountingLab.render(); else if(r==='mistakes')renderMistakes(); else if(r==='flashcards')renderFlashcards(); else if(r==='formula')renderFormula(); else if(r==='exam')renderExam(); else if(r==='glossary')renderGlossary(); else if(r==='sources')renderSources(); else if(r==='search')renderSearch(); else if(r==='cases')renderCase(a); else renderDashboard();
    setActive(); main.focus({preventScroll:true}); window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',render);
  render();
})();
