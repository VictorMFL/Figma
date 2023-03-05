let btnHamburguer = document.querySelector(".menu-hamburguer")
let menuMobile = document.querySelector(".menu-mobile")

function abrirMenu() {
    menuMobile.style.display = 'block'
    btnHamburguer.style.display = 'none'
}

function fecharMenu() {
    menuMobile.style.display = 'none'
    btnHamburguer.style.display = 'block'
}