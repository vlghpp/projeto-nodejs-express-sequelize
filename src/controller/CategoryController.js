const Controller = require('./Controller.js')
const CategoriesServices = require('../services/CategoriesService.js')

const categoryServices = new CategoriesServices()


class CategoryController extends Controller{
    constructor(){
        super(categoryServices)
    }
}


module.exports = CategoryController