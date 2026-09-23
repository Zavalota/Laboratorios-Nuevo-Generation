// Este es el que creo
let productos = ["labial", "rímel", "base"];

let producto = {
  nombre: "Labial",
  precio: 150,
  disponible: true
};

function mostrarProducto(nombre, precio) {
  return nombre + " cuesta $" + precio;
}

let primerProducto = productos[0];
let precioProducto = producto.precio;

let mensaje = mostrarProducto(primerProducto, precioProducto);
console.log(mensaje);

//este tambienxd

let productos2 = [
  { nombre: "Labial", precio: 150, disponible: true },
  { nombre: "Rímel", precio: 180, disponible: false },
  { nombre: "Base", precio: 250, disponible: true }
];

function mostrarProducto2(producto) {
  return producto.nombre + " cuesta $" + producto.precio;
}

let primerProducto2 = productos2[0];

console.log(primerProducto2.nombre); //pa verificar
console.log(primerProducto2.precio); 

console.log(mostrarProducto2(productos2[0]));
