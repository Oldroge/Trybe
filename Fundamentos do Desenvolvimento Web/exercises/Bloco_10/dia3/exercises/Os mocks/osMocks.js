const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

module.exports = {
  retornaNumeroAleatorio,
  divisivelPorDois
}

console.log(divisivelPorDois());