const express = require('express')
const routes_people = require('./route_people.js') 



module.exports = app => {
    app.use(
        express.json(),
        routes_people
    )
}

