// Background-color for Title
let head =  document.getElementById('header-container');
head.style.backgroundColor = ('MediumSeaGreen');

// Background color for Div
let emergency = document.getElementsByClassName('emergency-tasks');
let emergencyIndex;
for (emergencyIndex = 0; emergencyIndex < emergency.length; emergencyIndex += 1) {
  emergency[0].style.backgroundColor = 'lightSalmon';
}

// Background color for subtitle h3
let subtitlePurple = document.querySelectorAll('h3#subtitlePurple');
let h3Purple;
for (h3Purple = 0; h3Purple < subtitlePurple.length; h3Purple += 1) {
  subtitlePurple[h3Purple].style.backgroundColor = 'mediumorchid';
}