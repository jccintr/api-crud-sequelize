const TasksCategory = require('../models/TasksCategory');

module.exports = {

    index: async (req,res,next) => {
        
        const {userId} = req.body;
        
        const categories = await TasksCategory.findAll(

            {
                where: {userId:userId},
            }

        );

       
        return res.status(200).json(categories);

    },
    store: async (req,res,next) => {

        const {userId,name} = req.body;

        if(!name || name =='' ){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const newTasksCategory = await TasksCategory.create({ name: name, userId: userId });

        return res.status(200).json(newTasksCategory);

    },

    show: async (req,res,next) => {
        const {userId} = req.body;
        const categoryId = req.params.id;

        const category = await TasksCategory.findByPk(categoryId);
        
        if(!category) {
            return res.status(404).json({error: 'Categoria não encontrada.'});
        }
        
        if(category.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        return res.status(200).json(category);

    },

    update: async (req,res,next) => {
        const {userId,name} = req.body;
        const categoryId = req.params.id;

        if(!categoryId || !name || name =='' ){
            return res.status(400).json({error: 'Campos obrigatórios não informados.'});
        }

        const category = await TasksCategory.findByPk(categoryId);
        
        if(!category) {
            return res.status(404).json({error: 'Categoria não encontrada.'});
        }
        
        if(category.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        await category.update({ name: name });

        return res.status(200).json(category);

    },
    destroy: async (req,res,next) => {

        const {userId} = req.body;
        const categoryId = req.params.id;

        const category = await TasksCategory.findByPk(categoryId);
        
        if(!category) {
            return res.status(404).json({error: 'Categoria não encontrada.'});
        }
        
        if(category.userId !== userId){
            return res.status(403).json({error: 'Acesso ao recurso não autorizado.'});
        }

        await category.destroy();

        return res.status(200).json({message: 'Categoria excluída com sucesso.'});


    }
    
}