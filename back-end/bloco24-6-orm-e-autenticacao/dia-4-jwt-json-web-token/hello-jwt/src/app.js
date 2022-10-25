const express = require('express');

const app = express();

app.use(express.json());

const router = require('../src/router/routes');

app.use(router);

module.exports = app;

