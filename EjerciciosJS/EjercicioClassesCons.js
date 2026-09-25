class Productoo{
    constructor (nombre, precio, disponible){
        this.nombre= nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    mostrarInfo(){
        return this.nombre + " cuesta $"+this.precio + " esta dispooble? "+ this.disponible;
    }
}
    const producto = new Productoo("Laptop", 15000,true);
    const producto2 = new Productoo("Monitor", 5000, false);
    console.log(producto.nombre);
    console.log(producto.mostrarInfo());
    console.log(producto2.mostrarInfo());