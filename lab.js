(() => {
  const esc=(s='')=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const num=v=>{const n=Number(String(v??'').replace(/,/g,''));return Number.isFinite(n)?n:0};
  const fmt=n=>Math.abs(n)<0.000001?'0':new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(n);
  const key=id=>`accountingMasteryLab:${id}`;
  const toast=msg=>{const e=document.getElementById('toast');if(!e)return;e.textContent=msg;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)};
  const getActive=()=>{const q=new URLSearchParams((location.hash.split('?')[1]||''));return q.get('template')||localStorage.getItem('accountingLabActive')||'equation'};
  const f=(k,type='number',ph='')=>`<input class="lab-field lab-input" data-k="${k}" type="${type}" ${type==='number'?'step="any"':''} placeholder="${esc(ph)}">`;
  const t=(k,ph='')=>f(k,'text',ph);
  const ro=(k)=>`<span class="lab-readonly" data-out="${k}">0</span>`;
  const nrows=(count,fn)=>Array.from({length:count},(_,i)=>fn(i)).join('');
  const table=(head,body,cls='')=>`<div class="lab-table-wrap"><table class="lab-table ${cls}"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;

  function controls(id){
    return `<div class="lab-controls"><button class="btn small primary" data-lab-save>Save</button><button class="btn small" data-lab-export>Export CSV</button><button class="btn small ghost" data-lab-reset>Reset template</button><span class="lab-save-state" data-lab-state>Autosaves in this browser</span></div>`;
  }
  function templateShell(meta,inner){
    return `<section class="lab-workbench"><div class="lab-workbench-head"><div><span class="badge yellow">${esc(meta.vi)}</span><h2>${esc(meta.title)}</h2><p>${esc(meta.desc)}</p><div class="source-note-inline">Based on: ${esc(meta.source)}</div></div><img src="${esc(meta.art)}" alt="" class="lab-art"></div>${controls(meta.id)}${inner}</section>`;
  }
  function equation(meta){
    const heads=['Transaction','Cash','A/R','Supplies','Prepaid','Equipment','=','A/P','Notes P.','Unearned Rev.','Share Capital','Retained E.','Revenue','− Expense','− Dividend','Check'];
    const body=nrows(16,i=>`<tr><td>${t(`r${i}-tx`,i===0?'Describe transaction…':'')}</td><td>${f(`r${i}-cash`)}</td><td>${f(`r${i}-ar`)}</td><td>${f(`r${i}-sup`)}</td><td>${f(`r${i}-pre`)}</td><td>${f(`r${i}-eqp`)}</td><td class="eq-symbol">=</td><td>${f(`r${i}-ap`)}</td><td>${f(`r${i}-np`)}</td><td>${f(`r${i}-ur`)}</td><td>${f(`r${i}-sc`)}</td><td>${f(`r${i}-re`)}</td><td>${f(`r${i}-rev`)}</td><td>${f(`r${i}-exp`)}</td><td>${f(`r${i}-div`)}</td><td><span class="row-check" data-eq-check="${i}">—</span></td></tr>`)+`<tr class="lab-total-row"><td>Cumulative effects</td>${['cash','ar','sup','pre','eqp'].map(x=>`<td>${ro('tot-'+x)}</td>`).join('')}<td>=</td>${['ap','np','ur','sc','re','rev','exp','div'].map(x=>`<td>${ro('tot-'+x)}</td>`).join('')}<td><span class="row-check" data-out="eq-overall">—</span></td></tr>`;
    return templateShell(meta,`<div class="lab-tip"><strong>How to enter amounts</strong>Use +/− signs for asset and liability/equity account changes. Enter Expense and Dividend as positive amounts because those columns are subtracted in the expanded equation.</div>${table(heads,body,'equation-table')}<div class="lab-summary"><div><span>Asset-side change</span><strong data-out="asset-total">0</strong></div><div><span>Liabilities + Equity change</span><strong data-out="rhs-total">0</strong></div><div><span>Difference</span><strong data-out="eq-diff">0</strong></div></div>`);
  }
  function journal(meta){
    const heads=['Date','Account titles & explanation','Ref.','Debit','Credit'];
    const body=nrows(24,i=>`<tr><td>${t(`r${i}-date`)}</td><td>${t(`r${i}-acct`,i===0?'Account title / explanation':'')}</td><td>${t(`r${i}-ref`)}</td><td>${f(`r${i}-dr`)}</td><td>${f(`r${i}-cr`)}</td></tr>`)+`<tr class="lab-total-row"><td colspan="3">Totals</td><td>${ro('journal-dr')}</td><td>${ro('journal-cr')}</td></tr>`;
    return templateShell(meta,`${table(heads,body)}<div class="lab-balance-banner" data-out="journal-check">Enter entries to check Dr = Cr</div>`);
  }
  function ledger(meta){
    const heads=['Date','Explanation / Ref.','Debit','Credit'];
    const body=nrows(20,i=>`<tr><td>${t(`r${i}-date`)}</td><td>${t(`r${i}-desc`)}</td><td>${f(`r${i}-dr`)}</td><td>${f(`r${i}-cr`)}</td></tr>`)+`<tr class="lab-total-row"><td colspan="2">Totals</td><td>${ro('ledger-dr')}</td><td>${ro('ledger-cr')}</td></tr>`;
    return templateShell(meta,`<div class="lab-inline-fields"><label>Account name ${t('account-name','e.g., Cash')}</label><label>Normal balance <select class="lab-field lab-input" data-k="normal"><option value="">Choose…</option><option>Debit</option><option>Credit</option></select></label></div>${table(heads,body)}<div class="lab-summary"><div><span>Ending balance</span><strong data-out="ledger-balance">0</strong></div><div><span>Balance side</span><strong data-out="ledger-side">—</strong></div></div>`);
  }
  function trial(meta){
    const heads=['Account','Debit','Credit'];
    const body=nrows(24,i=>`<tr><td>${t(`r${i}-acct`)}</td><td>${f(`r${i}-dr`)}</td><td>${f(`r${i}-cr`)}</td></tr>`)+`<tr class="lab-total-row"><td>Totals</td><td>${ro('trial-dr')}</td><td>${ro('trial-cr')}</td></tr>`;
    return templateShell(meta,`${table(heads,body)}<div class="lab-balance-banner" data-out="trial-check">Enter balances to check the trial balance</div>`);
  }
  function adjusting(meta){
    const heads=['Type / scenario','Date','Debit account','Debit','Credit account','Credit','Reason / calculation'];
    const body=nrows(16,i=>`<tr><td><select class="lab-field lab-input" data-k="r${i}-type"><option value=""></option><option>Prepaid expense</option><option>Unearned revenue</option><option>Accrued revenue</option><option>Accrued expense</option><option>Depreciation</option><option>Other</option></select></td><td>${t(`r${i}-date`)}</td><td>${t(`r${i}-da`)}</td><td>${f(`r${i}-dr`)}</td><td>${t(`r${i}-ca`)}</td><td>${f(`r${i}-cr`)}</td><td>${t(`r${i}-note`)}</td></tr>`)+`<tr class="lab-total-row"><td colspan="3">Totals</td><td>${ro('adjust-dr')}</td><td></td><td>${ro('adjust-cr')}</td><td></td></tr>`;
    return templateShell(meta,`<div class="adjusting-cheats"><span><b>Prepaid expense:</b> Expense ↑, Asset ↓</span><span><b>Unearned revenue:</b> Liability ↓, Revenue ↑</span><span><b>Accrued expense:</b> Expense ↑, Liability ↑</span><span><b>Accrued revenue:</b> Asset ↑, Revenue ↑</span></div>${table(heads,body)}<div class="lab-balance-banner" data-out="adjust-check">Adjusting entries should balance</div>`);
  }
  function cycle(meta){
    const heads=['Account','Class','Unadj. Dr','Unadj. Cr','Adj. Dr','Adj. Cr','Adjusted Dr','Adjusted Cr','Income St. Dr','Income St. Cr','SFP Dr','SFP Cr'];
    const body=nrows(24,i=>`<tr><td>${t(`r${i}-acct`)}</td><td><select class="lab-field lab-input" data-k="r${i}-class"><option value=""></option><option value="IS">Income statement</option><option value="SFP">SFP</option></select></td><td>${f(`r${i}-udr`)}</td><td>${f(`r${i}-ucr`)}</td><td>${f(`r${i}-adr`)}</td><td>${f(`r${i}-acr`)}</td><td>${ro(`r${i}-xdr`)}</td><td>${ro(`r${i}-xcr`)}</td><td>${ro(`r${i}-idr`)}</td><td>${ro(`r${i}-icr`)}</td><td>${ro(`r${i}-sdr`)}</td><td>${ro(`r${i}-scr`)}</td></tr>`)+`<tr class="lab-total-row"><td colspan="2">Totals</td>${['udr','ucr','adr','acr','xdr','xcr','idr','icr','sdr','scr'].map(x=>`<td>${ro('cycle-'+x)}</td>`).join('')}</tr>`;
    return templateShell(meta,`<div class="lab-tip"><strong>Worksheet logic</strong>Enter the unadjusted balance and the adjustment columns. The adjusted balance is calculated automatically, then routed to the Income Statement or Statement of Financial Position based on the Class selector.</div>${table(heads,body,'cycle-table')}`);
  }
  function correcting(meta){
    const heads=['Error','Step','Debit account','Debit','Credit account','Credit'];
    const steps=['1. Incorrect','2. Reverse','3. Correct','4. Correcting'];
    let body=''; for(let e=0;e<5;e++) for(let s=0;s<4;s++){const i=e*4+s;body+=`<tr><td>${s===0?`Error ${e+1}`:''}</td><td>${steps[s]}</td><td>${t(`r${i}-da`)}</td><td>${f(`r${i}-dr`)}</td><td>${t(`r${i}-ca`)}</td><td>${f(`r${i}-cr`)}</td></tr>`}
    return templateShell(meta,`<div class="lab-tip"><strong>Source workflow</strong>Write the incorrect entry, reverse it when useful, write the correct entry, then combine the needed effects into the final correcting entry.</div>${table(heads,body)}`);
  }
  function merch(meta){
    const heads=['Date','Scenario','Buyer Dr acct','Buyer Dr','Buyer Cr acct','Buyer Cr','Seller Dr acct','Seller Dr','Seller Cr acct','Seller Cr','COGS Dr','Inventory Cr'];
    const body=nrows(20,i=>`<tr><td>${t(`r${i}-date`)}</td><td>${t(`r${i}-scenario`)}</td><td>${t(`r${i}-bda`)}</td><td>${f(`r${i}-bdr`)}</td><td>${t(`r${i}-bca`)}</td><td>${f(`r${i}-bcr`)}</td><td>${t(`r${i}-sda`)}</td><td>${f(`r${i}-sdr`)}</td><td>${t(`r${i}-sca`)}</td><td>${f(`r${i}-scr`)}</td><td>${f(`r${i}-cogs`)}</td><td>${f(`r${i}-invcr`)}</td></tr>`);
    return templateShell(meta,`<div class="adjusting-cheats"><span><b>Buyer freight:</b> freight-in may increase Inventory when buyer bears it.</span><span><b>Seller freight:</b> freight-out / delivery expense.</span><span><b>Sale:</b> seller normally records both revenue and COGS under perpetual inventory.</span></div>${table(heads,body,'wide-lab')}`);
  }
  function fifo(meta){
    const heads=['Date','Description','Units purchased','Unit cost','Units sold','Selling price','Purchase cost','Sales revenue','FIFO COGS','Layer / working note'];
    const body=nrows(22,i=>`<tr><td>${t(`r${i}-date`)}</td><td>${t(`r${i}-desc`)}</td><td>${f(`r${i}-pin`)}</td><td>${f(`r${i}-uc`)}</td><td>${f(`r${i}-sold`)}</td><td>${f(`r${i}-sp`)}</td><td>${ro(`r${i}-pcost`)}</td><td>${ro(`r${i}-sales`)}</td><td>${f(`r${i}-cogs`)}</td><td>${t(`r${i}-layer`)}</td></tr>`)+`<tr class="lab-total-row"><td colspan="2">Totals</td><td>${ro('fifo-punits')}</td><td></td><td>${ro('fifo-sunits')}</td><td></td><td>${ro('fifo-pcost')}</td><td>${ro('fifo-sales')}</td><td>${ro('fifo-cogs')}</td><td></td></tr>`;
    return templateShell(meta,`<div class="lab-inline-fields"><label>Beginning inventory units ${f('begin-units')}</label><label>Beginning inventory value ${f('begin-value')}</label></div><div class="lab-tip"><strong>FIFO learning mode</strong>The table calculates purchase cost and sales revenue. Enter FIFO COGS after you work through the oldest cost layers in the Layer / working note column; ending inventory then reconciles automatically.</div>${table(heads,body)}<div class="lab-summary"><div><span>Ending units</span><strong data-out="fifo-end-units">0</strong></div><div><span>Ending inventory</span><strong data-out="fifo-ending">0</strong></div><div><span>Gross profit</span><strong data-out="fifo-gp">0</strong></div></div>`);
  }
  function cashflow(meta){
    const op=[['Net income','Start with accrual-basis net income'],['Depreciation / amortization','Add non-cash expense'],['Loss on disposal','Add'],['Gain on disposal','Enter as negative / subtract'],['Change in Accounts Receivable','Increase → negative; decrease → positive'],['Change in Inventory','Increase → negative; decrease → positive'],['Change in Prepaid Expenses','Increase → negative; decrease → positive'],['Change in Accounts Payable','Increase → positive; decrease → negative'],['Change in Accrued Expenses Payable','Increase → positive; decrease → negative'],['Other operating adjustment','Use signed amount']];
    const opBody=op.map((x,i)=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${f(`op${i}`)}</td></tr>`).join('')+`<tr class="lab-total-row"><td colspan="2">Net cash provided by operating activities</td><td>${ro('cf-op')}</td></tr>`;
    const flowRows=(prefix,count)=>nrows(count,i=>`<tr><td>${t(`${prefix}${i}-desc`)}</td><td>${f(`${prefix}${i}-amt`)}</td></tr>`)+`<tr class="lab-total-row"><td>Net cash from section</td><td>${ro(`cf-${prefix}`)}</td></tr>`;
    return templateShell(meta,`<div class="cashflow-grid"><div><h3>1. Operating activities — indirect method</h3>${table(['Adjustment','Rule / hint','Signed amount'],opBody)}</div><div><h3>2. Investing activities</h3>${table(['Cash flow description','Signed amount (+ inflow / − outflow)'],flowRows('inv',8))}<h3>3. Financing activities</h3>${table(['Cash flow description','Signed amount (+ inflow / − outflow)'],flowRows('fin',8))}</div></div><div class="lab-inline-fields"><label>Opening cash ${f('opening-cash')}</label><label>Actual ending cash (optional check) ${f('actual-ending')}</label></div><div class="lab-summary"><div><span>Net change in cash</span><strong data-out="cf-change">0</strong></div><div><span>Calculated ending cash</span><strong data-out="cf-ending">0</strong></div><div><span>Reconciliation</span><strong data-out="cf-check">—</strong></div></div>`);
  }
  const builders={equation,journal,ledger,trial,adjusting,cycle,correcting,merch,fifo,cashflow};

  function saveFields(id){
    const data={};document.querySelectorAll('.lab-field').forEach(el=>data[el.dataset.k]=el.value);localStorage.setItem(key(id),JSON.stringify(data));const st=document.querySelector('[data-lab-state]');if(st)st.textContent='Saved just now';
  }
  function restoreFields(id){
    try{const data=JSON.parse(localStorage.getItem(key(id))||'{}');document.querySelectorAll('.lab-field').forEach(el=>{if(Object.prototype.hasOwnProperty.call(data,el.dataset.k))el.value=data[el.dataset.k]})}catch{}
  }
  function out(k,v){const e=document.querySelector(`[data-out="${k}"]`);if(e)e.textContent=v}
  function values(pattern,count){return Array.from({length:count},(_,i)=>num(document.querySelector(`[data-k="r${i}-${pattern}"]`)?.value))}
  function sum(a){return a.reduce((x,y)=>x+y,0)}
  function setCheck(el,ok,text){if(!el)return;el.textContent=text;el.classList.toggle('ok',ok);el.classList.toggle('bad',!ok)}

  function recalc(id){
    if(id==='equation'){
      const fields=['cash','ar','sup','pre','eqp','ap','np','ur','sc','re','rev','exp','div'];
      const totals={};fields.forEach(x=>totals[x]=sum(values(x,16)));
      fields.forEach(x=>out('tot-'+x,fmt(totals[x])));
      for(let i=0;i<16;i++){
        const a=['cash','ar','sup','pre','eqp'].reduce((s,x)=>s+num(document.querySelector(`[data-k="r${i}-${x}"]`)?.value),0);
        const r=['ap','np','ur','sc','re','rev'].reduce((s,x)=>s+num(document.querySelector(`[data-k="r${i}-${x}"]`)?.value),0)-num(document.querySelector(`[data-k="r${i}-exp"]`)?.value)-num(document.querySelector(`[data-k="r${i}-div"]`)?.value);
        const el=document.querySelector(`[data-eq-check="${i}"]`);const empty=Math.abs(a)<1e-9&&Math.abs(r)<1e-9; if(empty){el.textContent='—';el.className='row-check'} else setCheck(el,Math.abs(a-r)<.005,Math.abs(a-r)<.005?'Balanced':`Δ ${fmt(a-r)}`);
      }
      const at=totals.cash+totals.ar+totals.sup+totals.pre+totals.eqp;
      const rt=totals.ap+totals.np+totals.ur+totals.sc+totals.re+totals.rev-totals.exp-totals.div;
      out('asset-total',fmt(at));out('rhs-total',fmt(rt));out('eq-diff',fmt(at-rt));setCheck(document.querySelector('[data-out="eq-overall"]'),Math.abs(at-rt)<.005,Math.abs(at-rt)<.005?'Balanced':'Check');
    }
    if(id==='journal'){
      const dr=sum(values('dr',24)),cr=sum(values('cr',24));out('journal-dr',fmt(dr));out('journal-cr',fmt(cr));const e=document.querySelector('[data-out="journal-check"]');setCheck(e,Math.abs(dr-cr)<.005&&dr>0,dr===0&&cr===0?'Enter entries to check Dr = Cr':Math.abs(dr-cr)<.005?'Balanced — Dr = Cr':`Out of balance by ${fmt(dr-cr)}`);
    }
    if(id==='ledger'){
      const dr=sum(values('dr',20)),cr=sum(values('cr',20)),bal=dr-cr;out('ledger-dr',fmt(dr));out('ledger-cr',fmt(cr));out('ledger-balance',fmt(Math.abs(bal)));out('ledger-side',Math.abs(bal)<.005?'Zero':bal>0?'Debit':'Credit');
    }
    if(id==='trial'){
      const dr=sum(values('dr',24)),cr=sum(values('cr',24));out('trial-dr',fmt(dr));out('trial-cr',fmt(cr));const e=document.querySelector('[data-out="trial-check"]');setCheck(e,Math.abs(dr-cr)<.005&&dr>0,dr===0&&cr===0?'Enter balances to check the trial balance':Math.abs(dr-cr)<.005?'Trial balance agrees':`Difference: ${fmt(dr-cr)}`);
    }
    if(id==='adjusting'){
      const dr=sum(values('dr',16)),cr=sum(values('cr',16));out('adjust-dr',fmt(dr));out('adjust-cr',fmt(cr));const e=document.querySelector('[data-out="adjust-check"]');setCheck(e,Math.abs(dr-cr)<.005&&dr>0,dr===0&&cr===0?'Adjusting entries should balance':Math.abs(dr-cr)<.005?'Adjustments balance':'Check debit/credit totals');
    }
    if(id==='cycle'){
      const totals={udr:0,ucr:0,adr:0,acr:0,xdr:0,xcr:0,idr:0,icr:0,sdr:0,scr:0};
      for(let i=0;i<24;i++){
        const udr=num(document.querySelector(`[data-k="r${i}-udr"]`)?.value),ucr=num(document.querySelector(`[data-k="r${i}-ucr"]`)?.value),adr=num(document.querySelector(`[data-k="r${i}-adr"]`)?.value),acr=num(document.querySelector(`[data-k="r${i}-acr"]`)?.value),cls=document.querySelector(`[data-k="r${i}-class"]`)?.value||'';
        const signed=udr-ucr+adr-acr,xdr=signed>0?signed:0,xcr=signed<0?-signed:0;out(`r${i}-xdr`,fmt(xdr));out(`r${i}-xcr`,fmt(xcr));const idr=cls==='IS'?xdr:0,icr=cls==='IS'?xcr:0,sdr=cls==='SFP'?xdr:0,scr=cls==='SFP'?xcr:0;out(`r${i}-idr`,fmt(idr));out(`r${i}-icr`,fmt(icr));out(`r${i}-sdr`,fmt(sdr));out(`r${i}-scr`,fmt(scr));Object.assign(totals,{udr:totals.udr+udr,ucr:totals.ucr+ucr,adr:totals.adr+adr,acr:totals.acr+acr,xdr:totals.xdr+xdr,xcr:totals.xcr+xcr,idr:totals.idr+idr,icr:totals.icr+icr,sdr:totals.sdr+sdr,scr:totals.scr+scr});
      }
      Object.keys(totals).forEach(k=>out('cycle-'+k,fmt(totals[k])));
    }
    if(id==='fifo'){
      let pu=0,su=0,pc=0,sales=0,cogs=0;for(let i=0;i<22;i++){const pin=num(document.querySelector(`[data-k="r${i}-pin"]`)?.value),uc=num(document.querySelector(`[data-k="r${i}-uc"]`)?.value),sold=num(document.querySelector(`[data-k="r${i}-sold"]`)?.value),sp=num(document.querySelector(`[data-k="r${i}-sp"]`)?.value),cg=num(document.querySelector(`[data-k="r${i}-cogs"]`)?.value);const p=pin*uc,s=sold*sp;out(`r${i}-pcost`,fmt(p));out(`r${i}-sales`,fmt(s));pu+=pin;su+=sold;pc+=p;sales+=s;cogs+=cg}out('fifo-punits',fmt(pu));out('fifo-sunits',fmt(su));out('fifo-pcost',fmt(pc));out('fifo-sales',fmt(sales));out('fifo-cogs',fmt(cogs));const bu=num(document.querySelector('[data-k="begin-units"]')?.value),bv=num(document.querySelector('[data-k="begin-value"]')?.value);out('fifo-end-units',fmt(bu+pu-su));out('fifo-ending',fmt(bv+pc-cogs));out('fifo-gp',fmt(sales-cogs));
    }
    if(id==='cashflow'){
      const op=sum(Array.from({length:10},(_,i)=>num(document.querySelector(`[data-k="op${i}"]`)?.value)));const inv=sum(Array.from({length:8},(_,i)=>num(document.querySelector(`[data-k="inv${i}-amt"]`)?.value)));const fin=sum(Array.from({length:8},(_,i)=>num(document.querySelector(`[data-k="fin${i}-amt"]`)?.value)));out('cf-op',fmt(op));out('cf-inv',fmt(inv));out('cf-fin',fmt(fin));const ch=op+inv+fin,open=num(document.querySelector('[data-k="opening-cash"]')?.value),end=open+ch,actual=num(document.querySelector('[data-k="actual-ending"]')?.value);out('cf-change',fmt(ch));out('cf-ending',fmt(end));out('cf-check',actual?Math.abs(end-actual)<.005?'Reconciles':`Difference ${fmt(end-actual)}`:'Enter actual ending cash');
    }
  }
  function exportCsv(id){
    const tb=document.querySelector('.lab-table');if(!tb)return;const rows=[...tb.querySelectorAll('tr')].map(tr=>[...tr.children].map(td=>{const input=td.querySelector('input,select');const val=input?input.value:td.innerText.trim();return `"${String(val).replace(/"/g,'""')}"`}).join(','));const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`accounting-mastery-${id}-template.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }
  function bind(id){
    restoreFields(id);recalc(id);
    document.querySelectorAll('.lab-field').forEach(el=>el.addEventListener('input',()=>{saveFields(id);recalc(id)}));
    document.querySelector('[data-lab-save]')?.addEventListener('click',()=>{saveFields(id);toast('Template saved')});
    document.querySelector('[data-lab-reset]')?.addEventListener('click',()=>{if(confirm('Reset this template and clear saved entries?')){localStorage.removeItem(key(id));render()}});
    document.querySelector('[data-lab-export]')?.addEventListener('click',()=>exportCsv(id));
    document.querySelectorAll('[data-open-template]').forEach(b=>b.addEventListener('click',()=>{location.hash=`#lab?template=${encodeURIComponent(b.dataset.openTemplate)}`}));
  }
  function render(){
    const D=window.ACCOUNTING_DATA,main=document.getElementById('main');let id=getActive();const meta=D.labTemplates.find(x=>x.id===id)||D.labTemplates[0];id=meta.id;localStorage.setItem('accountingLabActive',id);
    const cards=D.labTemplates.map(x=>`<button class="lab-template-card ${x.id===id?'active':''}" data-open-template="${x.id}"><img src="${esc(x.art)}" alt=""><span><strong>${esc(x.title)}</strong><small>${esc(x.vi)}</small></span></button>`).join('');
    const packs=D.sourcePracticePacks.map(p=>`<div class="source-pack"><div><span class="badge">${esc(p.chapter)}</span><h3>${esc(p.title)}</h3><p>${esc(p.note)}</p><small>${esc(p.source)}</small></div><button class="btn small" data-open-template="${esc(p.template)}">Open matching template</button></div>`).join('');
    main.innerHTML=`<div class="page"><div class="lab-hero"><div><div class="eyebrow">Accounting Lab · updated source pack</div><h1>Work the exercise, not just read the answer.</h1><p>Reusable yellow-and-black templates based on the structures in your updated class workbook: accounting equation, journals, ledger, trial balance, adjustments, accounting cycle, merchandising, FIFO, and cash flows.</p><div class="hero-actions"><button class="btn primary" data-open-template="equation">Open A = L + E</button><a class="btn dark" href="#practice">Practice MCQs</a></div></div><img src="${window.AM_VISUALS.hero}" alt="Yellow and black accounting ledger illustration"></div><div class="section-title"><div><h2>Template Library</h2><p>Your entries autosave locally. Reset a template whenever you start a new exercise.</p></div></div><div class="lab-template-grid">${cards}</div>${builders[id](meta)}<div class="section-title"><div><h2>Updated source practice packs</h2><p>Use these as a map from the teacher/book exercise sheet to the best workspace.</p></div></div><div class="source-pack-grid">${packs}</div><div class="lab-note"><strong>Important:</strong> These are working templates, not answer generators. They calculate mechanical checks such as Dr = Cr, equation balance, adjusted balances, and cash reconciliation while leaving the accounting judgment to you.</div></div>`;
    bind(id);main.focus({preventScroll:true});window.scrollTo(0,0);
  }
  window.AccountingLab={render};
})();
