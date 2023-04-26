let containerEl = document.getElementById("container");
let sliderEl = document.getElementById("slider");
let slideEls = document.getElementsByClassName("slide");
let btnNext = document.getElementById("btnNext");
let btnBack = document.getElementById("btnBack");
let currentSlide = 0;

console.log(slideEls)

btnNext.addEventListener("click", function(){

    if(currentSlide<slideEls.length-1) {
        for (let c = 0; c < slideEls.length; c++) {
            const slide = slideEls[c];
    
            if(c == currentSlide+1) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
    
        currentSlide++;
    } else {
        console.log("Non c'è una slide successiva")
    }
})

btnBack.addEventListener("click", function(){

    if(currentSlide>0) {
        for (let c = 0; c < slideEls.length; c++) {
            const slide = slideEls[c];
    
            if(c == currentSlide-1) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
    } else {
        console.log("Non c'è una slide precedente")
    }

    currentSlide--;
})