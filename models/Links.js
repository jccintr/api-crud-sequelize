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
  Links.belongsTo(LinksCategory);

 

  module.exports = LinksCategory;