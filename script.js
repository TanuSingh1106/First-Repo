let a=document.querySelector(".cross")
a.addEventListener("click",()=>{
   let main=document.querySelector(".main")
    main.remove()
})

window.addEventListener("DOMContentLoaded",()=>{
setTimeout(()=>{
let cont=document.querySelector(".cont")
cont.style.display="block"
},2000)
})