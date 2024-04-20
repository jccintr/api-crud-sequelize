const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');


dotenv.config();

//const db = new Sequelize(process.env.DB_CONNECTION); 

const db = new Sequelize('crud-sequelize', 'postgres', 'zodiac', {
    host: 'localhost',
    dialect: 'postgres'});

module.exports = db;