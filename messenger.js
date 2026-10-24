(()=>{const $=s=>document.querySelector(s),R=$('#v-messenger');if(!R)return;
const K='nn_ym',st=Object.assign({name:'',status:'Available',away:'',hist:{}},JSON.parse(localStorage.getItem(K)||'{}'));const save=()=>localStorage.setItem(K,JSON.stringify(st));
let AC;const ac=()=>AC||(AC=new (window.AudioContext||window.webkitAudioContext)());
function tone(f,t,d,type='sine',v=.15,f2){try{const a=ac(),o=a.createOscillator(),g=a.createGain();o.type=type;o.frequency.setValueAtTime(f,a.currentTime+t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,a.currentTime+t+d);g.gain.setValueAtTime(0,a.currentTime+t);g.gain.linearRampToValueAtTime(v,a.currentTime+t+.01);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t+d);o.connect(g).connect(a.destination);o.start(a.currentTime+t);o.stop(a.currentTime+t+d+.05)}catch(e){}}
function noise(t,d,v=.2,hp=800){try{const a=ac(),b=a.createBuffer(1,a.sampleRate*d,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<x.length;i++)x[i]=(Math.random()*2-1)*(1-i/x.length);const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();f.type='bandpass';f.frequency.value=hp;g.gain.value=v;s.buffer=b;s.connect(f).connect(g).connect(a.destination);s.start(a.currentTime+t)}catch(e){}}
const SND={open:()=>{noise(0,.35,.25,500);tone(220,0,.35,'triangle',.08,330);tone(660,.15,.25,'sine',.06)},close:()=>{tone(300,0,.12,'square',.05,120);noise(.08,.18,.4,300)},ding:()=>{tone(1318,0,.35,'sine',.18);tone(1760,.08,.4,'sine',.12)},knock:()=>{noise(0,.08,.6,250);noise(.15,.08,.6,250)},buzz:()=>tone(90,0,.6,'sawtooth',.12,70)};
window.nnYM={snd:SND,st};
// original emoticons: drawn faces
const F=(m,ex='',c='#ffd52e')=>`<svg class="ymo" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="${c}" stroke="#7a4a00" stroke-width="1.2"/>${ex}${m}</svg>`;
const E={':)':F('<path d="M6 12q4 4 8 0" stroke="#000" fill="none" stroke-width="1.4"/>','<circle cx="7" cy="8" r="1.2"/><circle cx="13" cy="8" r="1.2"/>'),
';)':F('<path d="M6 12q4 4 8 0" stroke="#000" fill="none" stroke-width="1.4"/>','<path d="M5.8 8h2.6" stroke="#000" stroke-width="1.4"/><circle cx="13" cy="8" r="1.2"/>'),
':D':F('<path d="M5.5 11h9q-1 5-4.5 5t-4.5-5z" fill="#fff" stroke="#000"/>','<circle cx="7" cy="7.5" r="1.2"/><circle cx="13" cy="7.5" r="1.2"/>'),
':(':F('<path d="M6 14q4-4 8 0" stroke="#000" fill="none" stroke-width="1.4"/>','<circle cx="7" cy="8" r="1.2"/><circle cx="13" cy="8" r="1.2"/>'),
':P':F('<path d="M6 12h8" stroke="#000" stroke-width="1.4"/><path d="M9 12h4v2.5q-2 2-4 0z" fill="#ff5a8a"/>','<circle cx="7" cy="8" r="1.2"/><circle cx="13" cy="8" r="1.2"/>'),
':O':F('<ellipse cx="10" cy="13" rx="2" ry="2.6" fill="#000"/>','<circle cx="7" cy="7.5" r="1.3"/><circle cx="13" cy="7.5" r="1.3"/>'),
'B)':F('<path d="M6 12.5q4 3.5 8 0" stroke="#000" fill="none" stroke-width="1.4"/>','<path d="M3.5 7h13v1.5l-1.5 2h-3l-1.5-2h-1l-1.5 2H5L3.5 8.5z" fill="#111"/>'),
':-*':F('<circle cx="11" cy="12.5" r="1.6" fill="#e8222a"/><path d="M14 11l2-1.5 1 1.6z" fill="#e8222a"/>','<path d="M5.8 8h2.6M11.6 8h2.6" stroke="#000" stroke-width="1.3"/>','#ffd52e'),
'<3':`<svg class="ymo" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 17S2 12 2 7a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5-8 10-8 10z" fill="#ff2b6a" stroke="#900" stroke-width="1.1"/></svg>`,
':">':F('<path d="M7 12.5q3 2.5 6 0" stroke="#000" fill="none" stroke-width="1.3"/>','<circle cx="7" cy="8" r="1.1"/><circle cx="13" cy="8" r="1.1"/><ellipse cx="5" cy="11" rx="1.8" ry="1" fill="#ff7b9c"/><ellipse cx="15" cy="11" rx="1.8" ry="1" fill="#ff7b9c"/>'),
'=))':F('<path d="M5 10.5h10q-1 5.5-5 5.5t-5-5.5z" fill="#fff" stroke="#000"/>','<path d="M5 7.5l2.5-1.5M15 7.5l-2.5-1.5" stroke="#000" stroke-width="1.3"/><path d="M3.5 10q-1 2 .5 3M16.5 10q1 2-.5 3" stroke="#3ab0ff" stroke-width="1.2" fill="none"/>')};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const emo=s=>{let h=esc(s);Object.keys(E).sort((a,b)=>b.length-a.length).forEach(k=>{h=h.split(esc(k)).join(E[k])});return h};
const BUD=[{n:'xXSk8rBoiXx',g:'Friends',st:'on',msg:'skating til the streetlights come on',r:['sup!!','lol nm, just got back from the skate park','dude did u see the new tony hawk game?? :D','brb my mom needs the phone line','k back','ur funny lol =))','gtg dinner, ttyl!! B)']},
{n:'glitterqueen99',g:'Friends',st:'on',msg:'♥ *~*gLiTtEr 4 lYfE*~* ♥',r:['hiii!! <3','omg i just got new gel pens, the sparkly ones!!','r u going 2 the mall saturday?','lol ;)','my away msg has song lyrics in it hehe :">','luv ya, bff! <3']},
{n:'sk8rgrl_2002',g:'Friends',st:'idle',msg:'listening 2 my discman',r:['heyy :)','sry was afk making a mix CD','lol totally','that is SO fetch :P','ok brb gotta feed my tamagotchi','back! did u miss me? ;)']},
{n:'Cousin_Jen',g:'Family',st:'on',msg:'at grandmas for the weekend',r:['hey cuz! :)','grandma says hi and made cookies :D','lol remember when we built that pillow fort','u coming to the family bbq?','love you! <3']},
{n:'MomComputer',g:'Family',st:'off',msg:'',r:['Hi sweetie :)','How do I make the smiley face?? :) oh there it is','Dinner at 6!','Love, Mom <3']},
{n:'PogKing1996',g:'Friends',st:'off',msg:'trade u my slammer',r:['yo!','wanna trade pogs?? i got a holographic one B)','lol','gotta go, my brother needs the computer']}];
const ASL=['lol 13/m/the moon :P','haha a/s/l?? 1999/pog/cyberspace =))','lol ur silly, u know who i am :D'];
let cur=null,ti={},buzzT;
function view(id){R.querySelectorAll('.ymv').forEach(v=>v.hidden=v.id!==id)}
function stIcon(s){return s==='on'?F('<path d="M6.5 11.5q3.5 3.5 7 0" stroke="#000" fill="none" stroke-width="1.4"/>','<circle cx="7.5" cy="8" r="1.1"/><circle cx="12.5" cy="8" r="1.1"/>'):s==='idle'?F('<path d="M7 12.5h6" stroke="#000" stroke-width="1.3"/><text x="13" y="6" font-size="6" font-weight="bold" fill="#3a5bd8">z</text>','<path d="M6 8.5h3M11 8.5h3" stroke="#000" stroke-width="1.2"/>','#ffe680'):F('<path d="M7 12.5h6" stroke="#555" stroke-width="1.3"/>','<circle cx="7.5" cy="8" r="1" fill="#555"/><circle cx="12.5" cy="8" r="1" fill="#555"/>','#c8c8c8')}
function list(){const L=$('#ymlist');L.innerHTML='';['Friends','Family'].forEach(g=>{const b=BUD.filter(x=>x.g===g),on=b.filter(x=>x.st!=='off').length;
 const h=document.createElement('div');h.className='ymg';h.textContent='▾ '+g+' ('+on+'/'+b.length+')';L.appendChild(h);
 b.forEach(x=>{const r=document.createElement('button');r.type='button';r.className='ymb '+x.st;r.innerHTML=stIcon(x.st)+'<span><b></b><i></i></span>';r.querySelector('b').textContent=x.n;r.querySelector('i').textContent=x.st==='off'?'':x.st==='idle'?'(Idle) '+x.msg:x.msg;r.onclick=()=>chat(x);L.appendChild(r)})})}
function add(who,text,me,style){const h=st.hist[who]=st.hist[who]||[];h.push({m:!!me,t:text,s:style||null,ts:Date.now()});if(h.length>200)h.shift();save();if(cur&&cur.n===who)draw()}
function draw(){const L=$('#ymlog'),h=st.hist[cur.n]||[];L.innerHTML=h.map(x=>x.sys?'':`<p class="${x.m?'me':'them'}"><b>${esc(x.m?st.name:cur.n)}:</b> <span style="${x.s?`font-family:${x.s.f};color:${x.s.c};font-weight:${x.s.b?'bold':'normal'}`:''}">${x.t==='BUZZ!!!'?'<em class="ybz">BUZZ!!!</em>':emo(x.t)}</span></p>`).join('');L.scrollTop=L.scrollHeight}
function chat(x){cur=x;$('#ymwho').textContent=x.n;$('#ymstat').innerHTML=stIcon(x.st)+' '+esc(x.st==='off'?'Offline — messages will be delivered later':x.msg||'Available');view('ymchat');draw();$('#ymin').focus({preventScroll:true})}
function reply(x,txt){if(x.st==='off')return;clearTimeout(ti[x.n]);const t=$('#ymtyping');const d=900+Math.random()*1600;
 setTimeout(()=>{if(cur===x)t.textContent=x.n+' is typing...'},400);
 ti[x.n]=setTimeout(()=>{t.textContent='';const lo=txt.toLowerCase();let m;
  if(/a\s*\/\s*s\s*\/\s*l|\basl\b/.test(lo))m=ASL[Math.random()*ASL.length|0];else if(/^(hi|hey|hello|sup|yo)\b/.test(lo)&&!x.hi)m=x.r[0];
  else if(/\bbrb\b/.test(lo))m='k :)';else if(/\b(gtg|bye|ttyl|g2g)\b/.test(lo))m='bye!! ttyl <3';else if(/\blol\b|haha/.test(lo))m=Math.random()<.5?'lol':'=))';
  else{x.k=((x.k||0)%(x.r.length-1))+1;m=x.r[x.k]}x.hi=1;add(x.n,m);SND.ding();
  if(cur!==x||R.hidden)toast(x.n+': '+m)},d)}
function toast(s){const t=$('#ymtoast');t.textContent=s;t.hidden=false;clearTimeout(t._t);t._t=setTimeout(()=>t.hidden=true,3500)}
function send(){const i=$('#ymin'),v=i.value.trim();if(!v||!cur)return;i.value='';add(cur.n,v,1,{f:$('#ymfont').value,c:$('#ymcol').value,b:$('#ymbold').classList.contains('on')});SND.knock();reply(cur,v)}
function shake(){const w=$('#ymwin');w.classList.remove('shake');void w.offsetWidth;w.classList.add('shake');SND.buzz();navigator.vibrate&&navigator.vibrate(300)}
function signin(){const n=$('#ymname').value.trim().replace(/\s+/g,'_').slice(0,24);if(!n)return;st.name=n;st.on=1;save();$('#ymme').textContent=n;setStat();view('ymmain');list();SND.open();
 BUD.forEach(x=>{if(x.st==='off'&&!x.later){x.later=1;setTimeout(()=>{if(!st.on)return;x.st='on';x.msg=x.msg||'just signed on!';list();SND.open();toast(x.n+' has signed in')},12000+Math.random()*25000)}})}
function setStat(){const s=$('#ymst');s.value=['Available','Busy','Invisible'].includes(st.status)?st.status:'custom';$('#ymaway').hidden=s.value!=='custom';$('#ymaway').value=st.away||'';$('#ymdot').className='ymdot '+(st.status==='Available'?'g':st.status==='Invisible'?'x':'b')}
$('#ymgo').onclick=signin;$('#ymname').onkeydown=e=>{if(e.key==='Enter')signin()};
$('#ymout').onclick=()=>{st.on=0;save();SND.close();view('ymsign')};
$('#ymst').onchange=e=>{const v=e.target.value;st.status=v==='custom'?(st.away||'Away'):v;if(v==='custom')$('#ymaway').hidden=false,$('#ymaway').focus();save();setStat()};
$('#ymaway').onchange=e=>{st.away=e.target.value.slice(0,60)||'Away';st.status=st.away;save();setStat()};
$('#ymback').onclick=()=>{cur=null;view('ymmain');list()};
$('#ymsend').onclick=send;$('#ymin').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send()}};
$('#ymbold').onclick=e=>e.currentTarget.classList.toggle('on');
$('#ymbuzz').onclick=()=>{if(!cur)return;add(cur.n,'BUZZ!!!',1);shake();if(cur.st!=='off'){const x=cur;setTimeout(()=>{add(x.n,'lol stop buzzing me!! =))');SND.ding()},1500)}};
const P=$('#ymemo');P.innerHTML=Object.keys(E).map(k=>`<button type="button" data-k="${esc(k)}" title="${esc(k)}">${E[k]}</button>`).join('');
P.onclick=e=>{const b=e.target.closest('button');if(!b)return;const i=$('#ymin');i.value+=(i.value&&!i.value.endsWith(' ')?' ':'')+b.dataset.k+' ';P.hidden=true;i.focus()};
$('#ymsmile').onclick=()=>P.hidden=!P.hidden;
$('#ymclear').onclick=()=>{if(cur&&confirm('Clear chat history with '+cur.n+'?')){delete st.hist[cur.n];save();draw()}};
const fun=['xX_RollerBlade_Xx','CDmixQueen','dial_up_diva','Furby_Fan_98','sparkle_kitty2001','N64_kid'];$('#ymname').value=st.name||fun[Math.random()*fun.length|0];
$('#ymmascot').innerHTML=$('#ymmascot2').innerHTML=`<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="15" fill="#ffd52e" stroke="#4b0f86" stroke-width="2.5"/><path d="M13 7l3 6M27 7l-3 6" stroke="#4b0f86" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="6" r="2.5" fill="#ff2bd6"/><circle cx="28" cy="6" r="2.5" fill="#00c2c7"/><ellipse cx="15" cy="20" rx="2.2" ry="3" fill="#2a0050"/><ellipse cx="25" cy="20" rx="2.2" ry="3" fill="#2a0050"/><circle cx="15.7" cy="19" r=".8" fill="#fff"/><circle cx="25.7" cy="19" r=".8" fill="#fff"/><path d="M12 26q8 8 16 0" fill="#fff" stroke="#2a0050" stroke-width="2"/></svg>`;
if(st.on){$('#ymme').textContent=st.name;setStat();view('ymmain');list()}else view('ymsign');
window.nnYM.test=()=>({view:[...R.querySelectorAll('.ymv')].find(v=>!v.hidden).id,st:st.status,hist:Object.keys(st.hist).length});})();
