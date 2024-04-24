const router = require('express').Router();
const TasksController = require('../controllers/TasksController')
const Auth = require('../middlewares/Auth');


router.get("/tasks",Auth,TasksController.index);
router.get("/tasks/:id",Auth,TasksController.show);
router.post("/tasks",Auth,TasksController.store);
router.put("/tasks/:id",Auth,TasksController.update);
router.delete("/tasks/:id",Auth,TasksController.destroy);


module.exports = router;