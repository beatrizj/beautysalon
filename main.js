/*Abre e fecha o menu*/
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("#header .toggle");

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show');
  })
}

/*Esconder o menu ao clicar em algum link*/
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

/*Adicionar sombra no header ao rolar a página*/
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.toggle('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

/*Adicionar o Swiper no Testimonials*/
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {  /* Breakpoints em dispositivos maiores que 767 */
      slidesPerView: 2,
      setWrapperSize: true   
    }
  }
});

/*Adicionar o ScrollReveal*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
   #about .image, #about .text, 
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials, 
   #contact .text, #contact .links,
   footer .brand, footer .social
  `, 
  { interval: 100 }
)

/*Exibir o botão para voltar ao topo*/
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
    if (window.scrollY >= 200) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Manter botão no menu em hover quando a seção estiver visível */
const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})