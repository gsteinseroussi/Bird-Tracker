module.exports = (sequelize, DataTypes) => {
  const Bird = sequelize.define("Bird", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    activity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Bird;
};
