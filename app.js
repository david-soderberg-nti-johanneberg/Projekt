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
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    function myFunction(x) {
        if (x.matches) {
        y = 0.6 + (scroll * 3 / (sectionY.top + section_height));
        } else {
        y = 0.1 + scroll / (sectionY.top + section_height);
        }
      }
      
      var x = window.matchMedia("(max-width: 700px)")
      myFunction(x)
      x.addListener(myFunction) 
      
    opacity.forEach(element => {
        element.style.opacity = y
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;


    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += " touch";
}

// Add and remove no-hover class to <li>'s for mobile hover events
jQuery('.card').each(function() {
    var div = jQuery(this);
    
    div.hover(function() {
        div.removeClass('no-hover');
    });
    
    jQuery('*').not(div).bind('click', function() {
        div.addClass('no-hover');
    });
    
});
 
})