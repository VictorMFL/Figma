let btnHamburguer = document.querySelector(".menu-hamburguer")
let menuMobile = document.querySelector(".menu-mobile")


let primeiroSegundoCards = document.querySelector(".cards-1-2") 
let terceiroQuartoCards = document.querySelector(".cards-3-4") 
let passarCard = document.querySelector(".passarCard")


let primeiroSegundoNum = document.querySelector(".num-1-2")
let terceiroQuartoNum = document.querySelector(".num-3-4")
let passarNum = document.querySelector(".passarNum")

// Abre Menu
function abrirMenu() {
    menuMobile.style.display = 'block'
    btnHamburguer.style.display = 'none'
}

// Fecha Menu
function fecharMenu() {
    menuMobile.style.display = 'none'
    btnHamburguer.style.display = 'block'
}


// Volta Cards
function voltarCard() {
    terceiroQuartoCards.style.display = 'none'
    primeiroSegundoCards.style.display = 'block'
}

// Passa Cards
function passarCards() {
    terceiroQuartoCards.style.display = 'block'
    primeiroSegundoCards.style.display = 'none'
}

// Passa Números
function passarNumeros() {
    primeiroSegundoNum.style.display = 'none'
    terceiroQuartoNum.style.display = 'block'
}

// Volta Números
function voltarNumeros() {
    primeiroSegundoNum.style.display = 'block'
    terceiroQuartoNum.style.display = 'none'
}