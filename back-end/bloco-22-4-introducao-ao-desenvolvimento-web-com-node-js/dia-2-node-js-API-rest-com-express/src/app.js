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

app.get('/myActivities/', (req, res) => {
    res.status(200).json(myActivities);
});
// GABARITO OUTRA FORMA
// app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
    // const { status } = req.query;
    const exibirFiltro = myActivities.filter(({ status }) => status === req.query.status); 
    res.status(200).json(exibirFiltro);
    //  res.status(200).send(` o status é ${status}`);
});

module.exports = app;