const express = require('express');
const dotenv = require('dotenv');
const db = require('./database/db');
const bodyParser = require('body-parser');
// routes
const AuthRoutes = require('./routes/AuthRoutes');
const LinksCategoryRoutes = require('./routes/LinksCategoryRoutes');
const TasksCategoryRoutes = require('./routes/TasksCategoryRoutes');
const TasksRoutes = require('./routes/TasksRoutes');
// models
const User = require('./models/User');
const LinksCategory = require('./models/LinksCategory');
const Links = require('./models/Links');
const TasksCategory = require('./models/TasksCategory');
const Task = require('./models/Task');


dotenv.config({force:true});


try {
    db.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');
  } catch (error) {
    console.error('Falha ao conectar ao banco de dados.', error);
  }

  db.sync();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(AuthRoutes);
app.use(LinksCategoryRoutes);
app.use(TasksCategoryRoutes);
app.use(TasksRoutes);

app.get('/', function(req, res) {
    res.send('JC CRUD API SEQUELIZE POSTGRES');
  });

 


app.listen(process.env.PORT,()=>{
   console.log('SERVIDOR EXECUTANDO NA PORTA ' + process.env.PORT);
});