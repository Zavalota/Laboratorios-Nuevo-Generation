export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }

    info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
  
    
  }

  /* Prueebas  e navegador por mi kitar el export de la clase xd
  const player1 = new Player("Tara", 6);
  const player2 = new Player("Arthur", 12);
  console.log("Nombre del jugador 1:", player1.name);   // Imprime: Tara
  console.log("Nivel del jugador 2:", player2.level);   // Imprime: 12

  // Probar el metodo info()
  player1.info(); // Imprime: Tara has reached Level 6! creoxd
  player2.info()*/