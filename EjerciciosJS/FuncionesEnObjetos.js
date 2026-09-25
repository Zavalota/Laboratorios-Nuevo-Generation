const contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullName": function () {
        return "Ash Springs";
    }
}

let ashSpringFullName = contact.fullName;
console.log(ashSpringFullName);
console.log(ashSpringFullName());

agregar(ashSpringFullName);

function agregar(funcionUno){
    console.log(funcionUno());
}


//Otro tema math
function funcionamientoMath(){
    const numeroRandom = Math.random();
    console.log(Math.PI);
    console.log(numeroRandom);
}
funcionamientoMath();

//Otro tema funciones de string
function funcionString(){
    let nombre = "anita";
    console.log(nombre.toUpperCase());
    console.log(nombre.charAt(1));
    console.log(nombre.length);
    console.log(nombre.substring(0,3));

    let numero=232332;
    console.log(typeof numero);
    console.log(numero.toString());

}
funcionString();

//uso de this.
//acceder a las propiedades de los obejtos
let contacto = {
    "name" : "Juana",
    "username" : "JuanaGamer99",
    "fullName" : function () {
        return this.name + " " + this.username;
    }
}

console.log(contacto.fullName());

//ejerccio this y new
//permite crear los obejtos de manera masrapida 
function Producto(nombre, precio) {
    this.nombre =nombre;
    this.precio = precio;
    this.mostrarInfo = function() {
        return this.nombre + " cuesta $" + this.precio;
    }
}

const arrayPrueba = [new Producto("labial", 123123123),new Producto("Rimel", 70000000),new Producto("Base", 340)] ;

const producto1 = new Producto("labial", 123123123);
const producto2 = new Producto("Rimel", 70000000);
const producto3 = new Producto("Base", 340);

console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto2.mostrarInfo());

for(let i=0;  i<arrayPrueba.length ; i++){
    console.log(arrayPrueba[i].mostrarInfo());
}