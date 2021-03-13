const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
var opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    
window.addEventListener("scroll", function(event){
    var scroll2 = this.scrollY;
})

function myFunction(x) {
if (x.matches) { 


        y = 0.6 + (scroll * 3 / (sectionY.top + section_height));
        } else {
        y = 0.2 + scroll / (sectionY.top + section_height);


    }}

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x)
      x.addListener(myFunction) 
      
    opacity.forEach(element => {
        element.style.opacity = y
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

});

let controlActivationEvents = window.PointerEvent ? "pointerdown" : "touchstart mousedown";
let controlDeactivationEvents = window.PointerEvent ? "pointerup pointerleave" : "touchend mouseup mouseleave";

let clickableThings = '<comma separated list of selectors>';
$(clickableThings).on(controlActivationEvents,function (e) {
    $(this).addClass('active');
}).on(controlDeactivationEvents, function (e) {
    $(this).removeClass('active');
});