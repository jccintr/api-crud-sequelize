const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');
const TasksCategory = require('./TasksCategory');


const Task = db.define('tasks', {
  
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        
      },
    
  });

  Task.belongsTo(User);
  User.hasMany(Task);


  Task.belongsTo(TasksCategory);
  TasksCategory.hasMany(Task);
 

  module.exports = Task;