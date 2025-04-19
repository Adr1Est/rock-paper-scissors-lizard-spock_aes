// Piedra, papel, tijera, lagarto, spock
/*
spock, papel    > piedra  > tijera, lagarto
tijera, lagarto > papel   > piedra, spock
spock, piedra   > tijera  > papel, lagarto
piedra, tijera  > lagarto > spock, papel
lagarto, papel  > spock   > tijera, piedra
*/
const imagenes = ["./assets/rock.png", "./assets/paper.png", "./assets/scissors.png", "./assets/lizard.png", "./assets/spock.png"];
const contenedorImagenCPU = document.querySelector("#vsCPU");
const indicador = document.querySelector("#indicador");
let count = 0;
let intervalo1;

const fichas = ["piedra", "papel", "tijera", "lagarto", "spock"];

const pptls = (eleccion, vs) => {
  console.log(`${eleccion} VS ${vs}!!!!!`);
  if (vs === eleccion) { return "Empate!" };

  if (eleccion === "piedra") {
    if (vs === "spock" || vs === "papel") {
      return "Has perdido";
    } else {
      return "Has ganado!";
    }
  }

  if (eleccion === "papel") {
    if (vs === "tijera" || vs === "lagarto") {
      return "Has perdido";
    } else {
      return "Has ganado!";
    }
  }

  if (eleccion === "tijera") {
    if (vs === "piedra" || vs === "spock") {
      return "Has perdido";
    } else {
      return "Has ganado!";
    }
  }

  if (eleccion === "lagarto") {
    if (vs === "piedra" || vs === "tijera") {
      return "Has perdido";
    } else {
      return "Has ganado!";
    }
  }

  if (eleccion === "spock") {
    if (vs === "lagarto" || vs === "papel") {
      return "Has perdido";
    } else {
      return "Has ganado!";
    }
  }
}

//JUGADA ALEATORIA - CPU PLAYER
function randomArrElement(arr) {
  let jugada = arr[Math.floor(Math.random() * arr.length)]
  return jugada;
}

//CAMBIO DE IMÁGENES
const imgSwitch = (arr) => {
  if (count === arr.length) { return count = 0; }
  if (count < arr.length) {
    contenedorImagenCPU.innerHTML = `
      <img src="${arr[count]}" class="" width="250" alt="">`;
    console.log(count);
    return count++;
  }
}

window.onload = () => {
  intervalo1 = setInterval(() => { imgSwitch(imagenes) }, 500);
  setTimeout(() => { clearInterval(intervalo1) }, 10000);
}

console.log(pptls(randomArrElement(fichas), randomArrElement(fichas)));