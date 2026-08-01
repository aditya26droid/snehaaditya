AOS.init({
duration:1200,
once:false
});

const passwordScreen=document.getElementById("passwordScreen");
const bootScreen=document.getElementById("bootScreen");
const mainSite=document.getElementById("mainSite");

const password=document.getElementById("password");

const unlockBtn=document.getElementById("unlockBtn");

const terminal=document.getElementById("terminalText");

const bgMusic=document.getElementById("bgMusic");

mainSite.style.display="none";

bootScreen.style.display="none";

const ACCESS_CODE="0826";

unlockBtn.addEventListener("click",unlockWebsite);

password.addEventListener("keypress",function(e){

if(e.key==="Enter"){

unlockWebsite();

}

});

function unlockWebsite(){

if(password.value!==ACCESS_CODE){

password.style.border="2px solid #ff4fa3";

password.value="";

password.placeholder="Wrong Password";

password.classList.add("glow");

setTimeout(()=>{

password.style.border="none";

password.classList.remove("glow");

password.placeholder="0826";

},1200);

return;

}

passwordScreen.style.opacity="0";

setTimeout(()=>{

passwordScreen.style.display="none";

bootScreen.style.display="flex";

startBoot();

},800);

}

function startBoot(){

terminal.innerHTML="";

const lines=[

"Initializing Love Spectrum...",

"",

"Loading Memories...",

"",

"Scanning Heart Frequency...",

"",

"Searching Universe...",

"",

"Signal Detected ❤️",

"",

"Subject Found",

"",

"Sneha",

"",

"Matching Frequency...",

"",

"Synchronization Complete",

"",

"100%",

"",

"Welcome Amar Rasmalai ❤️"

];

let index=0;

const typing=setInterval(()=>{

terminal.innerHTML+=lines[index]+"<br>";

terminal.scrollTop=terminal.scrollHeight;

index++;

if(index>=lines.length){

clearInterval(typing);

setTimeout(openWebsite,2200);

}

},280);

}

function openWebsite(){

bootScreen.style.opacity="0";

setTimeout(()=>{

bootScreen.style.display="none";

mainSite.style.display="block";

mainSite.style.opacity="0";

setTimeout(()=>{

mainSite.style.transition="1.2s";

mainSite.style.opacity="1";

window.scrollTo({

top:0,

behavior:"smooth"

});

playMusic();

},100);

},800);

}

function playMusic(){

if(!bgMusic) return;

bgMusic.volume=.35;

const playPromise=bgMusic.play();

if(playPromise!==undefined){

playPromise.catch(()=>{

console.log("Autoplay blocked until user interaction.");

});

}

}
const dayCounter=document.getElementById("dayCounter");

const relationshipStart=new Date("2026-06-20T00:00:00");

function updateDays(){

if(!dayCounter) return;

const today=new Date();

const difference=today-relationshipStart;

const days=Math.floor(difference/(1000*60*60*24));

dayCounter.innerHTML=days<0?0:days;

}

updateDays();

function revealElements(){

const elements=document.querySelectorAll(".fade-up");

elements.forEach(el=>{

const rect=el.getBoundingClientRect();

if(rect.top<window.innerHeight-120){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",revealElements);

revealElements();

const replay=document.getElementById("replay");

if(replay){

replay.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

document.querySelectorAll(".startBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

const firstMission=document.querySelector(".mission");

if(firstMission){

firstMission.scrollIntoView({

behavior:"smooth"

});

}

});

});

function createHeart(x,y){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=(18+Math.random()*12)+"px";

heart.style.zIndex="9999";

heart.style.transition="all 2s ease-out";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translate(${(Math.random()*120)-60}px,-180px) scale(.4)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},2000);

}

document.addEventListener("click",(e)=>{

for(let i=0;i<6;i++){

setTimeout(()=>{

createHeart(

e.clientX+(Math.random()*60-30),

e.clientY+(Math.random()*60-30)

);

},i*90);

}

});

const photos=document.querySelectorAll(".memory-photo,.memory-card img,.planet img,.last-photo img");

photos.forEach(photo=>{

photo.style.cursor="zoom-in";

photo.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.left="0";

overlay.style.top="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.95)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="10000";

overlay.style.backdropFilter="blur(15px)";

const image=document.createElement("img");

image.src=photo.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

image.style.boxShadow="0 0 40px rgba(255,79,163,.4)";

image.style.animation="zoomPhoto .4s";

overlay.appendChild(image);

overlay.addEventListener("click",()=>{

overlay.remove();

});

document.body.appendChild(overlay);

});

});
const typewriter=document.getElementById("typewriter");

const endingText=
"If there is another universe... I hope I find you there too ❤️";

let typeIndex=0;

