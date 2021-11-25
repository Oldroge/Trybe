// ./tests/approvedStudents.test.js

const { expect } = require('chai');

const { approvedStudents } = require('../index2');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('testing the approvedStudents function', function () {
  const APPROVAL_GRADE = { approvalGrade: 0.7 };

  describe('when all the grades are bigger than the pass criteria', function () {
    it('return "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(true);
    });
  });

  describe('when all grades are minor than pass criteria', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });

  describe('when part of the grades are minor than pass criteria', function () {
    it('retorna "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents(disciplines, APPROVAL_GRADE);

      expect(result).to.be.equal(false);
    });
  });
});

// Using this concept help to write cleaner tests;
