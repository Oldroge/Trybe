const script2 = require('./script2')

//Falso positivo
describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return script2.getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Falso positivo
describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    return script2.getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

// Verdadeiro
test('Testando com async/await', async () => {
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

// Verdadeiro
describe('Quando o tipo de animal não existe', () => {
  test('Retorna um erro', async () => {
    expect.assertions(1);
    await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
  });
});
