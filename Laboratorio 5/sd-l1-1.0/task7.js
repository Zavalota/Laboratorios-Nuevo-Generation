// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
  "Fizz", //3  -> indice 0
  "Buzz", //5  -> indice 1
  "Woof", //7  -> indice 2
  "Bark", //11 -> indice 3
  "Awoo", //13 -> indice 4
  "Batman", //17 -> indice 5
  "Pablo", //19 -> indice 6
  "Morsa", //23 -> indice 7
];

let numeroDeLineas = Number(prompt("Ingresa un numero de lineas a imprimir: "));
let resultados = [];
for (let i = 0; i <= numeroDeLineas; i++) {
  let bandera = "";
  if (i % 3 === 0) {
    bandera += buzzWords[0];
  }
  if (i % 5 === 0) {
    bandera += buzzWords[1];
  }
  if (i % 7 === 0) {
    bandera += buzzWords[2];
  }
  if (i % 11 === 0) {
    bandera += buzzWords[3];
  }
  if (i % 13 === 0) {
    bandera += buzzWords[4];
  }
  if (i % 17 === 0) {
    bandera += buzzWords[5];
  }
  if (i % 19 === 0) {
    bandera += buzzWords[6];
  }
  if (i % 23 === 0) {
    bandera += buzzWords[7];
  }
  if (bandera === "") {
    resultados.push(i);
  } else {
    resultados.push(bandera);
  }
}
console.log(resultados);