const express = require('express');
const router = express();
const controller = require('../controllers/deleteTaskController.js');
const path = require('path');

router.set('views', path.join(__dirname, '../../client/views/'))
router.use(express.static(path.join(__dirname, '../../client/public')));

router.get('/:id', controller.deleteTask);

module.exports = router;
