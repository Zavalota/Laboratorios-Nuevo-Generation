const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


//tareas
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -15 / 3 to equal -5', () => {
  expect(calculator.divide(-15, 3)).toBe(-5);
});
test('multiply 3 * 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiply -5 * 2 to equal -10', () => {
  expect(calculator.multiply(-5, 2)).toBe(-10);
});

test('divide by 0 returns error message', () => {
  expect(calculator.divide(10, 0)).toBe("Cannot divide by 0");
});