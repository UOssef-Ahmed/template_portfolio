let span=document.querySelector(".up")
let mega=document.querySelector(".mega-menu")
let button=document.querySelector(".oth")




button.onclick=()=>mega.classList.toggle("show-me")

button.onblur=()=>mega.classList.remove("show-me")




window.onscroll=()=> this.scrollY >=1000 ?span.classList.add("show"):span.classList.remove("show")

span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}