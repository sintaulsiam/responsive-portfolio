const navToggle = document.querySelector('.nav-toggle')!;
const navMenu = document.querySelector('.nav-menu')!;


const showMenu = function (navToggle, navMenu){
  navMenu.classList.toggle('nav-menu-show');
  navToggle.classList.toggle('nav-toggle-active');
}


navToggle.addEventListener('click', () => {
  showMenu(navToggle, navMenu);
}
)

const navLinks = document.querySelectorAll('.nav_link')!;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    showMenu(navToggle, navMenu);
  }
  )
})

// let IOptions = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }
// let observer = new IntersectionObserver((e) => {
//   console.log(e);
// }, IOptions);

// observer.observe();


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
    reset: true
});

sr.reveal(".home__text, .about__img,.skills__subtitle, .skills__text")
sr.reveal('.home_img, .about_subtitle, .about_text, .skills__img',{delay: 400});
sr.reveal('.skills_data,.contact__input',{interval: 200}); 

