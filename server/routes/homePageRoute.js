const express = require('express');
const router = express();
const controller = require('../controllers/homeController.js');
const path = require('path');

router.set('views', path.join(__dirname, '../../client/views/'))
router.use(express.static(path.join(__dirname, '../../client/public')));

router.get('/', controller.homeRender);

module.exports = router;

