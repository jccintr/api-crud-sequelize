const router = require('express').Router();
const TasksCategoryController = require('../controllers/TasksCategoryController')
const Auth = require('../middlewares/Auth');


router.get("/taskscategory",Auth,TasksCategoryController.index);
router.get("/taskscategory/:id",Auth,TasksCategoryController.show);
router.post("/taskscategory",Auth,TasksCategoryController.store);
router.put("/taskscategory/:id",Auth,TasksCategoryController.update);
router.delete("/taskscategory/:id",Auth,TasksCategoryController.destroy);


module.exports = router;