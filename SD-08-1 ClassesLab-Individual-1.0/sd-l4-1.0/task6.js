export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.exp = 0;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }

  sumaExperiencia(points) {
    this.exp += points;
    if (this.exp >= 100) {
      this.levelUp();
      this.exp -= 100;
    }
  }
}

const partyMembers = []; 
function anadirPlayer(playerObjecto) {
  partyMembers.push(playerObjecto);
}

function elimnarPlayer(nombrePlayer) {
  const index = partyMembers.findIndex(function (player) {
    return player.name === nombrePlayer;
  });
  if (index !== -1) {
    partyMembers.splice(index, 1);
  }
}


/* --- PRUEBAS DEL GRUPO (PARTY) ---

const player1 = new Player("Gandalf", 10);
const player2 = new Player("Morgana", 15);
const player3 = new Player("Merlin", 20);

// verificamos el grupo vacio
console.log("Grupo inicial:", partyMembers); 
// Resultado esperado: [] xd aveces nosalia

//sñadimos los jugadores al grupo
anadirPlayer(player1);
anadirPlayer(player2);
anadirPlayer(player3);

console.log("\n--- Grupo despues de añadir miembros ---");
console.log(partyMembers); 
// Resultado esperado: Array con 3 objetos [ {name: 'Gandalf'...}, {name: 'Morgana'...}, {name: 'Merlin'...} ]

// verificar si siguie jalando lo de exp de subir de nivel
console.log("\n--- Morgana gana experiencia ---");
player2.sumaExperiencia(150); //suber de nivel y le quedan 50
player2.info(); 
// Resultado esperado: Morgana has reached Level 16! xdd

// 5. Eliminar a un jugador del grupo
console.log("\n--- Eliminando a Merlin ---");
elimnarPlayer("Merlin");
console.log(partyMembers); 
// Resultado esperado: Array con 2 objetos (Morgana y Gnadalf)

//intentar eliminar a alguien que no existe (prueba del if index !== -1)
console.log("\n--- Intentando eliminar a alguien que no está ---");
elimnarPlayer("torin");
console.log(partyMembers); */
