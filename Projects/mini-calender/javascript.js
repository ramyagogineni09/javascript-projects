const monthEl=document.getElementById("month-name")
const dayEl=document.getElementById("day-name")
const dateEl=document.getElementById("date-number")
const yearEl=document.getElementById("year-number")

const date=new Date();
const month=date.getMonth();
monthEl.innerText=date.toLocaleString("en" ,{
    month:"long"
})
dayEl.innerText=date.toLocaleString("en",{
    weekday:"long"
})
dateEl.innerText=date.getDate();
yearEl.innerText=date.getFullYear();



