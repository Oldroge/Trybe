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

// Second Background color for second div
let noEmergency = document.getElementsByClassName('no-emergency-tasks');
let noEmergencyIndex;
for (noEmergencyIndex = 0; noEmergencyIndex < noEmergency.length; noEmergencyIndex += 1) {
  noEmergency[0].style.backgroundColor = 'yellow';
}

// Second Background color for second subtitle h3
let subtitleBlack = document.querySelectorAll('h3#subtitleBlack');
let h3Black;
for (h3Black = 0; h3Black < subtitleBlack.length; h3Black += 1) {
  subtitleBlack[h3Black].style.backgroundColor = 'black';
}

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = ('darkCyan')
