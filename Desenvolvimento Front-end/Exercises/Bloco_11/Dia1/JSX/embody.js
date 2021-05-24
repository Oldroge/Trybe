// The JSX alows inject algorthm inside the HTML structure.
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

//Deepen a bit more calling a function in our const element

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

//Now, we going to embody our const element in the function helloWorld

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}


const container = <div>{element}</div>;

// When we talk about class for className replacement in JSX, we can also use expressions Javascript to dare value to this atribute.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

// Fixation exercise: Create an element JSX that receive value 'Hello, JSX' from a const called textJSX, and embody in a h1 tag.

const textJSX = 'Hello, JSX';
const element = <h1>{textJSX}</h1>;

// Other way
function helloSome(some) {
  return `${some}`;
}
const helloSomeone = `Hello, ${helloSome('JSX')}`
