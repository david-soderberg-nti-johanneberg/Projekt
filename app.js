const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
let opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let headerclass = document.querySelector('.header');
if(headerclass != null){
header_height = header.offsetHeight;
section_height = section.offsetHeight;
}

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    
window.addEventListener("scroll", function(event){
    var scroll2 = this.scrollY;
})

function parallax(x) {
if (x.matches) {


        y = 0.6 + (scroll * 3 / (sectionY.top + section_height));
        } else {
        y = 0.3 + scroll / (sectionY.top + section_height);


    }}

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

      
      var x = window.matchMedia("(max-width: 1550px)")
      parallax(x)
      x.addListener(parallax) 
      
    opacity.forEach(element => {
        element.style.opacity = y
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

});

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");



if(selected != null) {
let option1 = document.getElementById("1");
let option2 = document.getElementById("2");
let option3 = document.getElementById("3");
let option4 = document.getElementById("4");
let option5 = document.getElementById("5");
let option6 = document.getElementById("6");
let titleoption = document.querySelector(".titleoption");
let infooption = document.querySelector(".infooption");
let imgoption = document.querySelector(".imgoption")

option1.addEventListener("click", () => {
console.log(1)
titleoption.innerHTML = "Skiing";
infooption.innerHTML = "Insert cool information about our amazing skiing service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla";
imgoption.src = "img/skiservice.png"
imgoption.alt="Image of Skier"
mapEl.style.opacity = "100%";
movecenter(60.65960245616614, 12.965496154245761)
})
option2.addEventListener("click", () => {
console.log(2)
titleoption.innerHTML = "Biking";
infooption.innerHTML = "Insert cool information about our amazing Biking service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla"
imgoption.src = "img/bikeservice.png"
imgoption.alt="Image of biker"
mapEl.style.opacity = "100%";
movecenter(57.49697653074465, 13.109522849249215)
})
option3.addEventListener("click", () => {
console.log(3)
titleoption.innerHTML = "Hotair Balloon";
infooption.innerHTML = "Insert cool information about our amazing Ballooning service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla"
imgoption.src = "img/balloonservice.png"
imgoption.alt="Image of hotair Balloon"
mapEl.style.opacity = "100%";
movecenter(55.580678402785864, 12.931632625374906)
})
option4.addEventListener("click", () => {
console.log(4)
titleoption.innerHTML = "Scuba Diving";
infooption.innerHTML = "Insert cool information about our amazing Scuba service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla"
imgoption.src = "img/scubaservice.png"
imgoption.alt="Image of scuba diver"
mapEl.style.opacity = "100%";
movecenter(59.33156797179015, 18.048364543293097)
})
option5.addEventListener("click", () => {
console.log(5)
titleoption.innerHTML = "Hiking";
infooption.innerHTML = "Insert cool information about our amazing Hiking service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla"
imgoption.src = "img/hikingservice.png"
imgoption.alt="Image of hiker"
mapEl.style.opacity = "100%";
movecenter(59.33819824334666, 17.913416242454463)
})
option6.addEventListener("click", () => {
console.log(6)
titleoption.innerHTML = "Climbing";
infooption.innerHTML = "Insert cool information about our amazing Climbing service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas lectus libero, sit amet semper lectus vulputate malesuada. Maecenas imperdiet nulla augue, at condimentum magna pretium vitae. Sed bibendum imperdiet arcu, sit amet dictum orci blandit eget. Nam eget fringilla sem. Praesent vel euismod enim. Donec dapibus pharetra fermentum. Nam orci ligula, pulvinar sed mauris eu, tincidunt porta sem. Pellentesque non neque dictum, congue risus ut, aliquet nunc <br><br> 1. Lorem <br><br> 2.Bla bla <br><br> 3.Bla bla"
imgoption.src = "img/climbingservice.png"
imgoption.alt="Image of mountain climber"
mapEl.style.opacity = "100%";
movecenter(59.29911868495861, 17.99155767646861)
});


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });


})};

var googlemap
var marker
function initMap() {
  var uluru = { lat: 57.690518503367244, lng: 11.974776379023586 };
  googlemap = new google.maps.Map(document.getElementById("mapEl"), {
    zoom: 17,
    center: uluru,
  });
  marker = new google.maps.Marker({
    position: uluru,
    map: googlemap,
  });
}
function movecenter(lati,long) {
  googlemap.panTo({lat: Number(lati), lng: Number(long)});
  marker.setPosition({lat: Number(lati), lng: Number(long)})
}
