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


const sections = document.querySelectorAll('.section')!;
const home = document.querySelector('.home');

let IOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
}

let observer = new IntersectionObserver( (entries) => {
  entries.forEach(entry => {
      document.querySelector('.nav-menu a[href*=' + entry.target.id + ']')!.classList.toggle('active', entry.isIntersecting);
    
      });
},IOptions);

sections.forEach( section => {
  observer.observe(section);
})

observer.observe(home);



const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
    reset: true
})!;

sr.reveal(".home__text, .about__img,.skills__subtitle, .skills__text")
sr.reveal('.home_img, .about_subtitle, .about_text, .skills__img',{delay: 400});
sr.reveal('.skills_data,.contact__input',{interval: 200}); 

