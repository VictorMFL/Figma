// Menu
let btnHamburguer = document.querySelector(".menu-hamburguer");
let menuMobile = document.querySelector(".menu-mobile");

// Abre Menu
function abrirMenu() {
  menuMobile.style.display = "block";
  btnHamburguer.style.display = "none";
}

// Fecha Menu
function fecharMenu() {
  menuMobile.style.display = "none";
  btnHamburguer.style.display = "block";
}

// Formas de Contato
let localizacao = document.querySelector(".localizacao");
let telefone = document.querySelector(".telefone");
let email = document.querySelector(".email");
let passarCell = 0;

// Formas de contato de celular
function passarContatoCel() {
  if (passarCell === 3) {
    passarCell = 0;
  }
  passarCell++;

  if (passarCell === 1) {
    localizacao.style.display = "none";
    telefone.style.display = "flex";
  } else if (passarCell === 2) {
    localizacao.style.display = "none";
    telefone.style.display = "none";
    email.style.display = "flex";
  } else {
    telefone.style.display = "none";
    email.style.display = "none";
    localizacao.style.display = "flex";
  }
}

function voltarContatoCel() {
  if (passarCell === 0) {
    passarCell = 3;
  }

  passarCell--;

  if (passarCell === 1) {
    email.style.display = "none";
    localizacao.style.display = "none";
    telefone.style.display = "flex";
  } else if (passarCell === 2) {
    localizacao.style.display = "none";
    telefone.style.display = "none";
    email.style.display = "flex";
  } else {
    telefone.style.display = "none";
    email.style.display = "none";
    localizacao.style.display = "flex";
  }
}

// Cards
let primeiroSegundoCards = document.querySelector(".cards-1-2");
let terceiroQuartoCards = document.querySelector(".cards-3-4");
let passarCard = document.querySelector(".passarCard");
let card1 = document.querySelector(".card-1");
let card2 = document.querySelector(".card-2");
let card3 = document.querySelector(".card-3");
let card4 = document.querySelector(".card-4");
let passarCardCell = 0;
let passarCardTablet = 0;

// Passa Cards de tablet
function passarCards() {
  if (passarCardTablet === 2) {
    passarCardTablet = 0;
  }

  passarCardTablet++;

  if (passarCardTablet === 1) {
    primeiroSegundoCards.style.display = "none";
    terceiroQuartoCards.style.display = "block";
  } else {
    terceiroQuartoCards.style.display = "none";
    primeiroSegundoCards.style.display = "block";
  }
}

// Volta Cards de tablet
function voltarCard() {
    if (passarCardTablet === 0) {
        passarCardTablet = 2;
      }
    
      passarCardTablet--;
    
      if (passarCardTablet === 1) {
        primeiroSegundoCards.style.display = "none";
        terceiroQuartoCards.style.display = "block";
      } else {
        terceiroQuartoCards.style.display = "none";
        primeiroSegundoCards.style.display = "block";
      }
}

// Cards de Celular
// Passa Cards de celular
function passarCardCelular() {
  if (passarCardCell === 4) {
    passarCardCell = 0;
  }
  passarCardCell++;

  if (passarCardCell === 1) {
    card1.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card2.style.display = "flex";
  } else if (passarCardCell === 2) {
    card1.style.display = "none";
    card2.style.display = "none";
    card4.style.display = "none";
    card3.style.display = "flex";
  } else if (passarCardCell === 3) {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "flex";
  } else {
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card1.style.display = "flex";
  }
}

// Volta Cards de celular
function voltarCardCelular() {
  if (passarCardCell === 0) {
    passarCardCell = 4;
  }
  passarCardCell--;

  if (passarCardCell === 1) {
    card1.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card2.style.display = "flex";
  } else if (passarCardCell === 2) {
    card1.style.display = "none";
    card2.style.display = "none";
    card4.style.display = "none";
    card3.style.display = "flex";
  } else if (passarCardCell === 3) {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "flex";
  } else {
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card1.style.display = "flex";
  }
}

