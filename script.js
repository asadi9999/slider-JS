//variables........................................................
let prev=document.querySelector('div.slides > span.prev')
let next=document.querySelector('div.slides > span.next')
let slideShow=document.querySelector('div.slideshow')
let slides=document.querySelectorAll('div.slides > div.slide')
let points=document.querySelectorAll('div.points > span')
let active=0
let timer=2000
//.functions...................................................................functions
function classSwitcher(){
    slides.forEach(slide => {
        slide.classList.remove('active')
        slides[active].classList.add('active')
               
    });
    points.forEach(point => {
        point.classList.remove('active')
        points[active].classList.add('active')
        
    });
};
goNext=() => {
    //اگراکتیومساوی مساوی طول اسلایدز-1هست! اکتیو رو صفرکن درغیراینصورت اکتیورو یکی بهش اضاف کن 
        active=(active == slides.length-1) ? 0 : active +1
        classSwitcher()
}
goPrev=() => {
        active=(active == 0) ? slides.length-1 : active -1
        classSwitcher()
}
//...........................................................................end functions...............................
//next button
next.addEventListener('click', e => goNext())
//previous button
prev.addEventListener('click', e => goPrev())

let runSlideShow= setInterval(goNext,timer)
//points
points.forEach((point,index) => {
    point.addEventListener('click', e => {
        active=index
        classSwitcher()
    })
});

//mouseover
slideShow.addEventListener('mouseover', e => {
    clearInterval(runSlideShow)
})
//mouseleave
slideShow.addEventListener('mouseleave', e => {
    runSlideShow=setInterval(goNext,timer)
})











