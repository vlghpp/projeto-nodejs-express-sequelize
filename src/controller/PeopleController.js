const Controller = require('./Controller.js')
const PeoplesServices = require('../services/PeoplesService.js')

const peopleServices = new PeoplesServices()


class PeopleController extends Controller{
    constructor(){
        super(peopleServices)
    }

    async getLicenses(req, res){
        const { idEstudante } = req.params
        try {
            const listLicenses = await peopleServices.getLicensesByStudent(Number(idEstudante))
            return res.status(200).json(listLicenses)
        } catch (error) {
            //erro
        }
    }
}


module.exports = PeopleController