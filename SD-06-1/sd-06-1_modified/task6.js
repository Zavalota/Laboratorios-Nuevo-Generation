

// Type your code below this line!
function ListaCompras() {
  this.items = [];
}

const lista1 = new ListaCompras();
let elementos = parseInt(prompt("¿Cuántos artículos diferentes deseas agregar a la lista?"));

for (let i = 0; i < elementos; i++) {
  let itemNombre = prompt("Nombre del artículo " + (i + 1) + ":");
  let itemCantidad = prompt("Cantidad de " + itemNombre + " (ej. 2 botellas):");
  
  // Guardamos un objeto con nombre y cantidad dentro del array
  lista1.items.push({ nombre: itemNombre, cantidad: itemCantidad });
}

console.log(lista1.items);


// Type your code above this line!

