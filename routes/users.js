var express = require('express');
var router = express.Router();

var passport = require('../middlewares/passport');
var filter = require('../middlewares/CustomMiddleware');
var userController = require('../controllers/UserController');

/* GET */
//the middlewares must be ordered
router.get('/', filter.customFilter, userController.index);

//expose router for app.js
module.exports = router;
