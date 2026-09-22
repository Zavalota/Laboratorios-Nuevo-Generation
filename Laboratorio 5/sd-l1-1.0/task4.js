// Refer to Task 4 in your Instructions to complete this task

for (let i = 0; i <= 105; i++) {
  let bandera = "";
  if (i % 3 === 0) {
    bandera += "Fizz";
  }
  if (i % 5 === 0) {
    bandera += "Buzz";
  }
  if (i % 7 === 0) {
    bandera += "Woof";
  }
  if (bandera === "") {
    console.log(i);
  } else {
    console.log(bandera);
  }
}