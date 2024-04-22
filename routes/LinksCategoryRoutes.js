const router = require('express').Router();
const LinksCategoryController = require('../controllers/LinksCategoryController')
const Auth = require('../middlewares/Auth');


router.get("/linkscategory",Auth,LinksCategoryController.index);
router.post("/linkscategory",Auth,LinksCategoryController.store);
router.put("/linkscategory/:id",Auth,LinksCategoryController.update);
router.delete("/linkscategory/:id",Auth,LinksCategoryController.destroy);


module.exports = router;