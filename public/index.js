anime({
    targets: '.fadeinup',
    translateY: ['3rem',0],
    opacity: [0,1],
    duration: 1500,
    direction: 'linear',
    delay: anime.stagger(100,  {start: 400})
  });
  anime({
    targets: '.nav-el',
    translateY: ['-2rem',0],
    opacity: [0,1],
    duration: 1500,
    direction: 'linear',
    delay: anime.stagger(100,  {start: 1000})
  });

let header = document.querySelector(".header");
header.innerHTML = header.innerText.split("").map(function(char){
    return "<span>"+ char +"</span>";
}).join("");

const primaryNavigation = document.getElementById("primary-navigation");
const navToggle = document.getElementById("menu");

navToggle.addEventListener("click", () => {

    const visibility = primaryNavigation.getAttribute("data-visible");
    if( visibility === "true"){
         primaryNavigation.setAttribute("data-visible", false);
         navToggle.style.backgroundImage = "url('./icons/hamburger.svg')";
         primaryNavigation.style.height = '0vh';        
    }else{
         primaryNavigation.setAttribute("data-visible", true);
         navToggle.style.backgroundImage = "url('./icons/close.svg')";
         primaryNavigation.style.height = '100vh'; 
    }
});

function handleClass(clickedId){

    var links = primaryNavigation.getElementsByClassName("div-link");
    for (var i = 0; i < links.length; i++) {
        if(parseInt(clickedId) == i){
            links[i].classList.add("active");
        } 
        else{
            links[i].classList.remove("active");
        }       
    }

    const visibility = primaryNavigation.getAttribute("data-visible");
    if( visibility === "true"){
         primaryNavigation.setAttribute("data-visible", false);
         primaryNavigation.style.height = '0vh';        
    }
    navToggle.style.backgroundImage = "url('./icons/hamburger.svg')";
}
