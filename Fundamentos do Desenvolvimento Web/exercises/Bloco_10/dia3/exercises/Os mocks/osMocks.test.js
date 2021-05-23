const script = require('./osMocks');

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(script.divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});
