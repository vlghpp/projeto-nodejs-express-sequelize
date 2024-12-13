const Controller = require('./Controller.js')
const CoursesServices = require('../services/CoursesService.js')

const courseServices = new CoursesServices()


class CourseController extends Controller{
    constructor(){
        super(courseServices)
    }
}


module.exports = CourseController