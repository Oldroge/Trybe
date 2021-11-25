/* This scenario suposing that will add new schools at the app, and others schools have other grade method so would need to change the code to works with the new school methods */

// ./index.js
// ...

/* "Convert" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades),
  school});

/* "define" */
const approvedStudents = ({ school, disciplines }) =>
  disciplines.every(({ grade }) =>
    (school === 'Standard' ? grade >= 0.7 : grade >= 0.8));

/* "update" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

// ...
/* Bellow has the execution example with some additions */
const students = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(students);

/* Okay the function will works, but stoping to think, anytime that add a new school in the app it is impraticable change the code, right? So what if write a code that works with any school that we insert in the app? Look at index2.js file */