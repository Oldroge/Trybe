function whereAmI() {
  let amIHere = document.querySelector('#elementoOndeVoceEsta').parentElement.nodeName;
  document.querySelector('#elementoOndeVoceEsta').innerHTML =  amIHere;
}
