// Task 4: delUser(number)

import { getServerURL } from './task1.js';
export async function delUser(id) {
    const response = await fetch(`${getServerURL()}/users/${id}`, {
      method: "DELETE"
    });
//para probrar ay que borrar los guatos que guardan en archivo del server bd
//y reinciar para probar xd si no se quedan ahi
   
}
