module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    street: DataTypes.STRING,
    district: DataTypes.STRING
  })
  return Address;
};