const express = require('express')
const routes_people = require('./route_people.js') 
const routes_courses = require('./route_course.js')
const routes_categories = require('./route_category.js')



module.exports = app => {
    app.use(
        express.json(),
        routes_people,
        routes_categories,
        routes_courses
    )
}

