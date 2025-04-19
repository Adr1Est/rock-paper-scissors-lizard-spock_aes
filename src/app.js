// Piedra, papel, tijera, lagarto, spock
/*
spock, papel    > piedra  > tijera, lagarto
tijera, lagarto > papel   > piedra, spock
spock, piedra   > tijera  > papel, lagarto
piedra, tijera  > lagarto > spock, papel
lagarto, papel  > spock   > tijera, piedra
*/
const contenedorImagenCPU = document.querySelector("#vsCPU");
const contenerdoImagenPlayer = document.querySelector("#vsPlayer");
const indicador = document.querySelector("#indicador");
let count = 0;
let intervalo1;

const losserClass = "text-lg text-red-500 font-semibold text-shadow-sm text-shadow-black";
const winnerClass = "text-lg text-green-500 font-semibold text-shadow-sm text-shadow-black";
const drawClass = "text-lg text-yellow-300 font-semibold text-shadow-sm text-shadow-black";

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const lizardBtn = document.querySelector("#lizard-btn");
const spockBtn = document.querySelector("#spock-btn");

const fichas = [
  { nombre: "piedra", img: "./assets/rock.png" },
  { nombre: "papel", img: "./assets/paper.png" },
  { nombre: "tijera", img: "./assets/scissors.png" },
  { nombre: "lagarto", img: "./assets/lizard.png" },
  { nombre: "spock", img: "./assets/spock.png" }
];

//LÓGICA DEL JUEGO
const pptls = (eleccion, vs) => {
  console.log(`${eleccion} VS ${vs}!!!!!`);
  if (vs === eleccion) {
    indicador.className = drawClass;
    return indicador.innerHTML = "Empate! 😴"
  };

  if (eleccion === "piedra") {
    if (vs === "spock" || vs === "papel") {
      indicador.className = losserClass;
      return indicador.innerHTML = "Has perdido 🤡";
    } else {
      indicador.className = winnerClass;
      return indicador.innerHTML = "Has ganado! 👽";
    }
  }

  if (eleccion === "papel") {
    if (vs === "tijera" || vs === "lagarto") {
      indicador.className = losserClass;
      return indicador.innerHTML = "Has perdido 🤡";
    } else {
      indicador.className = winnerClass;
      return indicador.innerHTML = "Has ganado! 👽";
    }
  }

  if (eleccion === "tijera") {
    if (vs === "piedra" || vs === "spock") {
      indicador.className = losserClass;
      return indicador.innerHTML = "Has perdido 🤡";
    } else {
      indicador.className = winnerClass;
      return indicador.innerHTML = "Has ganado! 👽";
    }
  }

  if (eleccion === "lagarto") {
    if (vs === "piedra" || vs === "tijera") {
      indicador.className = losserClass;
      return indicador.innerHTML = "Has perdido 🤡";
    } else {
      indicador.className = winnerClass;
      return indicador.innerHTML = "Has ganado! 👽";
    }
  }

  if (eleccion === "spock") {
    if (vs === "lagarto" || vs === "papel") {
      indicador.className = losserClass;
      return indicador.innerHTML = "Has perdido 🤡";
    } else {
      indicador.className = winnerClass;
      return indicador.innerHTML = "Has ganado! 👽";
    }
  }
}

//JUGADA ALEATORIA - CPU PLAYER
function randomArrElement(arr) {
  let randomSelector = Math.floor(Math.random() * arr.length);
  let jugada = arr[randomSelector].nombre;
  contenedorImagenCPU.innerHTML = `
    <img src="${arr[randomSelector].img}" class="" width="250" alt="">`;
  return jugada;
}

//CAMBIO DE IMÁGENES
const imgSwitch = (arr) => {
  if (count === arr.length) { return count = 0; }
  if (count < arr.length) {
    contenedorImagenCPU.innerHTML = `
      <img src="${arr[count].img}" class="" width="250" alt="">`;
    console.log(count);
    return count++;
  }
}

// FUNCIÓN PARA CAMBIAR LA IMAGEN EN FUNCIÓN DE LA SELECCIÓN
const playerImg = (valor) => {
  contenerdoImagenPlayer.innerHTML = `
    <img src="${fichas[valor].img}" class="" width="250" alt="">`;
}

// MANEJO DEL JUEGO
rockBtn.addEventListener("change", () => {
  console.log(`Has seleccionado ${fichas[0].nombre}`);
  clearInterval(intervalo1);
  playerImg(rockBtn.value);
  pptls(fichas[0].nombre, randomArrElement(fichas));
});
paperBtn.addEventListener("change", () => {
  console.log(`Has seleccionado ${fichas[1].nombre}`);
  clearInterval(intervalo1);
  playerImg(paperBtn.value);
  pptls(fichas[1].nombre, randomArrElement(fichas));
});
scissorsBtn.addEventListener("change", () => {
  console.log(`Has seleccionado ${fichas[2].nombre}`);
  clearInterval(intervalo1);
  playerImg(scissorsBtn.value);
  pptls(fichas[2].nombre, randomArrElement(fichas));
});
lizardBtn.addEventListener("change", () => {
  console.log(`Has seleccionado ${fichas[3].nombre}`);
  clearInterval(intervalo1);
  playerImg(lizardBtn.value);
  pptls(fichas[3].nombre, randomArrElement(fichas));
});
spockBtn.addEventListener("change", () => {
  console.log(`Has seleccionado ${fichas[4].nombre}`);
  clearInterval(intervalo1);
  playerImg(spockBtn.value);
  pptls(fichas[4].nombre, randomArrElement(fichas));
});

// EJECUTA AL CARGAR LA PÁGINA
window.onload = () => {
  intervalo1 = setInterval(() => { imgSwitch(fichas) }, 500);
  setTimeout(() => { clearInterval(intervalo1) }, 60000);
}

//console.log(pptls(randomArrElement(fichas), randomArrElement(fichas)));