const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./User');
const TasksCategory = require('./TasksCategory');


const Tasks = db.define('tasks', {
  
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDone: {
        type: DataTypes.BOOLEAN
        
      },
    
  });

  Tasks.belongsTo(User);
  Tasks.belongsTo(TasksCategory);

 

  module.exports = Tasks;