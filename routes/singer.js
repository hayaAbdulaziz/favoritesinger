
const router = require('express').Router();
const SingerController = require('../controllers/singer');
//find all singer 

router.get('/', SingerController.index);

//create new Singer
router.post('/create',SingerController.create);

//update Singer
router.get('/update/:id',SingerController.edit);
router.put('/update/:id',SingerController.update);

//delete 
router.delete('/delete/:id', SingerController.delete);


module.exports = router ;