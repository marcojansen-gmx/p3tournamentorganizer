module.exports = (sequelize, DataTypes) => {
  const Eventorganizer = sequelize.define("Eventorganizer", {

  });
  Eventorganizer.associate = (db) => {
    Eventorganizer.belongsTo(db.User);
  };
  Eventorganizer.associate = (db) => {
    Eventorganizer.belongsTo(db.Event);
  };

  return Eventorganizer;
};
