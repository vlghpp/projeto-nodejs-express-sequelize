const PessoaController = require('../controller/PeopleController.js')
const LicenseController = require('../controller/LicenseController.js')
const pessoaController = new PessoaController()
const licenseController = new LicenseController()
const { Router } = require('express')
const routes = Router()

routes.get('/peoples', (req, res) => { pessoaController.getAll(req, res) })
routes.get('/peoples/:id', (req, res) => { pessoaController.getById(req, res) })
routes.post('/peoples/create', (req, res) => { pessoaController.create(req, res) })
routes.patch('/peoples/update/:id', (req, res) => { pessoaController.update(req, res) })
routes.delete('/peoples/delete/:id', (req, res) => { pessoaController.delete(req, res) })
routes.get('/peoples/:idEstudante/licenses', (req, res) => { pessoaController.getLicenses(req, res) })
routes.post('/peoples/:idEstudante/licenses', (req, res) => { licenseController.create(req, res) })



module.exports = routes