function startTypewriter(){

if(!typewriter) return;

typewriter.innerHTML="";

function type(){

if(typeIndex<endingText.length){

typewriter.innerHTML+=endingText.charAt(typeIndex);

typeIndex++;

setTimeout(type,70);

}

}

type();

}

const endingObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startTypewriter();

endingObserver.disconnect();

}

});

});

const endingSection=document.querySelector(".universe-ending");

if(endingSection){

endingObserver.observe(endingSection);

}

function createStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width=Math.random()*3+2+"px";

star.style.height=star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-20px";

star.style.opacity=Math.random();

star.style.boxShadow="0 0 12px white";

star.style.zIndex="-1";

document.body.appendChild(star);

const speed=Math.random()*5+3;

let y=-20;

const move=setInterval(()=>{

y+=speed;

star.style.top=y+"px";

if(y>window.innerHeight+30){

clearInterval(move);

star.remove();

}

},20);

}

setInterval(createStar,350);

const vinyl=document.querySelector(".vinyl");

if(bgMusic && vinyl){

bgMusic.addEventListener("play",()=>{

vinyl.style.animationPlayState="running";

});

bgMusic.addEventListener("pause",()=>{

vinyl.style.animationPlayState="paused";

});

}

const missionCards=document.querySelectorAll(".mission-card");

missionCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});

const counters=document.querySelectorAll(".stat h1");

counters.forEach(counter=>{

if(counter.innerText==="∞") return;

const target=parseInt(counter.innerText)||100;

counter.innerText="0";

let count=0;

const increment=target/80;

const timer=setInterval(()=>{

count+=increment;

if(count>=target){

counter.innerText=target;

clearInterval(timer);

}else{

counter.innerText=Math.floor(count);

}

},20);

});

document.querySelectorAll(".memory-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 45px rgba(255,79,163,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});
let heartClicks=0;

document.querySelectorAll(".heart-btn,.heart-icon,.big-heart").forEach(btn=>{

btn.addEventListener("click",()=>{

heartClicks++;

if(heartClicks===5){

showSecretMessage();

heartClicks=0;

}

});

});

function showSecretMessage(){

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.inset="0";

popup.style.background="rgba(0,0,0,.88)";

popup.style.backdropFilter="blur(12px)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="99999";

popup.innerHTML=`

<div style="
max-width:700px;
padding:50px;
background:rgba(255,255,255,.08);
border-radius:30px;
text-align:center;
color:white;
border:1px solid rgba(255,255,255,.15);
">

<h1 style="margin-bottom:25px;font-family:Orbitron">

❤️ Secret Research File ❤️

</h1>

<p style="font-size:20px;line-height:2">

Congratulations ❤️

You found the hidden experiment.

Final Observation

Out of nearly eight billion people

My favorite human

Will always be

<b>Sneha</b>

</p>

<button id="closeSecret"

style="
margin-top:35px;
padding:15px 40px;
border:none;
border-radius:40px;
background:#ff4fa3;
color:white;
font-size:18px;
cursor:pointer;
">

Close

</button>

</div>

`;

document.body.appendChild(popup);

document.getElementById("closeSecret").onclick=()=>{

popup.remove();

};

}

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.top="-50px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.pointerEvents="none";

petal.style.zIndex="999";

document.body.appendChild(petal);

let x=parseFloat(petal.style.left);

let y=-50;

let rotate=0;

const speed=2+Math.random()*3;

const drift=(Math.random()-.5)*2;

const fall=setInterval(()=>{

y+=speed;

x+=drift;

rotate+=2;

petal.style.top=y+"px";

petal.style.left=x+"px";

petal.style.transform=`rotate(${rotate}deg)`;

if(y>window.innerHeight+80){

clearInterval(fall);

petal.remove();

}

},16);

}

setInterval(createPetal,900);

document.addEventListener("dblclick",(e)=>{

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

heart.style.transition="1.5s";

document.body.appendChild(heart);

const angle=Math.random()*Math.PI*2;

const distance=100+Math.random()*180;

setTimeout(()=>{

heart.style.transform=

`translate(${Math.cos(angle)*distance}px,

${Math.sin(angle)*distance}px)

scale(.2)`;

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1600);

}

});

window.addEventListener("scroll",()=>{

const scroll=

window.scrollY/

(document.body.scrollHeight-window.innerHeight);

document.documentElement.style.setProperty(

"--pinkGlow",

scroll

);

});

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1.5s";

document.body.style.opacity="1";

},100);

});

console.log("%cLOVE SPECTRUM","font-size:34px;color:#ff4fa3;font-weight:bold");

console.log("%cMade with ❤️ by Aditya","font-size:18px;color:#6ef3ff");
