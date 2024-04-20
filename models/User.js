const { DataTypes } = require('sequelize');
const db = require('../database/db');

const User = db.define('users', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      }
  });

  

  // (async () => {
  //   await User.sync({ force: true });
  //   // Code here
  // })();

  module.exports = User;