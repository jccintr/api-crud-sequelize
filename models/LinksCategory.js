const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');


const LinksCategory = db.define('links_category', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });

  LinksCategory.belongsTo(User);
  User.hasMany(LinksCategory);

 

  module.exports = LinksCategory;