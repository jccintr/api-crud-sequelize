const Task = require('../models/Task');

module.exports = {

    index: async (req,res,next) => {
        
        const {userId} = req.body;
        
        const tasks = await Task.findAll(

            {
                where: {userId:userId},
            }

        );

       
        return res.status(200).json(tasks);

    },
    store: async (req,res,next) => {

        const {userId,descricao,tasksCategoryId} = req.body;

        if(!descricao || descricao =='' || !tasksCategoryId || tasksCategoryId == '' ){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const newTask = await Task.create({ descricao, userId, tasksCategoryId,userId });

        return res.status(201).json(newTask);

    },

    show: async (req,res,next) => {
        const {userId} = req.body;
        const taskId = req.params.id;

        const task = await Task.findByPk(taskId);
        
        if(!task) {
            return res.status(404).json({error: 'Tasks não encontrada.'});
        }
        
        if(task.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        return res.status(200).json(task);

    },

    update: async (req,res,next) => {
        const {userId,descricao,tasksCategoryId,isDone} = req.body;
        const taskId = req.params.id;

        if(!taskId || !descricao || descricao =='' || !tasksCategoryId || tasksCategoryId==''){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const task = await Task.findByPk(taskId);
        
        if(!task) {
            return res.status(404).json({error: 'Task não encontrada.'});
        }
        
        if(task.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        await task.update({ descricao: descricao,tasksCategoryId: tasksCategoryId,isDone: isDone });

        return res.status(200).json(task);

    },
    destroy: async (req,res,next) => {

        const {userId} = req.body;
        const taskId = req.params.id;

        const task = await Task.findByPk(taskId);
        
        if(!task) {
            return res.status(404).json({error: 'Task não encontrada.'});
        }
        
        if(task.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        await task.destroy();

        return res.status(200).json({message: 'Task excluída com sucesso.'});


    }
    
}