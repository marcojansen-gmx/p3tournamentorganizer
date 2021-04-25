module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    eventlocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availabletickets: {
      type: DataTypes.INTEGER
    },
    armylistpoints: {
      type: DataTypes.INTEGER
    },
    ticketprice: {
      type: DataTypes.INTEGER
    },
    linktoplayerspack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  });
  Event.associate = (db) => {
    Event.belongsTo(db.User);
  };
  Event.associate = (db) => {
    Event.hasMany(db.Eventorganizer);
  };
  Event.associate = (db) => {
    Event.hasMany(db.Attendance);
  };
   
  return Event;
};
