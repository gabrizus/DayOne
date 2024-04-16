const express = require('express');
const router = express();
const controller = require('../controllers/editTaskController.js');
const path = require('path');
const multer = require('multer');
let upload = multer();

router.set('views', path.join(__dirname, '../../client/views/'))
router.use(express.static(path.join(__dirname, '../../client/public')));

router.get('/:id', controller.editTaskRender);
router.post('/:id', upload.fields([]), controller.editTask);

module.exports = router;
