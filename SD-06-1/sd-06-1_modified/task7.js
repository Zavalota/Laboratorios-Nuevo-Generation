

// Type your code below this line!


function Coche(marca, modelo, anio, color, puertas, kilometraje, motor) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.color = color;
  this.puertas = puertas;
  this.kilometraje = kilometraje;
  this.motor = motor;
}

let marca = prompt("Ingrese la marca del coche:");
let modelo = prompt("Ingrese el modelo:");
let anio = prompt("Ingrese el año:");
let color = prompt("Ingrese el color:");
let puertas = prompt("Ingrese el numero de puertas:");
let kilometraje = prompt("Ingrese el kilometraje:");
let motor = prompt("Ingrese el tipo de motor (ej. gas o electrico):");

const miCoche = new Coche(marca, modelo, anio, color, puertas, kilometraje, motor);

console.log(miCoche);



// Type your code above this line!

