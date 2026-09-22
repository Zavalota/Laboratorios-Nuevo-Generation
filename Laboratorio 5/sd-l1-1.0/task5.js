// Refer to Task 5 in your Instructions to complete this task

// Refer to Task 4 in your Instructions to complete this task

let numeroDeLineas = Number(prompt("Ingresa un numero de lineas a imprimir: "));
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
    console.log(i);
  } else {
    console.log(bandera);
  }
}