const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {


     signin: async (req,res) => {

        const {email,password} = req.body;

        if(!email || !password || email == '' || password == ''){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const user = await User.findOne({ where: { email } });

       if(!user){
        return res.status(400).json({error:'Nome de usuário e ou senha inválidos.'});
       }

      if(!bcryptjs.compareSync(password,user.password)){
           return res.status(400).json({error:'Nome de usuário e ou senha inválidos.'});
        }

        const token = jsonwebtoken.sign({userId: user._id},process.env.JWT_SECRET);
        return res.status(200).json({token: token});
     },

     signup: async (req,res) => {
   
        const {name,email,password} = req.body;
        if(!name || !email || !password || name=='' || email == '' || password == ''){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const validateEmailRegex = /^\S+@\S+\.\S+$/;
        if(!validateEmailRegex.test(email)){
            return res.status(400).json({error: 'Email inválido.'});
        }

        const user = await User.findOne({ where: { email } });
        
        if (user){
            return res.status(400).json({error: 'Email já cadastrado.'});
        }

        const salt = bcryptjs.genSaltSync(10);
        const password_hash = bcryptjs.hashSync(password,salt);
        const newUser = await User.create({name,email,password:password_hash});
         return res.status(201).json(newUser);
       

    }

}

