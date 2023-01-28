let nav = document.querySelector(".nav")
let topd = document.querySelector(".navbar1")

    window.addEventListener("scroll", ()=>{
        if(window.scrollY>10){
            nav.classList.add("shorten")
            topd.classList.add("none")
        }else{
            nav.classList.remove("shorten")
            topd.classList.remove("none")
        }
    })