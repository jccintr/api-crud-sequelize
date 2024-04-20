const express = require('express');
const dotenv = require('dotenv');
const db = require('./database/db');
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/AuthRoutes');



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

app.get('/', function(req, res) {
    res.send('JC CRUD API SEQUELIZE POSTGRES');
  });

 


app.listen(process.env.PORT,()=>{
   console.log('SERVIDOR EXECUTANDO NA PORTA ' + process.env.PORT);
});