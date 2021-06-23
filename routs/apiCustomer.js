const route = require('express').Router();
const customerController = require('../controllers/customerController');


route.post('/singUp',customerController.singUp);

module.exports = route;