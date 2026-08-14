(() => {
  const STORAGE_KEY = 'accountingMasteryAnnotationsV1';
  const COLOR_META = {
    yellow: { label: 'Important', symbol: '★' },
    red: { label: 'Exam trap', symbol: '!' },
    green: { label: 'Understood / example', symbol: '✓' },
    blue: { label: 'Definition', symbol: 'A' }
  };

  let currentChapter = null;
  let currentSelection = null;
  let toolbar = null;
  let modal = null;
  let bound = false;

  function uid(prefix='ann'){
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`;
  }
  function esc(s=''){
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  }
  function normalizeStore(raw){
    const base = { version: 1, annotations: [], flashcards: [] };
    if(!raw || typeof raw !== 'object') return base;
    base.annotations = Array.isArray(raw.annotations) ? raw.annotations : [];
    base.flashcards = Array.isArray(raw.flashcards) ? raw.flashcards : [];
    return base;
  }
  function load(){
    try { return normalizeStore(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
    catch { return normalizeStore(); }
  }
  function save(data){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeStore(data)));
    window.dispatchEvent(new CustomEvent('accounting-annotations-updated'));
  }
  function allAnnotations(){ return load().annotations; }
  function chapterAnnotations(chapterId){
    return allAnnotations().filter(a => a.chapterId === chapterId).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  }
  function getPersonalFlashcards(){ return load().flashcards || []; }

  function ensureUI(){
    if(toolbar && modal) return;
    toolbar = document.createElement('div');
    toolbar.id = 'annotationToolbar';
    toolbar.className = 'annotation-toolbar';
    toolbar.setAttribute('role','toolbar');
    toolbar.setAttribute('aria-label','Text annotation tools');
    toolbar.innerHTML = `
      <button type="button" data-ann-action="highlight" title="Highlight selection"><span class="ann-tool-icon">✦</span> Highlight</button>
      <button type="button" data-ann-action="note" title="Highlight and add a note"><span class="ann-tool-icon">▣</span> Note</button>
      <button type="button" data-ann-action="flashcard" title="Turn selection into a personal flashcard"><span class="ann-tool-icon">▱</span> Flashcard</button>
      <span class="ann-divider"></span>
      ${Object.entries(COLOR_META).map(([key,m])=>`<button type="button" class="ann-color ann-color-${key}" data-ann-color="${key}" title="${m.label}" aria-label="${m.label}"></button>`).join('')}
    `;
    document.body.appendChild(toolbar);

    modal = document.createElement('div');
    modal.id = 'annotationModal';
    modal.className = 'annotation-modal-shell';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML = `<div class="annotation-modal-backdrop" data-ann-close></div><div class="annotation-modal" role="dialog" aria-modal="true" aria-labelledby="annModalTitle"><button class="annotation-modal-x" data-ann-close aria-label="Close">×</button><div id="annModalBody"></div></div>`;
    document.body.appendChild(modal);

    toolbar.addEventListener('mousedown', e => e.preventDefault());
    toolbar.addEventListener('click', e => {
      const color = e.target.closest('[data-ann-color]')?.dataset.annColor;
      if(color){ createFromCurrent(color, '', false); return; }
      const action = e.target.closest('[data-ann-action]')?.dataset.annAction;
      if(action === 'highlight') createFromCurrent('yellow','',false);
      if(action === 'note') openCreateNote();
      if(action === 'flashcard') openFlashcardCreator();
    });
    modal.addEventListener('click', e => {
      if(e.target.closest('[data-ann-close]')) closeModal();
    });
  }

  function hideToolbar(){ if(toolbar) toolbar.classList.remove('show'); }
  function positionToolbar(range){
    if(!toolbar) return;
    const rect = range.getBoundingClientRect();
    if(!rect || (!rect.width && !rect.height)) return;
    toolbar.classList.add('show');
    const w = toolbar.offsetWidth || 430;
    const h = toolbar.offsetHeight || 44;
    let left = rect.left + rect.width/2 - w/2;
    let top = rect.top - h - 10;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    if(top < 8) top = rect.bottom + 10;
    toolbar.style.left = `${left}px`;
    toolbar.style.top = `${top}px`;
  }

  function selectionContext(){
    const sel = window.getSelection();
    if(!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    const range = sel.getRangeAt(0);
    const text = range.toString();
    if(!text || text.trim().length < 2) return null;
    const startEl = range.startContainer.nodeType === 1 ? range.startContainer : range.startContainer.parentElement;
    const endEl = range.endContainer.nodeType === 1 ? range.endContainer : range.endContainer.parentElement;
    const startLesson = startEl?.closest?.('.lesson.deep-lesson');
    const endLesson = endEl?.closest?.('.lesson.deep-lesson');
    if(!startLesson || startLesson !== endLesson) return null;
    // Keep one annotation inside one readable theory block. This preserves layout and makes quote anchoring reliable after reloads.
    const blockSelector='p,h2,h3,h4,li,.worked-scenario,.worked-check,.lesson-source>div,.deep-purpose,.callout,.depth-banner';
    const startBlock=startEl?.closest?.(blockSelector);
    const endBlock=endEl?.closest?.(blockSelector);
    if(!startBlock || startBlock!==endBlock) return null;
    if(startEl?.closest?.('.annotation-toolbar,.annotation-modal-shell') || endEl?.closest?.('.annotation-toolbar,.annotation-modal-shell')) return null;
    if(startEl?.closest?.('mark.am-annotation') || endEl?.closest?.('mark.am-annotation')) return null;
    return { sel, range: range.cloneRange(), text, lesson: startLesson };
  }

  function captureSelection(){
    const ctx = selectionContext();
    if(!ctx){ hideToolbar(); currentSelection = null; return; }
    const lessonIndex = Number(ctx.lesson.dataset.lessonIndex);
    const startRange = document.createRange();
    startRange.selectNodeContents(ctx.lesson);
    try { startRange.setEnd(ctx.range.startContainer, ctx.range.startOffset); }
    catch { hideToolbar(); return; }
    const fullText = ctx.lesson.textContent || '';
    const start = startRange.toString().length;
    const end = start + ctx.range.toString().length;
    currentSelection = {
      range: ctx.range,
      exact: ctx.range.toString(),
      prefix: fullText.slice(Math.max(0,start-48), start),
      suffix: fullText.slice(end, end+48),
      lessonIndex,
      lessonTitle: currentChapter?.lessons?.[lessonIndex]?.title || `Lesson ${lessonIndex+1}`,
      mapPath: currentChapter?.lessons?.[lessonIndex]?.mapPath || '',
      chapterId: currentChapter?.chapterId || '',
      chapterNumber: currentChapter?.chapterNumber || '',
      chapterTitle: currentChapter?.chapterTitle || ''
    };
    positionToolbar(ctx.range);
  }

  function openModal(html, afterOpen){
    ensureUI();
    document.getElementById('annModalBody').innerHTML = html;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    hideToolbar();
    if(afterOpen) requestAnimationFrame(afterOpen);
  }
  function closeModal(){
    if(!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }

  function colorChoices(selected='yellow'){
    return `<div class="ann-color-choices">${Object.entries(COLOR_META).map(([key,m])=>`<label class="ann-choice ${key===selected?'selected':''}"><input type="radio" name="annColor" value="${key}" ${key===selected?'checked':''}><span class="ann-choice-dot ann-bg-${key}"></span><span>${esc(m.label)}</span></label>`).join('')}</div>`;
  }

  function openCreateNote(){
    if(!currentSelection) return;
    openModal(`
      <div class="ann-modal-kicker">NEW ANNOTATION</div>
      <h2 id="annModalTitle">Highlight + comment</h2>
      <blockquote class="ann-quote">${esc(currentSelection.exact.trim())}</blockquote>
      <label class="ann-field"><span>Your note</span><textarea id="annNoteInput" rows="5" placeholder="Example: Cash receipt is not always revenue. Watch for unearned revenue questions."></textarea></label>
      <div class="ann-field"><span>Highlight meaning</span>${colorChoices('yellow')}</div>
      <div class="ann-modal-actions"><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="saveNewAnnotation">Save annotation</button></div>
    `, ()=>document.getElementById('annNoteInput')?.focus());
    document.getElementById('annModalBody').querySelectorAll('input[name="annColor"]').forEach(r=>r.onchange=()=>syncChoiceSelection());
    document.getElementById('saveNewAnnotation').onclick=()=>{
      const note=document.getElementById('annNoteInput').value.trim();
      const color=document.querySelector('#annModalBody input[name="annColor"]:checked')?.value || 'yellow';
      createFromCurrent(color,note,false);
      closeModal();
    };
  }

  function syncChoiceSelection(){
    document.querySelectorAll('#annModalBody .ann-choice').forEach(x=>x.classList.toggle('selected',!!x.querySelector('input:checked')));
  }

  function openFlashcardCreator(){
    if(!currentSelection) return;
    openModal(`
      <div class="ann-modal-kicker">PERSONAL FLASHCARD</div>
      <h2 id="annModalTitle">Turn your highlight into a card</h2>
      <label class="ann-field"><span>Front</span><textarea id="flashFront" rows="3">${esc(currentSelection.exact.trim())}</textarea></label>
      <label class="ann-field"><span>Back / explanation</span><textarea id="flashBack" rows="5" placeholder="Write the definition, explanation, or the question you want to recall."></textarea></label>
      <div class="ann-modal-actions"><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="savePersonalFlash">Save flashcard</button></div>
    `, ()=>document.getElementById('flashBack')?.focus());
    document.getElementById('savePersonalFlash').onclick=()=>{
      const front=document.getElementById('flashFront').value.trim();
      const back=document.getElementById('flashBack').value.trim();
      if(!front || !back){ document.getElementById('flashBack').focus(); return; }
      const data=load();
      data.flashcards.push({id:uid('flash'),front,back,chapterId:currentSelection.chapterId,chapterNumber:currentSelection.chapterNumber,chapterTitle:currentSelection.chapterTitle,lessonTitle:currentSelection.lessonTitle,createdAt:Date.now()});
      save(data); closeModal();
      notify('Personal flashcard saved.');
    };
  }

  function createFromCurrent(color='yellow', note='', openEditor=false){
    if(!currentSelection) return;
    const now=Date.now();
    const ann={
      id:uid(),
      chapterId:currentSelection.chapterId,
      chapterNumber:currentSelection.chapterNumber,
      chapterTitle:currentSelection.chapterTitle,
      lessonIndex:currentSelection.lessonIndex,
      lessonTitle:currentSelection.lessonTitle,
      mapPath:currentSelection.mapPath,
      exact:currentSelection.exact,
      prefix:currentSelection.prefix,
      suffix:currentSelection.suffix,
      color:COLOR_META[color]?color:'yellow',
      note:note || '',
      createdAt:now,
      updatedAt:now
    };
    const data=load(); data.annotations.push(ann); save(data);
    const lesson=document.querySelector(`.lesson.deep-lesson[data-lesson-index="${ann.lessonIndex}"]`);
    if(lesson) applyOne(lesson,ann);
    window.getSelection()?.removeAllRanges();
    currentSelection=null; hideToolbar(); renderChapterPanel();
    notify(note?'Highlight + note saved.':'Highlight saved.');
    if(openEditor) openEditorModal(ann.id);
  }

  function notify(msg){
    const toast=document.getElementById('toast');
    if(toast){ toast.textContent=msg; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1800); }
  }

  function textNodes(container){
    const out=[];
    const walker=document.createTreeWalker(container,NodeFilter.SHOW_TEXT,{acceptNode(node){
      if(!node.nodeValue) return NodeFilter.FILTER_REJECT;
      const p=node.parentElement;
      if(!p || p.closest('script,style,.annotation-toolbar,.annotation-modal-shell')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
    let n; while((n=walker.nextNode())) out.push(n); return out;
  }
  function mapText(container){
    const nodes=textNodes(container); let pos=0;
    const mapped=nodes.map(node=>{const start=pos,end=pos+node.nodeValue.length;pos=end;return {node,start,end};});
    return {text:nodes.map(n=>n.nodeValue).join(''),mapped};
  }
  function occurrenceIndices(hay,needle){
    const arr=[]; if(!needle) return arr; let i=hay.indexOf(needle);
    while(i!==-1){arr.push(i);i=hay.indexOf(needle,i+1);} return arr;
  }
  function quoteScore(text,index,ann){
    let score=0;
    if(ann.prefix){const before=text.slice(Math.max(0,index-ann.prefix.length),index);let common=0;for(let i=1;i<=Math.min(before.length,ann.prefix.length);i++){if(before.slice(-i)===ann.prefix.slice(-i))common=i;}score+=common;}
    const afterStart=index+ann.exact.length;
    if(ann.suffix){const after=text.slice(afterStart,afterStart+ann.suffix.length);let common=0;for(let i=1;i<=Math.min(after.length,ann.suffix.length);i++){if(after.slice(0,i)===ann.suffix.slice(0,i))common=i;}score+=common;}
    return score;
  }
  function findQuote(container,ann){
    const {text,mapped}=mapText(container);
    const indexes=occurrenceIndices(text,ann.exact);
    if(!indexes.length) return null;
    indexes.sort((a,b)=>quoteScore(text,b,ann)-quoteScore(text,a,ann));
    const start=indexes[0], end=start+ann.exact.length;
    let s=null,e=null;
    for(const m of mapped){
      if(!s && start>=m.start && start<=m.end) s={node:m.node,offset:Math.max(0,start-m.start)};
      if(end>=m.start && end<=m.end){e={node:m.node,offset:Math.max(0,end-m.start)};break;}
    }
    if(!s || !e) return null;
    const range=document.createRange();
    try{range.setStart(s.node,Math.min(s.offset,s.node.nodeValue.length));range.setEnd(e.node,Math.min(e.offset,e.node.nodeValue.length));}catch{return null;}
    return range;
  }

  function selectedSegments(container,range){
    const nodes=textNodes(container).filter(n=>{
      try{return range.intersectsNode(n);}catch{return false;}
    });
    return nodes.map(node=>{
      let start=0,end=node.nodeValue.length;
      if(node===range.startContainer) start=range.startOffset;
      if(node===range.endContainer) end=range.endOffset;
      if(node===range.startContainer && range.startContainer.nodeType!==3) start=0;
      if(node===range.endContainer && range.endContainer.nodeType!==3) end=node.nodeValue.length;
      return {node,start,end};
    }).filter(x=>x.end>x.start);
  }

  function wrapSegments(container,range,ann){
    const segments=selectedSegments(container,range);
    if(!segments.length) return false;
    if(segments.some(s=>s.node.parentElement?.closest('mark.am-annotation'))) return false;
    for(let i=segments.length-1;i>=0;i--){
      const {node,start,end}=segments[i];
      if(!node.isConnected) continue;
      const selected=node.splitText(start);
      selected.splitText(end-start);
      const mark=document.createElement('mark');
      mark.className=`am-annotation ann-bg-${ann.color||'yellow'}`;
      mark.dataset.annId=ann.id;
      mark.title=ann.note ? `Note: ${ann.note}` : `${COLOR_META[ann.color]?.label||'Highlight'} — click to edit`;
      selected.parentNode.insertBefore(mark,selected);
      mark.appendChild(selected);
    }
    return true;
  }

  function applyOne(lesson,ann){
    if(lesson.querySelector(`[data-ann-id="${CSS.escape(ann.id)}"]`)) return true;
    const range=findQuote(lesson,ann);
    if(!range) return false;
    return wrapSegments(lesson,range,ann);
  }
  function applyChapter(){
    if(!currentChapter) return;
    chapterAnnotations(currentChapter.chapterId).forEach(ann=>{
      const lesson=document.querySelector(`.lesson.deep-lesson[data-lesson-index="${ann.lessonIndex}"]`);
      if(lesson) applyOne(lesson,ann);
    });
  }

  function unwrapAnnotation(id){
    document.querySelectorAll(`mark.am-annotation[data-ann-id="${CSS.escape(id)}"]`).forEach(mark=>{
      const p=mark.parentNode; while(mark.firstChild)p.insertBefore(mark.firstChild,mark); mark.remove(); p?.normalize();
    });
  }
  function deleteAnnotation(id){
    const data=load();
    data.annotations=data.annotations.filter(a=>a.id!==id); save(data); unwrapAnnotation(id); renderChapterPanel();
    if(location.hash.startsWith('#notes')) renderNotes(document.getElementById('main'),window.ACCOUNTING_DATA);
    notify('Annotation deleted.');
  }

  function openEditorModal(id){
    const ann=allAnnotations().find(a=>a.id===id); if(!ann) return;
    openModal(`
      <div class="ann-modal-kicker">EDIT ANNOTATION</div>
      <h2 id="annModalTitle">${esc(ann.lessonTitle||'Theory note')}</h2>
      <blockquote class="ann-quote">${esc(ann.exact.trim())}</blockquote>
      <label class="ann-field"><span>Your note</span><textarea id="annEditNote" rows="5" placeholder="Add your own explanation, exam warning, or memory hook.">${esc(ann.note||'')}</textarea></label>
      <div class="ann-field"><span>Highlight meaning</span>${colorChoices(ann.color||'yellow')}</div>
      <div class="ann-editor-meta"><b>Chapter ${esc(ann.chapterNumber)} · ${esc(ann.chapterTitle)}</b><span>${esc(ann.mapPath||ann.lessonTitle||'')}</span></div>
      <div class="ann-modal-actions split"><button class="btn danger" id="deleteAnn">Delete</button><span></span><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="updateAnn">Save changes</button></div>
    `, ()=>document.getElementById('annEditNote')?.focus());
    document.getElementById('annModalBody').querySelectorAll('input[name="annColor"]').forEach(r=>r.onchange=()=>syncChoiceSelection());
    document.getElementById('deleteAnn').onclick=()=>{ if(confirm('Delete this highlight and note?')){ closeModal(); deleteAnnotation(id); } };
    document.getElementById('updateAnn').onclick=()=>{
      const data=load(); const a=data.annotations.find(x=>x.id===id); if(!a)return;
      a.note=document.getElementById('annEditNote').value.trim();
      a.color=document.querySelector('#annModalBody input[name="annColor"]:checked')?.value||'yellow';
      a.updatedAt=Date.now(); save(data);
      document.querySelectorAll(`mark.am-annotation[data-ann-id="${CSS.escape(id)}"]`).forEach(m=>{m.className=`am-annotation ann-bg-${a.color}`;m.title=a.note?`Note: ${a.note}`:`${COLOR_META[a.color]?.label||'Highlight'} — click to edit`;});
      closeModal();renderChapterPanel(); if(location.hash.startsWith('#notes')) renderNotes(document.getElementById('main'),window.ACCOUNTING_DATA); notify('Annotation updated.');
    };
  }

  function renderChapterPanel(){
    const host=document.getElementById('chapterAnnotationPanel'); if(!host || !currentChapter) return;
    const anns=chapterAnnotations(currentChapter.chapterId);
    host.innerHTML=`<div class="card chapter-notes-card"><div class="chapter-notes-head"><div><span class="mini-kicker">MY ANNOTATIONS</span><h3>${anns.length} in this chapter</h3></div><a href="#notes" class="btn tiny">View all</a></div>${anns.length?`<div class="chapter-note-list">${anns.slice(0,5).map(a=>`<button class="chapter-note-item" data-panel-ann="${esc(a.id)}"><span class="ann-choice-dot ann-bg-${a.color||'yellow'}"></span><span><b>${esc((a.exact||'').trim().slice(0,72))}${(a.exact||'').trim().length>72?'…':''}</b><small>${esc(a.note||a.lessonTitle||'Highlight')}</small></span></button>`).join('')}</div>${anns.length>5?`<a href="#notes" class="chapter-more">+ ${anns.length-5} more annotations</a>`:''}`:`<p class="chapter-notes-empty">Select any sentence or phrase in the lesson to highlight it or attach a comment.</p>`}<div class="annotation-legend">${Object.entries(COLOR_META).map(([k,m])=>`<span><i class="ann-choice-dot ann-bg-${k}"></i>${esc(m.label)}</span>`).join('')}</div></div>`;
    host.querySelectorAll('[data-panel-ann]').forEach(b=>b.onclick=()=>{
      const id=b.dataset.panelAnn; const mark=document.querySelector(`mark[data-ann-id="${CSS.escape(id)}"]`);
      if(mark){mark.scrollIntoView({behavior:'smooth',block:'center'});pulse(mark);}else openEditorModal(id);
    });
  }

  function pulse(mark){
    document.querySelectorAll(`mark[data-ann-id="${CSS.escape(mark.dataset.annId)}"]`).forEach(m=>{m.classList.add('ann-pulse');setTimeout(()=>m.classList.remove('ann-pulse'),1600);});
  }

  function attachChapter(config){
    ensureUI(); currentChapter=config;
    document.querySelectorAll('.lesson.deep-lesson').forEach((el,i)=>el.dataset.lessonIndex=String(i));
    applyChapter(); renderChapterPanel();
    const target=new URLSearchParams((location.hash.split('?')[1]||'')).get('ann');
    if(target){requestAnimationFrame(()=>{const mark=document.querySelector(`mark[data-ann-id="${CSS.escape(target)}"]`);if(mark){mark.scrollIntoView({behavior:'smooth',block:'center'});pulse(mark);}});}
  }

  function formatDate(ts){
    if(!ts)return ''; try{return new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric'}).format(new Date(ts));}catch{return '';}
  }
  function notesStats(anns){
    const notes=anns.filter(a=>a.note).length;
    return `<div class="notes-stats"><div><strong>${anns.length}</strong><span>highlights</span></div><div><strong>${notes}</strong><span>with comments</span></div><div><strong>${getPersonalFlashcards().length}</strong><span>personal flashcards</span></div></div>`;
  }

  function renderNotes(host,D){
    if(!host) return;
    const anns=allAnnotations().sort((a,b)=>(b.updatedAt||b.createdAt||0)-(a.updatedAt||a.createdAt||0));
    host.innerHTML=`<div class="page notes-page">
      <div class="page-head"><div><div class="eyebrow">PERSONAL STUDY LAYER</div><h1>My Notes & Highlights</h1><p>Everything you highlight or comment on in Learn is saved locally in this browser. Search it, jump back to the original theory, or export a backup before moving devices.</p></div><a class="btn primary" href="#learn/${anns[0]?.chapterId||'ch1'}">Highlight theory</a></div>
      ${notesStats(anns)}
      <div class="notes-toolbar"><input id="notesSearch" class="control" placeholder="Search selected text, comments, lesson, or chapter…"><select id="notesChapter" class="control"><option value="all">All chapters</option>${(D?.chapters||[]).map(c=>`<option value="${c.id}">Ch ${esc(c.number)} · ${esc(c.title)}</option>`).join('')}</select><select id="notesColor" class="control"><option value="all">All highlight types</option>${Object.entries(COLOR_META).map(([k,m])=>`<option value="${k}">${esc(m.label)}</option>`).join('')}</select><button class="btn small" id="exportNotes">Export backup</button><button class="btn small" id="importNotes">Import backup</button><input type="file" id="importNotesFile" accept="application/json,.json" hidden></div>
      <div class="annotation-legend notes-legend">${Object.entries(COLOR_META).map(([k,m])=>`<span><i class="ann-choice-dot ann-bg-${k}"></i>${esc(m.label)}</span>`).join('')}</div>
      <div id="notesList" class="notes-list"></div>
    </div>`;
    const draw=()=>{
      const term=(document.getElementById('notesSearch')?.value||'').toLowerCase().trim();
      const ch=document.getElementById('notesChapter')?.value||'all';
      const color=document.getElementById('notesColor')?.value||'all';
      const list=allAnnotations().filter(a=>(ch==='all'||a.chapterId===ch)&&(color==='all'||a.color===color)&&(!term||`${a.exact} ${a.note} ${a.lessonTitle} ${a.chapterTitle} ${a.mapPath}`.toLowerCase().includes(term))).sort((a,b)=>(b.updatedAt||b.createdAt||0)-(a.updatedAt||a.createdAt||0));
      document.getElementById('notesList').innerHTML=list.length?list.map(a=>`<article class="note-card" data-note-id="${esc(a.id)}"><div class="note-card-bar ann-solid-${a.color||'yellow'}"></div><div class="note-card-main"><div class="note-card-meta"><span class="badge">Chapter ${esc(a.chapterNumber)}</span><span>${esc(a.lessonTitle||'Theory')}</span><span>${esc(formatDate(a.updatedAt||a.createdAt))}</span></div><blockquote>${esc((a.exact||'').trim())}</blockquote>${a.note?`<div class="note-comment"><b>My comment</b><p>${esc(a.note)}</p></div>`:'<div class="note-comment muted">No comment attached — highlight only.</div>'}${a.mapPath?`<div class="note-path">Mind-map path: ${esc(a.mapPath)}</div>`:''}<div class="note-card-actions"><a class="btn small primary" href="#learn/${a.chapterId}?ann=${encodeURIComponent(a.id)}">Open in theory</a><button class="btn small" data-edit-ann="${esc(a.id)}">Edit</button><button class="btn small" data-flash-ann="${esc(a.id)}">Make flashcard</button><button class="btn small danger" data-delete-ann="${esc(a.id)}">Delete</button></div></div></article>`).join(''):`<div class="empty notes-empty"><strong>No matching annotations.</strong><br>Select text inside any Learn lesson and use the floating annotation toolbar.</div>`;
      document.querySelectorAll('[data-edit-ann]').forEach(b=>b.onclick=()=>openEditorModal(b.dataset.editAnn));
      document.querySelectorAll('[data-delete-ann]').forEach(b=>b.onclick=()=>{if(confirm('Delete this highlight and note?'))deleteAnnotation(b.dataset.deleteAnn);});
      document.querySelectorAll('[data-flash-ann]').forEach(b=>b.onclick=()=>makeFlashFromAnnotation(b.dataset.flashAnn));
    };
    ['notesSearch','notesChapter','notesColor'].forEach(id=>document.getElementById(id)?.addEventListener(id==='notesSearch'?'input':'change',draw));
    document.getElementById('exportNotes').onclick=exportBackup;
    document.getElementById('importNotes').onclick=()=>document.getElementById('importNotesFile').click();
    document.getElementById('importNotesFile').onchange=e=>importBackup(e.target.files?.[0],()=>renderNotes(host,D));
    draw();
  }

  function makeFlashFromAnnotation(id){
    const ann=allAnnotations().find(a=>a.id===id); if(!ann)return;
    openModal(`<div class="ann-modal-kicker">PERSONAL FLASHCARD</div><h2 id="annModalTitle">Create from annotation</h2><label class="ann-field"><span>Front</span><textarea id="flashFront" rows="3">${esc(ann.exact.trim())}</textarea></label><label class="ann-field"><span>Back / explanation</span><textarea id="flashBack" rows="5">${esc(ann.note||'')}</textarea></label><div class="ann-modal-actions"><button class="btn" data-ann-close>Cancel</button><button class="btn primary" id="savePersonalFlash">Save flashcard</button></div>`,()=>document.getElementById('flashBack')?.focus());
    document.getElementById('savePersonalFlash').onclick=()=>{
      const front=document.getElementById('flashFront').value.trim(), back=document.getElementById('flashBack').value.trim(); if(!front||!back)return;
      const data=load();data.flashcards.push({id:uid('flash'),front,back,chapterId:ann.chapterId,chapterNumber:ann.chapterNumber,chapterTitle:ann.chapterTitle,lessonTitle:ann.lessonTitle,createdAt:Date.now()});save(data);closeModal();notify('Personal flashcard saved.');
    };
  }

  function exportBackup(){
    const payload=JSON.stringify(load(),null,2);
    const blob=new Blob([payload],{type:'application/json'});
    const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`accounting-mastery-notes-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);notify('Annotation backup exported.');
  }
  function importBackup(file,onDone){
    if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const incoming=normalizeStore(JSON.parse(reader.result));const cur=load();const byId=new Map(cur.annotations.map(a=>[a.id,a]));incoming.annotations.forEach(a=>byId.set(a.id,a));const flashById=new Map(cur.flashcards.map(a=>[a.id,a]));incoming.flashcards.forEach(a=>flashById.set(a.id,a));save({version:1,annotations:[...byId.values()],flashcards:[...flashById.values()]});notify(`Imported ${incoming.annotations.length} annotations.`);if(onDone)onDone();}catch{alert('This file is not a valid Accounting Mastery annotation backup.');}};reader.readAsText(file);
  }

  function bindGlobal(){
    if(bound)return;bound=true;ensureUI();
    document.addEventListener('mouseup', e=>{if(e.target.closest('.annotation-toolbar,.annotation-modal-shell'))return;setTimeout(captureSelection,0);});
    document.addEventListener('keyup', e=>{if(e.key==='Shift'||e.key.startsWith('Arrow'))setTimeout(captureSelection,0);if(e.key==='Escape'){hideToolbar();closeModal();}});
    document.addEventListener('mousedown', e=>{if(!e.target.closest('.annotation-toolbar')&&!e.target.closest('.annotation-modal-shell')&&!e.target.closest('mark.am-annotation'))hideToolbar();});
    document.addEventListener('click', e=>{const mark=e.target.closest('mark.am-annotation');if(mark){e.preventDefault();openEditorModal(mark.dataset.annId);}});
    window.addEventListener('scroll',hideToolbar,{passive:true});
    window.addEventListener('resize',hideToolbar,{passive:true});
  }

  bindGlobal();
  window.AccountingAnnotations={attachChapter,renderNotes,getPersonalFlashcards,openEditorModal,exportBackup,allAnnotations};
})();
