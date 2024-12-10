const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@localhost:5432/api_sequelize`) // Exemplo Postgres
const app = express();
const routes = require('./src/routes')

routes(app)

module.exports = app;
