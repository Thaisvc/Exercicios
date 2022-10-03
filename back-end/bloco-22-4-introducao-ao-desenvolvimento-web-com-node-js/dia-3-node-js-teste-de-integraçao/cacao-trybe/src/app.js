const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  //LOGICA
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.post('/chocolates', async (req, res) => {
  const { name, brandId } = req.body;
  const chocolate = await cacaoTrybe.createChocolate(name, brandId);
  res.status(201).json({ chocolate });
});

app.delete("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await cacaoTrybe.deleteChocolate(Number(id));

  if (deleted) return res.status(204).end();
  res.status(404).json({ message: "chocolate not found" });
});
// 👇 EXERCICIO 👇

app.get('/chocolates/total', async (req, res) => {
 
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});
module.exports = app;