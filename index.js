const express = require('express');
const dotenv = require('dotenv');
const db = require('./database/db');
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/AuthRoutes');
const LinksCategoryRoutes = require('./routes/LinksCategoryRoutes');
const User = require('./models/User');
const LinksCategory = require('./models/LinksCategory');
const Links = require('./models/Links');
const TasksCategory = require('./models/TasksCategory');
const Tasks = require('./models/Tasks');


dotenv.config();


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

app.get('/', function(req, res) {
    res.send('JC CRUD API SEQUELIZE POSTGRES');
  });

 


app.listen(process.env.PORT,()=>{
   console.log('SERVIDOR EXECUTANDO NA PORTA ' + process.env.PORT);
});