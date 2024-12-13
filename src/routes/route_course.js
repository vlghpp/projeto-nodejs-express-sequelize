const CourseController = require('../controller/CourseController.js')
const courseController = new CourseController()
const { Router } = require('express')
const routes = Router()

routes.get('/courses', (req, res) => { courseController.getAll(req, res) })
routes.get('/courses/:id', (req, res) => { courseController.getById(req, res) })
routes.post('/courses/create', (req, res) => { courseController.create(req, res) })
routes.patch('/courses/update/:id', (req, res) => { courseController.update(req, res) })
routes.delete('/courses/delete/:id', (req, res) => { courseController.delete(req, res) })


module.exports = routes
