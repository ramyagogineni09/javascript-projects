let modeEl=document.querySelector("#mode");
let bodyEl=document.querySelector("body");
let currMode="light";


modeEl.addEventListener("click",()=>{
    
if(currMode === "light"){
    currMode= "dark";
    bodyEl.classList.remove("light");
bodyEl.style.backgroundColor="black"
}else {
    currMode="light";
    bodyEl.classList.remove("dark");
        bodyEl.style.backgroundColor="white";

}
console.log(currMode);
});


