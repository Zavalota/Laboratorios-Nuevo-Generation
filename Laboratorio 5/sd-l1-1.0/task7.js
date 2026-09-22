// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
  "Fizz", //3
  "Buzz", //5
  "Woof", //7
  "Bark", //11
  "Awoo", //13
  "Batman", //17
  "Pablo", //19
  "Morsa", //23
];

let numeroDeLineas = Number(prompt("Ingresa un numero de lineas a imprimir: "));
let resultados = [];
for (let i = 0; i <= numeroDeLineas; i++) {
  let bandera = "";
  if (i % 3 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 5 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 7 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 13 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 17 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 19 === 0) {
    bandera += buzzWords[i];
  }
  if (i % 23 === 0) {
    bandera += buzzWords[i];
  }
  if (bandera === "") {
    resultados.push(i);
  } else {
    resultados.push(bandera);
  }
}
console.log(resultados);