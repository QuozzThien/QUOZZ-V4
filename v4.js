(()=>{
const BASE='https://quozzthien.github.io/QUOZZ-V4/';
const ID='quozz-v4-panel';

if(document.getElementById(ID)){
 document.getElementById(ID).remove();
 return;
}

const host=document.createElement('div');
host.id=ID;
host.style.cssText='position:fixed;inset:0;z-index:2147483647;background:#000';
const root=host.attachShadow({mode:'open'});

const frame=document.createElement('iframe');
frame.src=BASE;
frame.style.cssText='width:100%;height:100%;border:0';

const close=document.createElement('button');
close.textContent='✕';
close.style.cssText='position:absolute;top:10px;right:10px;background:#000;color:#00ff9c;border:1px solid #00ff9c;border-radius:6px;padding:10px;z-index:10';
close.onclick=()=>host.remove();

root.append(frame,close);
document.body.appendChild(host);
})();
