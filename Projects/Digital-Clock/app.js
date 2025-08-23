const minutesEl=document.getElementById("minutes")
const hoursEl=document.getElementById("hours")
const SecondsEl=document.getElementById("seconds")
const ampmEl=document.getElementById("ampm")
const textEl=document.querySelectorAll("text")

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>=12){
        h=h-12;
        ampm="pm"
    }
h=h<10 ? "0"+h:h
m=m<10 ? "0"+m:m
s=s<10 ? "0"+s:s


    hoursEl.innerText=h;
    minutesEl.innerText=m;
    SecondsEl.innerText=s;
    ampmEl.innerText=ampm;
setTimeout(()=>{
updateClock();
},1000)

}
updateClock();


