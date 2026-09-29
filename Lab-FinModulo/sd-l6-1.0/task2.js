// Task 2: listUsers()
import { getServerURL } from './task1.js';
export function listUsers() {
    return fetch(`${getServerURL()}/users`) //usar then es mas comodo
        .then(response => response.json())
        .then(users => {
            console.log(users);
            return users;
        });
}

