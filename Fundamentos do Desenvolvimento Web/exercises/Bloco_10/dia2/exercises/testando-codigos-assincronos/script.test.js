const script = require('./script');

test('Testando SumNumbers, soma 5 mais 10', done => {
    script.SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})
