const imagecontainerEl=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn")
btnEl.addEventListener("click",()=>{

    addNewImage()

})
function addNewImage(){
    const newImagEl=document.createElement("img");
    newImagEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imagecontainerEl.appendChild(newImagEl);
}

