const express = require('express');
const myActivities = require('./data/activities');

const app = express();

app.use(express.json());

// ROTAS

app.get('/myActivities/:id', (req, res) => {
    // const { id } = req.params;
    // req é o q recebo / res o que respondo
    const findId = myActivities.find(({ id }) => id === Number(req.params.id)); // vai procurar o id q eu passar
    res.status(200).json(findId);// vai mostrar responder com id q foi encontrado em findId
});

module.exports = app;