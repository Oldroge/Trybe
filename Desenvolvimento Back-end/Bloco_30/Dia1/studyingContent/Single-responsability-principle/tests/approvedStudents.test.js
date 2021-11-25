// ./tests/unit/approvedStudents.test.js

const { expect } = require('chai');

const { approvedStudents } = require('../index2');

const disciplinesDict = {
  mathematics: 'matemática',
  history: 'história',
};

describe('Testing the "approvedStudents" function"', function () {
  describe('when all grades are bigger tha 0.7', function () {
    it('return "true"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(true);
    });
  });

  describe('when all grades are less than 0.7', function () {
    it('return "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });

  describe('when part of the grades are less than 0.7', function () {
    it('return "false"', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const result = approvedStudents({ disciplines });

      expect(result).to.be.equal(false);
    });
  });
});