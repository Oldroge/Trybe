// ./index.js

/* Apoio para a função `getGradeLetter`, lembraremos disso mais a frente */
/* suport to the function `getGradeLetter` */
const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

/* Minor function to remove the excessive if{} else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Collect grades */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade) });

/* Convert */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  school,
  disciplines: disciplines.map(getLetterGrades) });

/* WITH THIS FUNCTION LINTER WERE WARNING HIGH COMPLEXITY SO CREATED THE FUNCTIONS ABOVE */
// /* "Convert" */
// const percentageGradesIntoLetters = ({ name, disciplines }) => ({
//   name,
//   disciplines: disciplines.map(({ name, grade }) => {
//     let letterGrade;

//     if (grade >= 0.9) letterGrade = 'A';
//     else if (grade >= 0.8) letterGrade = 'B';
//     else if (grade >= 0.7) letterGrade = 'C';
//     else if (grade >= 0.6) letterGrade = 'D';
//     else if (grade >= 0.1) letterGrade = 'E';
//     else letterGrade = 'F';

//     return { name, grade, letterGrade };
//   }) });

/* "Define" */
const approvedStudents = ({ disciplines }) =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Update" */
const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

/* execution example */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

/*
  Dont forget that is necessary export at the functions to test it all
*/
module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};