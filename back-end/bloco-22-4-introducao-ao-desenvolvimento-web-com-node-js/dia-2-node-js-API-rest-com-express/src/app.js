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

/* app.get('/filter/myActivities', (req, res) => {
    // const { status } = req.query;
    const exibirFiltro = myActivities.filter(({ status }) => status === req.query.status); 
    res.status(200).json(exibirFiltro);
    //  res.status(200).send(` o status é ${status}`);
}); */

// GABARITO OUTRA FORMA 
// app.js

app.get('/filter/myActivities', (req, res) => {
    //  Acesse a chave status usando req.query. Agora, inicia-se à variável com todas as atividades e aplicando uma condicional para verificar se o status repassado por meio do query params existe.
    const { status } = req.query;
    let filteredActivities = myActivities;
  
    if (status) {
        // Terceiro passo: Se existir, aplica-se o método filter comparando o status por meio do operador de comparação === no array de objetos activities
      filteredActivities = myActivities.filter((activity) => activity.status === status);
    }
  
    res.status(200).json({ activities: filteredActivities });
  });

module.exports = app;