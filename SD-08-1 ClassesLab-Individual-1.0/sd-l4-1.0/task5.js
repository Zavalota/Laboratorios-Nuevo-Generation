export class Player {
    constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0;
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
    
  }


  /* PRUEBASssss

const player1 = new Player("Nubecita", 10);

console.log("--- Estado inicial ---");
player1.info();
console.log(`Experiencia actual: ${player1.exp} / 100`);
// Resultado esperado: Nivel 10, Experiencia 0 xd

// suamar experiencia sin llegar a 100
console.log("\n--- Ganando 40 de experiencia ---");
player1.sumaExperiencia(40);
player1.info();
console.log(`Experiencia actual: ${player1.exp} / 100`);
// Sigue en Nivel 10, Experiencia 40

// Superamos el limite de 100 puntos
console.log("\n--- Ganando 75 de experiencia ---");
player1.sumaExperiencia(75); 
// 40 + 75 = 115. Alcanza los 100, sobra 15.

player1.info();
console.log(`Experiencia actual: ${player1.exp} / 100`);
// Resultado esperado: Nivel 11, Experiencia 15 */