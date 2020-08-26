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
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // time: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   validate: {
    //     isTime(value) {
    //       if (
    //         value !== "Morning" ||
    //         value !== "Dawn" ||
    //         value !== "Dusk" ||
    //         value !== "Afternoon"
    //       ) {
    //         throw new Error("Time must be one of the options provided");
    //       }
    //     }
    //   }
    // }
  });
  return Bird;
};
