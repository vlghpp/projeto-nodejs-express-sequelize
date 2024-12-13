const Controller = require('./Controller.js')
const LicensesServices = require('../services/LicensesService.js')

const licenseServices = new LicensesServices()


class LicenseController extends Controller{
    constructor(){
        super(licenseServices)
    }
}


module.exports = LicenseController