const CategoryController = require('../controller/CategoryController.js')
const categoryController = new CategoryController()
const { Router } = require('express')
const routes = Router()

routes.get('/categories', (req, res) => { categoryController.getAll(req, res) })
routes.get('/categories/:id', (req, res) => { categoryController.getById(req, res) })
routes.post('/categories/create', (req, res) => { categoryController.create(req, res) })
routes.patch('/categories/update/:id', (req, res) => { categoryController.update(req, res) })
routes.delete('/categories/delete/:id', (req, res) => { categoryController.delete(req, res) })


module.exports = routes
