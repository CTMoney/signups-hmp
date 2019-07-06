module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING
    },
    major: {
      type: DataTypes.BOOLEAN
    },
    region: {
      type: DataTypes.STRING
    }
  })
  return Country
}