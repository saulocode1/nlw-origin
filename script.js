// abre e fecha menu 
const nav = document.querySelector('#main-nav')
const toggle = document.querySelectorAll('.toggle')

for (const element of toggle) {
    element.addEventListener('click', function() { // quando clicar no menu/x
        nav.classList.toggle('-show') // toggle - adicione classe -show caso não tenha, caso contrário, remova.
    })
}

// quando clicar em um item do menu, esconder menu
const links = document.querySelectorAll('nav ul li a')

for (link of links) {
    link.addEventListener('click', function() { // quando clicar em link do menu
        nav.classList.remove('-show') // remove classe -show do nav
    })
}

// testimonials swiper carousel slider 
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  });

// scroll reveal - mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})      

scrollReveal.reveal (`
    #home .image, #home .wrapper-text,
    #about .image, #about .wrapper-text,
    #services header, #services .card,
    #testimonials .-header, #testimonials .swiper-container,
    #contacts .text, #contacts .links,
    #footer .logo, #footer .brand, #footer .social
    `, 
    { interval: 100 }) // elementos em ordem, intervalo para proximo elemento aparecer

// adicionar sombra no main header quando der scroll 
function showShadowHeader() {
    const header = document.querySelector('.main-header')
    const navHeight = header.offsetHeight // offsetHeight - pega altura do elemento

    if (window.scrollY >= navHeight) { // scrollY - altura do scroll no eixo Y
        header.classList.add('-scroll')
    }
    else {
        header.classList.remove('-scroll')
    }
}

// show arrow-up button
function showArrowUpButton() {
    const arrowUpButton = document.querySelector('#arrow-up')
    
    if(window.scrollY >= 560) {
        arrowUpButton.classList.add('-show')
    } else {
        arrowUpButton.classList.remove('-show')
    }
}

// call scroll functions
window.addEventListener('scroll', function() {
    showArrowUpButton()
    showShadowHeader()
})
