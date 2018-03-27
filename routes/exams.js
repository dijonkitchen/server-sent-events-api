const express = require('express');
const router = express.Router();

const examController = require('../controllers/examController')

/* GET exams */
router.get('/', examController.index);
router.get('/:id', examController.show);

module.exports = router;
