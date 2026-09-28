export function costCalculator(amount) {
  const num = Number(amount); // cobertir a number antes de sumar
  return num + 3 + (num * 0.01);
}