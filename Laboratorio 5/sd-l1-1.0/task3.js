// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let bandera = "";
  if (i % 3 === 0) {
    bandera += "Fizz";
  }
  if (i % 5 === 0) {
    bandera += "Buzz";
  }
  if (bandera === "") {
    console.log(i);
  } else {
    console.log(bandera);
  }

}