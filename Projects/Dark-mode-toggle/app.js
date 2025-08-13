let inputEl=document.querySelector(".input")
let bodyEl=document.querySelector("body")

inputEl.checked=true;

function updateBody(){
    if (inputEl.checked){
        bodyEl.style.background="black";
    }else{
        bodyEl.style.background="white";
    }
}
inputEl.addEventListener("input", ()=>{
    updateBody()

})
