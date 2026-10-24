(()=>{const $=s=>document.querySelector(s),W=$('.wrap');if(!W)return;
// pixel icons: 16x16 grids, chars map to colors
const PAL={k:'#000',w:'#fff',g:'#c0c0c0',d:'#808080',y:'#ffe600',p:'#ff2bd6',b:'#1e5bff',t:'#00c2c7',r:'#e8222a',n:'#3dd43d',o:'#ff8a00',v:'#7a12b8',s:'#ffd9c2',e:'#5a3a1a'};
const PX={
song:`......kkkkkk....|.....kyyyyyyk...|....kyyyyyyyyk..|...kyykkkkkkyyk.|...kyk......kyk.|...kyk......kyk.|..kkyk....kkkyk.|.kpppk...kpppk..|.kpppk...kpppk..|..kkk.....kkk...|................|.kkkkkkkkkkkkkk.|.kgggggggggggggk|.kgkkgkkgkkgkkgk|.kgggggggggggggk|..kkkkkkkkkkkkk.`,
tv:`...k.......k....|....k.....k.....|.....k...k......|kkkkkkkkkkkkkkk.|kgggggggggggggk.|kgkkkkkkkkkgdgk.|kgkttttttttkgdk.|kgkttwtttttkgdk.|kgktttttttpkgrk.|kgkttttpttttkgk.|kgktttttttttkgk.|kgkkkkkkkkkgggk.|kgggggggggggggk.|kkkkkkkkkkkkkkk.|.kk.........kk..|................`,
otd:`.kkkkkkkkkkkkkk.|.krrrrrrrrrrrrk.|.krkwrrrrrrkwrk.|.krrrrrrrrrrrrk.|.kwwwwwwwwwwwwk.|.kwkkwkkwkkwkwk.|.kwwwwwwwwwwwwk.|.kwkkwkkwppwkwk.|.kwwwwwwwppwwwk.|.kwkkwkkwkkwkwk.|.kwwwwwwwwwwwwk.|.kwkkwkkwkkwkwk.|.kwwwwwwwwwwwwk.|.kkkkkkkkkkkkkk.|................|................`,
cartoons:`................|.....kkkkkk.....|...kkyyyyyykk...|..kyyyyyyyyyyk..|..kyykkyykkyyk..|.kyyykwyykwyyyk.|.kyyykkyykkyyyk.|.kyyyyyyyyyyyyk.|.kyykyyyyyykyyk.|.kyyykkkkkkyyyk.|..kyyykrrkyyyk..|..kyyyykkyyyyk..|...kkyyyyyykk...|.....kkkkkk.....|................|................`,
wwe:`................|.kkkkkkkkkkkkkk.|.kyyyyyyyyyyyyk.|.kykkkkkkkkkkyk.|.kyk.kyyyyk.kyk.|.kykkyrrrrykkyk.|.kyyyyrwwryyyyk.|.kyyyyrrrryyyyk.|.kykkyyyyyykkyk.|.kyk.kkkkkk.kyk.|.kykkkkkkkkkkyk.|.kyyyyyyyyyyyyk.|.kkkkkkkkkkkkkk.|................|................|................`,
toybox:`................|..kkkkkkkkkkkk..|.knnnnnnnnnnnnk.|.kkkkkkkkkkkkkk.|.kpppyyyttttvvk.|.kpppyyyttttvvk.|.kpppyyykkttvvk.|.kpppyyykkttvvk.|.kpppyyyttttvvk.|.kpppyyyttttvvk.|.kpppyyyttttvvk.|.kkkkkkkkkkkkkk.|................|................|................|................`,
messenger:`................|...kkkkkkkkkk...|..kvvvvvvvvvvk..|.kvvvyyyyyyvvvk.|.kvvyykyykyyvvk.|.kvvyykyykyyvvk.|.kvvyyyyyyyyvvk.|.kvvykyyyykyvvk.|.kvvyykkkkyyvvk.|.kvvvyyyyyyvvvk.|..kvvvvvvvvvvk..|...kkkvvkkkkk...|.....kvk........|.....kk.........|................|................`,
photos:`................|.kkkkkkkkkkkkkk.|.kwwwwwwwwwwwwk.|.kwttttttttttwk.|.kwtttttyytttwk.|.kwtttttyytttwk.|.kwtttttttttttk.|.kwttnntttttnwk.|.kwtnnnnttnnnwk.|.kwnnnnnnnnnnwk.|.kwnnnnnnnnnnwk.|.kwwwwwwwwwwwwk.|.kwwwwwwwwwwwwk.|.kkkkkkkkkkkkkk.|................|................`,
memories:`................|..kkkkkkkkkkk...|..kpppppppppkk..|..kpwwwwwwwpkwk.|..kpwkkkkkwpkwk.|..kpwwwwwwwpkwk.|..kpwkkkkwwpkwk.|..kpwwwwwwwpkwk.|..kpwkkkkkwpkwk.|..kpwwwwwwwpkwk.|..kpppppppppkwk.|..kpppyyppppkk..|..kpppyypppkk...|..kkkkkkkkkk....|................|................`,
install:`................|....kkkkkkkk....|....kddddddk....|....kwwwwwwk....|....kwwnnwwk....|....kwwnnwwk....|....kwnnnnwk....|....kwwnnwwk....|....kwwwwwwk....|....kddddddk....|....kddkkddk....|....kkkkkkkk....|................|................|................|................`,
logo:`rrrr.nnnn|rrrr.nnnn|rrrr.nnnn|rrrr.nnnn|.........|bbbb.yyyy|bbbb.yyyy|bbbb.yyyy|bbbb.yyyy`};
function px(k,sz){const rows=PX[k].split('|'),h=rows.length,w=rows[0].length;let r='';rows.forEach((row,y)=>[...row].forEach((c,x)=>{if(PAL[c])r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PAL[c]}"/>`}));return`<svg viewBox="0 0 ${w} ${h}" width="${sz}" height="${sz}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`}
const APPS=[['home','song','Song of the Day'],['tv','tv','TV Show of the Day'],['onthisday','otd','On This Day'],['cartoons','cartoons','Cartoon Corner'],['wwe','wwe','Wrestling Classics'],['toybox','toybox','Toy Box'],['messenger','messenger','Messenger'],['photos','photos','Photos'],['memories','memories','Memories'],['install','install','Install App']];
const NAME=Object.fromEntries(APPS.map(a=>[a[0],a[2]])),ICON=Object.fromEntries(APPS.map(a=>[a[0],a[1]]));
// build desktop
const D=document.createElement('div');D.id='w98desk';D.innerHTML='<div class="w98icons"></div>';W.parentNode.insertBefore(D,W);
const I=D.firstChild;const touch=matchMedia('(pointer:coarse)').matches;
APPS.forEach(([v,ic,n])=>{const b=document.createElement('button');b.type='button';b.className='w98ic';b.dataset.v=v;b.innerHTML=px(ic,40)+'<span></span>';b.lastChild.textContent=n;
 b.onclick=e=>{I.querySelectorAll('.sel').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');if(touch||e.detail===0)open(v)};b.ondblclick=()=>open(v);I.appendChild(b)});
// window frame
const F=document.createElement('div');F.id='w98win';F.hidden=true;F.innerHTML='<div class="w98tb"><span class="w98ti"></span><b></b><button type="button" data-a="min" aria-label="Minimize"><i class="mn"></i></button><button type="button" data-a="max" aria-label="Maximize"><i class="mx"></i></button><button type="button" data-a="close" aria-label="Close"><i class="cl"></i></button></div><div class="w98body"></div>';
W.parentNode.insertBefore(F,W);F.lastChild.appendChild(W);
// taskbar
const T=document.createElement('div');T.id='w98bar';T.innerHTML='<button type="button" class="w98start" aria-haspopup="true">'+px('logo',16)+'<b>Start</b></button><div class="w98tasks"></div><div class="w98tray"><span class="w98spk">♪</span><span id="w98clk"></span></div>';document.body.appendChild(T);
const SM=document.createElement('div');SM.id='w98menu';SM.hidden=true;SM.innerHTML='<div class="w98side"><b>Nook</b><span>98</span></div><div class="w98items"></div>';document.body.appendChild(SM);
const SI=SM.lastChild;APPS.concat([['desktop','logo','Desktop'],['shutdown',null,'Shut Down...']]).forEach(([v,ic,n])=>{const b=document.createElement('button');b.type='button';b.innerHTML=(ic?px(ic,24):'<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="#000" stroke-width="2.5"/><path d="M12 3v9" stroke="#000" stroke-width="2.5"/></svg>')+'<span></span>';b.lastChild.textContent=n;if(v==='shutdown')b.className='w98sep';b.onclick=()=>{SM.hidden=true;v==='shutdown'?shut():v==='desktop'?go('desktop'):open(v)};SI.appendChild(b)});
T.querySelector('.w98start').onclick=e=>{e.stopPropagation();SM.hidden=!SM.hidden;T.querySelector('.w98start').classList.toggle('on',!SM.hidden);chime()};
document.addEventListener('click',e=>{if(!SM.hidden&&!SM.contains(e.target)&&!e.target.closest('.w98start')){SM.hidden=true;T.querySelector('.w98start').classList.remove('on')}});
const clk=()=>{T.querySelector('#w98clk').textContent=new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})};clk();setInterval(clk,15000);
let opened=JSON.parse(sessionStorage.getItem('w98open')||'[]'),minim=false;
const saveO=()=>sessionStorage.setItem('w98open',JSON.stringify(opened));
function tasks(cur){const tk=T.querySelector('.w98tasks');tk.innerHTML='';opened.forEach(v=>{const b=document.createElement('button');b.type='button';b.className='w98task'+(v===cur&&!minim?' on':'');b.innerHTML=px(ICON[v],16)+'<span></span>';b.lastChild.textContent=NAME[v];b.onclick=()=>{if(v===cur&&!minim){minim=true;F.hidden=true;tasks(cur)}else open(v)};tk.appendChild(b)})}
function go(v){location.hash=v==='desktop'?'#desktop':'#'+v}
function open(v){chime();if(v==='install'){const i=document.getElementById('inst');i&&i.click();return}minim=false;if(!opened.includes(v)){opened.push(v);saveO()}if(location.hash==='#'+v)sync();else go(v)}
function sync(){const v=(location.hash||'').slice(1);const isApp=NAME[v]&&v!=='install';document.body.classList.add('w98');
 if(!isApp){F.hidden=true;D.hidden=false;tasks(null);return}
 if(!opened.includes(v)){opened.push(v);saveO()}F.hidden=minim;F.querySelector('b').textContent=NAME[v];F.querySelector('.w98ti').innerHTML=px(ICON[v],16);tasks(v);F.querySelector('.w98body').scrollTop=0}
F.querySelector('.w98tb').onclick=e=>{const a=e.target.closest('button');if(!a)return;const v=(location.hash||'').slice(1);
 if(a.dataset.a==='min'){minim=true;F.hidden=true;tasks(v)}else if(a.dataset.a==='max')F.classList.toggle('max');else{opened=opened.filter(x=>x!==v);saveO();minim=false;go('desktop')}};
F.querySelector('.w98tb').ondblclick=e=>{if(!e.target.closest('button'))F.classList.toggle('max')};
// shutdown
const S=document.createElement('div');S.id='w98off';S.hidden=true;S.innerHTML='<p>It\'s now safe to turn off<br>your computer.</p><small>(click anywhere to start back up)</small>';document.body.appendChild(S);
function shut(){S.hidden=false;tone([523,392,330,262],.18)}S.onclick=()=>{S.hidden=true;opened=[];saveO();go('desktop');chimed=false;chime()};
// chime (synthesized, original)
let chimed=false,AC;function tone(ns,step){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();ns.forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+i*step;o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.12,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+1.2);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+1.3)})}catch(e){}}
function chime(){if(chimed)return;chimed=true;tone([392,523,659,784,1047],.16)}
addEventListener('hashchange',sync);
if(!location.hash||location.hash==='#'||location.hash==='#desktop')history.replaceState(null,'','#desktop');sync();
window.nnW98=()=>({desk:!D.hidden,win:!F.hidden,title:F.querySelector('b').textContent,tasks:[...T.querySelectorAll('.w98task')].map(b=>b.textContent),max:F.classList.contains('max')});})();