// Marcas de celular
let marca1 = document.querySelector(".marca-1");
let marca2 = document.querySelector(".marca-2");
let marca3 = document.querySelector(".marca-3");
let marca4 = document.querySelector(".marca-4");
let passarMarcasCell = 0;

// Passa a marca
function passarMarcas() {
  if (passarMarcasCell === 4) {
    passarMarcasCell = 0;
  }
  passarMarcasCell++;

  if (passarMarcasCell === 1) {
    marca1.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "none";
    marca2.style.display = "flex";
  } else if (passarMarcasCell === 2) {
    marca1.style.display = "none";
    marca2.style.display = "none";
    marca4.style.display = "none";
    marca3.style.display = "flex";
  } else if (passarMarcasCell === 3) {
    marca1.style.display = "none";
    marca2.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "flex";
  } else {
    marca2.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "none";
    marca1.style.display = "flex";
  }
}

// Volta a marca
function voltarMarcas() {
  if (passarMarcasCell === 0) {
    passarMarcasCell = 4;
  }
  passarMarcasCell--;

  if (passarMarcasCell === 1) {
    marca1.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "none";
    marca2.style.display = "flex";
  } else if (passarMarcasCell === 2) {
    marca1.style.display = "none";
    marca2.style.display = "none";
    marca4.style.display = "none";
    marca3.style.display = "flex";
  } else if (passarMarcasCell === 3) {
    marca1.style.display = "none";
    marca2.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "flex";
  } else {
    marca2.style.display = "none";
    marca3.style.display = "none";
    marca4.style.display = "none";
    marca1.style.display = "flex";
  }
}

// Números
let primeiroSegundoNum = document.querySelector(".num-1-2");
let terceiroQuartoNum = document.querySelector(".num-3-4");
let num1 = document.querySelector(".num-1");
let num2 = document.querySelector(".num-2");
let num3 = document.querySelector(".num-3");
let num4 = document.querySelector(".num-4");
let passarNum = 0;
let passarNumTablet = 0;

// Passa Números de tablet
function passarNumeros() {
  if (passarNumTablet === 2) {
    passarNumTablet = 0;
  }
  passarNumTablet++;

  if (passarNumTablet === 1) {
    primeiroSegundoNum.style.display = "none";
    terceiroQuartoNum.style.display = "block";
  } else {
    terceiroQuartoNum.style.display = "none";
    primeiroSegundoNum.style.display = "block";
  }
}

// Volta Números de tablet
function voltarNumeros() {
  if (passarNumTablet === 0) {
    passarNumTablet = 2;
  }
  passarNumTablet--;

  if (passarNumTablet === 1) {
    primeiroSegundoNum.style.display = "none";
    terceiroQuartoNum.style.display = "block";
  } else {
    terceiroQuartoNum.style.display = "none";
    primeiroSegundoNum.style.display = "block";
  }
}

// Números de celular
// passa Números de celular
function passarNumerosCell() {
  if (passarNum === 4) {
    passarNum = 0;
  }
  passarNum++;

  if (passarNum === 1) {
    num1.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num2.style.display = "flex";
  } else if (passarNum === 2) {
    num1.style.display = "none";
    num2.style.display = "none";
    num4.style.display = "none";
    num3.style.display = "flex";
  } else if (passarNum === 3) {
    num1.style.display = "none";
    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "block";
  } else {
    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num1.style.display = "block";
  }
}

// Volta Números de celular
function voltarNumerosCell() {
  if (passarNum === 0) {
    passarNum = 4;
  }
  passarNum--;

  if (passarNum === 1) {
    num1.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num2.style.display = "flex";
  } else if (passarNum === 2) {
    num1.style.display = "none";
    num2.style.display = "none";
    num4.style.display = "none";
    num3.style.display = "flex";
  } else if (passarNum === 3) {
    num1.style.display = "none";
    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "block";
  } else {
    num2.style.display = "none";
    num3.style.display = "none";
    num4.style.display = "none";
    num1.style.display = "block";
  }
}
