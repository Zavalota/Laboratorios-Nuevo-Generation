export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp(){
    this.level++;
  }

}


/* PRUEBASSSSSS 
const player1 = new Player("Leon", 4);

console.log("--- Estado inicial ---");
console.log(player1.info());

// Resultado esperado XD  : Leon has reached Level 4!

// samos el metodo para subir de nivel
player1.levelUp();

// volvemos a comprobar la informacin para ver si cambio
console.log("--- Despues del primer levelUp ---");
console.log(player1.info());
// Resultado esperado xdd: Leon has reached Level 5!

//Probamos subir varios niveles de golpe
player1.levelUp();
player1.levelUp();
player1.levelUp();

console.log("--- Despues de subir 3 niveles aumentadsos ---");
console.log(player1.info());*/
