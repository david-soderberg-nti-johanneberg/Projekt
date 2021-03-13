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


//Kanske ska försöka göra en array av detta//


var distance1 = document.getElementById("card1").offsetTop
var distance2 = document.getElementById("card2").offsetTop
var distance3 = document.getElementById("card3").offsetTop
var distance4 = document.getElementById("card4").offsetTop
var distance5 = document.getElementById("card5").offsetTop
var distance6 = document.getElementById("card6").offsetTop
var scrolla = this.scrollY
var acard1 = document.querySelector("card1")


function myFunction(x) {
if (x.matches) { 
    console.log(distance1)
    console.log(distance2)
    console.log(distance3)
    console.log(distance4)
    console.log(distance5)
    console.log(distance6)
    console.log(scrolla  - distance1)
    

    document.getElementById("card1").style.color = "green";

        y = 0.6 + (scroll * 3 / (sectionY.top + section_height));
        } else {
        y = 0.2 + scroll / (sectionY.top + section_height);


        }

}

    
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