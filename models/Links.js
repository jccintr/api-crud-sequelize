const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');
const LinksCategory = require('./LinksCategory');


const Links = db.define('links', {
  
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });

  Links.belongsTo(User);
  User.hasMany(Links);

  Links.belongsTo(LinksCategory);
  LinksCategory.hasMany(Links);
 

  module.exports = LinksCategory;