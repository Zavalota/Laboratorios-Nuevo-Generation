export class Player {
    constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0;
    this.inventory = {};
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp(){
    this.level++;
  }
  
  sumaExperiencia(points){
    this.exp += points;
    if(this.exp >= 100){
      this.levelUp();
      this.exp -= 100;
    }
  }

  agregarItem(nombreItem, cantidad){
    if (this.inventory[nombreItem]) {
      this.inventory[nombreItem] += cantidad;
    }else{
      this.inventory[nombreItem] = cantidad;
    }
  }

  eliminarItem(nombreItem, cantidad){
     if (this.inventory[nombreItem]) {
      this.inventory[nombreItem] -= cantidad;
    }if (this.inventory[nombreItem] <=0) {
      delete this.inventory[nombreItem];
    }
  }
  
    
  } 


 /* --- PRUEBAS DEL INVENTARIO ---

const myPlayer = new Player("LinkinPark", 1);

console.log("--- Inventario Inicial ---");
console.log(myPlayer.inventory); 
// Resultado esperado: {} (Objeto vacio) xdd

//Agregamos items nuevos
console.log("\n--- Agregando items ---");
myPlayer.agregarItem("Pocion", 3);
myPlayer.agregarItem("Espada FILO V", 1);
console.log(myPlayer.inventory); 
// Resultado esperado: { Pocion: 3, Espada FILO V: 1 }

//Agregamos un Item que ya existe (deberia sumar creoxd)
console.log("\n--- Encontro mas pociones ---");
myPlayer.agregarItem("Pocion", 2);
console.log(myPlayer.inventory); 
// Resultado esperado: { Pocion: 5, Espada: 1 }

//  Usamos/eliminamos una cantidad parcial exploto un rcreper
console.log("\n--- Usa 2 pociones ---");
myPlayer.eliminarItem("Pocion ", 2);
console.log(myPlayer.inventory); 
// Resultado esperado: { Pocion: 3, Espada: 1 }

// liminamos todo de un item (para probar el delete)
console.log("\n--- Se rompio la espada ---");
myPlayer.eliminarItem("Espada FILO V", 1);
console.log(myPlayer.inventory); 
// Resultado esperado: { Pocion: 3 } (La espada murio completamente)*/