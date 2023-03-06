// Menu
let btnHamburguer = document.querySelector(".menu-hamburguer")
let menuMobile = document.querySelector(".menu-mobile")

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


// Cards
let primeiroSegundoCards = document.querySelector(".cards-1-2") 
let terceiroQuartoCards = document.querySelector(".cards-3-4") 
let passarCard = document.querySelector(".passarCard")

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


// Números
let primeiroSegundoNum = document.querySelector(".num-1-2")
let terceiroQuartoNum = document.querySelector(".num-3-4")
let passarNum = document.querySelector(".passarNum")

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


// Formas de Contato
let localizacao = document.querySelector(".localizacao")
let telefone = document.querySelector(".telefone")
let email = document.querySelector(".email")

// Passar formas de contato
function passarContato() {
    telefone.style.display = 'flex'
    localizacao.style.display = 'none'
}

// Voltar formas de contato
function voltarContato() {
    telefone.style.display = 'none'
    localizacao.style.display = 'flex'
}