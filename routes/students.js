var express = require('express');
var router = express.Router();

const studentController = require('../controllers/studentController')

/* GET students */
router.get('/', studentController.index);

module.exports = router;
