let whereIsMySon = document.querySelector('#pai');
let hiDad = document.createElement('div');
whereIsMySon.appendChild(hiDad);

let birth = document.querySelector('#elementoOndeVoceEsta');
let baby = document.createElement('div');
birth.appendChild(baby);

let firstSon = document.querySelector('#primeiroFilhoDoFilho');
let sonOfSon = document.createElement('div');
firstSon.appendChild(sonOfSon);

let first = document.getElementsByTagName('div')[2];
let second = first.nextSibling.nextSibling.nextSibling.nextSibling;

let eliminateEverybody = document.getElementById('pai');
let secondEliminate = document.getElementById('elementoOndeVoceEsta');
let byeFirstChild = document.getElementById('primeiroFilho');
let byeSecondAndLast = document.getElementById('segundoEUltimoFilhoDoFilho');
let byeThirdSon = document.getElementById('terceiroFilho');
let byeFourthSon = document.getElementById('quartoEUltimoFilho');

let goodBye = eliminateEverybody.removeChild(byeFirstChild);
let goodByeSecond = secondEliminate.removeChild(byeSecondAndLast);
let goodByeThird = eliminateEverybody.removeChild(byeThirdSon);
let goodByeFourth = eliminateEverybody.removeChild(byeFourthSon);
console.log(eliminateEverybody)