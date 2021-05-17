let allStates = document.querySelector('#input-state')

function allBrazilianStates() {
  let statesArray = ["", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
  for (index = 0; index < statesArray.length; index += 1) {
    const createOptionTag = document.createElement('option');
    allStates.appendChild(createOptionTag).innerText = statesArray[index];
    allStates.appendChild(createOptionTag).value = statesArray[index];
  }
}
allBrazilianStates();