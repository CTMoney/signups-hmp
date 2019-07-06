module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    player_name: {
      type: DataTypes.STRING
    },
    player_fill: {
      type: DataTypes.BOOLEAN
    },
    countryOne: {
      type: DataTypes.STRING
    },
    countryTwo: {
      type: DataTypes.STRING
    },
    countryThree: {
      type: DataTypes.STRING
    },
    countryFour: {
      type: DataTypes.STRING
    },
    countryFive: {
      type: DataTypes.STRING
    },
    countrySix: {
      type: DataTypes.STRING
    },
    countrySeven: {
      type: DataTypes.STRING
    },
    countryEight: {
      type: DataTypes.STRING
    },
    countryNine: {
      type: DataTypes.STRING
    },
    countryTen: {
      type: DataTypes.STRING
    }
  })
  return Entry
}