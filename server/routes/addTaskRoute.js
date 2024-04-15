const express = require('express');
const router = express();
const controller = require('../controllers/addTaskController.js');
const path = require('path');
const multer = require('multer');
const upload = multer();

router.set('views', path.join(__dirname, '../../client/views/'))
router.use(express.static(path.join(__dirname, '../../client/public')));

router.get('/', controller.addTaskRender);
router.post('/', upload.fields([]), controller.addTask);

module.exports = router;

