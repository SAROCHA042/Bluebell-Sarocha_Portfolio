let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle('active');
});

/* Typing text animation */ 

var typed = new Typed(".typing", {
     strings: ["Front-End Developer", "UX-UI Designer", "Digital Marketer", "Content Creater"],
     typeSpeed: 100,
     backSpeed: 50,
     loop: true
 });

