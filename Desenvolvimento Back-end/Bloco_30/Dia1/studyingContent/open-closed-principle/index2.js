/*
As seen before, the open/closed principle concept what it brings is:
  "You should be abble to extends a behavior by function without modify your existent behaviors"

  This means that, case need to add a new behavior in the code and this isn't possible without change the code, it is a problem.
  When code it works and it is in production in a biggest application, the right way is to avoid change what already exists and works;  
*/

// ./index.js

/* Support to `setApproved` function */
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};

// ...

/* "Determine" */
const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);

// ...

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}