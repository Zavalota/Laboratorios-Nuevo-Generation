class Producto{
    constructor (nombre, precio, disponible){
        this.nombre= nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    mostrarInfo(){
        let estado = this.disponible ? "Sí" : "No";
        return `${this.nombre} cuesta $${this.precio}. ¿Esta disponible? ${estado}`;
    }

    cambiarDispo(){
        this.disponible = !this.disponible;    
    }
}

class Maquillaje extends Producto{
    constructor (nombre, precio, disponible, tono){
        super(nombre,precio,disponible);
        this.tono = tono;
    }

    mostrarMaquillaje(){
        return `El maquillaje tiene un tono: ${this.tono}. ${this.mostrarInfo()}`;
    }
}

const producto1 = new Producto("Perfume Floral", 1200, true);
const producto2 = new Producto("Espejo de bolsillo", 150, false);
const producto3 = new Producto("Crema hidratante", 340, true);
const producto4 = new Producto("Set de brochas", 450, true);

const maquillaje1 = new Maquillaje("Base líquida", 280, true, "Beige Claro");
const maquillaje2 = new Maquillaje("Lápiz labial", 180, true, "Rojo Cereza");


console.log(producto1.mostrarInfo());
console.log(maquillaje1.mostrarMaquillaje());

maquillaje2.cambiarDispo();
console.log(maquillaje2.mostrarInfo());