// fibonacci.test.ts
const { fibonacci } = require('./fibonacci');

describe('fibonacci function', () => {
  // Testando valores conhecidos de Fibonacci de forma concorrente
  test.concurrent.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
  ])('concurrently calculates fibonacci(%d) to be %d', (n, expected) => {
    expect(fibonacci(n)).toBe(expected);
  });

  // Testando que a função retorna um número (sem se preocupar com o valor exato) de forma concorrente
  test.concurrent.each([10, 15, 20])('concurrently checks fibonacci(%d) is a number', (n) => {
    expect(typeof fibonacci(n)).toBe('number');
  });

   // Testando que os valores de Fibonacci são positivos ou zero
   test.concurrent.each([8, 9, 10, 11, 12])('concurrently checks fibonacci(%d) is non-negative', (n) => {
    expect(fibonacci(n)).toBeGreaterThanOrEqual(0);
  });
});