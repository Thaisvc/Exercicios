const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

const router = require('../src/router/user.route');


app.use(router);

app.use(errorMiddleware);

module.exports = app;

