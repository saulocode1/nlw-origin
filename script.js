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