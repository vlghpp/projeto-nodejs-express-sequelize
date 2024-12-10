const PessoaController = require('../controller/PeopleController.js')
const pessoaController = new PessoaController()
const { Router } = require('express')
const routes = Router()

routes.get('/peoples', (req, res) => { pessoaController.getAll(req, res) })
routes.get('/peoples/:id', (req, res) => { pessoaController.getById(req, res) })
routes.post('/peoples/create', (req, res) => { pessoaController.create(req, res) })
routes.patch('/peoples/update/:id', (req, res) => { pessoaController.update(req, res) })
routes.delete('/peoples/delete/:id', (req, res) => { pessoaController.delete(req, res) })


module.exports = routes
