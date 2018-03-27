var express = require('express');
var router = express.Router();

const studentController = require('../controllers/studentController')

/* GET students */
router.get('/', studentController.index);
router.get('/:id', studentController.show);

module.exports = router;
