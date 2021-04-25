module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define("Attendance", {
    going: {
      type: DataTypes.BOOLEAN,
    },
    maybe: {
      type: DataTypes.BOOLEAN,
    },
    declined: {
      type: DataTypes.BOOLEAN,
    },
  });
  Attendance.associate = (db) => {
    Attendance.belongsTo(db.User);
  };
  Attendance.associate = (db) => {
    Attendance.belongsTo(db.Event);
  };

  return Attendance;
};
