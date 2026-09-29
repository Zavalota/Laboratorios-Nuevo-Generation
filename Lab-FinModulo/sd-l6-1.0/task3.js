// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';
export async function addUser(first_name, last_name, email) {//aqui usar await esa mas comodo con then seria el diabloxd
    const getResponse = await fetch(`${getServerURL()}/users`);
    const users = await getResponse.json();
    
    let maxId = 0; //otdavia no he encontrado ID, asi que parto de 0 como valor inicial
    for (const user of users) {
        if (Number(user.id) > maxId) {
            maxId = Number(user.id);
        }
    }

    const newUser = {
      id: maxId + 1, //no olvidar uamentar el id arriba solose comprobo si id es > uno ya existente 
      first_name: first_name,
      last_name: last_name,
      email: email
    };

    const postResponse = await fetch(`${getServerURL()}/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

}
