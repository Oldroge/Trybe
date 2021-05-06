const hits = (number, hitnumber) => number === hitnumber;

const sortNumber = (number, hitnumber) => {
  const randomNumber = Math.round(Math.random()* 5);
  return hitnumber(number, hitnumber) ? "Acertou!" : "Errou!"
};

console.log(sortNumber(3, hits));

