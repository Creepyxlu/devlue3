
//sobre el header mobile

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

//efecto del header al hacer scroll

const header = document.querySelector("header");


window.addEventListener("scroll", function(){
  header.classList.toggle("scroll-header", window.scrollY>0);
})




//submenu

document.getElementById("submenu").addEventListener("click", openSubmenu);

function openSubmenu() {
  document.getElementById("dropdown").classList.toggle("active");
}