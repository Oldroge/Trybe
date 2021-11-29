module.exports = (sequelize, DataTypes) => {
  Test.define({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};