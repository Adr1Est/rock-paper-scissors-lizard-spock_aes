// Piedra, papel, tijera, lagarto, spock
/*
spock, papel    > piedra  > tijera, lagarto
tijera, lagarto > papel   > piedra, spock
spock, piedra   > tijera  > papel, lagarto
piedra, tijera  > lagarto > spock, papel
lagarto, papel  > spock   > tijera, piedra
*/

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

function randomArrElement(arr) {
  let jugada = arr[Math.floor(Math.random() * arr.length)]
  return jugada;
}

console.log(pptls(randomArrElement(fichas), randomArrElement(fichas)));