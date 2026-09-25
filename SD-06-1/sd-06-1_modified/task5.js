

// Type your code below this line!

function FriendsList() {
  this.names = [];
}

const myList = new FriendsList();
let numberOfFriends = parseInt(process.argv[3]);

for (let i = 0; i < numberOfFriends; i++) {
  
  myList.names.push(process.argv[4 + i]);
}

console.log(myList.names);

// Type your code above this line!

