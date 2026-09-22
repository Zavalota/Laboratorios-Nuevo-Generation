// Refer to Task 6 in your Instructions to complete this task

let numeroDeLineas = Number(prompt("Ingresa un numero de lineas a imprimir: "));
let resultados = [];
for (let i = 0; i <= numeroDeLineas; i++) {
  let bandera = "";
  if (i % 3 === 0) {
    bandera += "Fizz";
  }
  if (i % 5 === 0) {
    bandera += "Buzz";
  }
  if (i % 7 === 0) {
    bandera += "Woof";
  }
  if (bandera === "") {
    resultados.push(i);
  } else {
    resultados.push(bandera);
  }
}
console.log(resultados);