const express = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@localhost:5432/api_sequelize`) // Exemplo Postgres
const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'boas-vindas à API' }); 
});
module.exports = app;
