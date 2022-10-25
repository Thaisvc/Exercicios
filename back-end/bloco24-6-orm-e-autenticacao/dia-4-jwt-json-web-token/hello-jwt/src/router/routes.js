const  express = require('express');

const routers = express.Router();

// CHAMA ROTA EX 6.2
const userRoute = require('./user.route');

//EXEMPLO  routers.use('/NAMEROTA', ROTA);

routers.use('/', userRoute )
module.exports = routers