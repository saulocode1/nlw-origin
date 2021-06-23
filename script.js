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

// adicionar sombra no main header quando der scroll 
const header = document.querySelector('.main-header')
const navHeight = header.offsetHeight // offsetHeight - pega altura do elemento

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) { // scrollY - altura do scroll no eixo Y
        header.classList.add('-scroll')
    }
    else {
        header.classList.remove('-scroll')
    }
})