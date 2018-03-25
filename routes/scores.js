const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreController')

/* GET scores. */
router.get('/', scoreController.index);

module.exports = router;
