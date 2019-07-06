module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING
    },
    fill: {
      type: DataTypes.BOOLEAN
    },
    majorPlayer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Player
}