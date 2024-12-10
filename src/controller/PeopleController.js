const Controller = require('./Controller.js')
const PeoplesServices = require('../services/PeoplesService.js')

const peopleServices = new PeoplesServices()


class PeopleController extends Controller{
    constructor(){
        super(peopleServices)
    }
}


module.exports = PeopleController