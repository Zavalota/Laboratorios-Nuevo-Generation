
function Usuario(matricula ,nombre, direccion) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.direccion = direccion;
}

Usuario.prototype.saludar = function () {
    console.log("Hola, soy " + this.nombre);
}

const usuario1 = new Usuario(123, "Israel", "Oaxaca");

usuario1.saludar();

class Product{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo(){
        return this.nombre + " cuesta $"+this.precio;
    }
}

const producto = new Product("Laptop", 15000);
const producto2 = new Product("Monitor", 5000);
console.log(producto.nombre);
console.log(producto.mostrarInfo());
console.log(producto2.mostrarInfo());


class Maquillaje extends Product{
    constructor(nombre, precio, tono){
        super(nombre, precio);
        this.tono = tono;
    }
}