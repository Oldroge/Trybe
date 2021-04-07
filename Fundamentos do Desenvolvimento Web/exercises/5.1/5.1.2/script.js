// Background-color for Title
let head =  document.getElementById('header-container');
head.style.backgroundColor = ('MediumSeaGreen');

// Background color for Div
let emergency = document.getElementsByClassName('emergency-tasks');
let emergencyIndex;
for (emergencyIndex = 0; emergencyIndex < emergency.length; emergencyIndex += 1) {
  emergency[0].style.backgroundColor = 'lightSalmon';
}