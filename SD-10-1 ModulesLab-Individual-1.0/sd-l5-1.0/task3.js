export function ageCalculator(year, month, day) { // tiene que ser en inglish si no no reonoce
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  // Si el mes actual es menor al mes de nacimiento, 
  // o si estamos en el mismo mes pero el día actual es menor al día de nacimiento,
  // restamos 1 a la edad porque aún no ha cumplido años este año. como empeiza en 0 los meses ay querestar
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}