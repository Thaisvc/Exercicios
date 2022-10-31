const  express = require('express');
// CHAMAR FUNÇAO DO CONTROLLER

const controllerUser = require('../controllers')
const router = express.Router();

router.post('/login', controllerUser.login)

module.exports = router