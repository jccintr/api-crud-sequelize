const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');



const TasksCategory = db.define('tasks_category', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });

  TasksCategory.belongsTo(User);
  User.hasMany(TasksCategory);

  module.exports = TasksCategory;