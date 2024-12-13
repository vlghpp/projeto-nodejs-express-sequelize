const Services = require('./Services.js')

class PeoplesServices extends Services{
    constructor(){
        super('Pessoa')
    }

    async getLicensesByStudent(id){
        const student = await super.getRegisterById(id)
        const listLicenses = await student.getClassMatriculed()
        return listLicenses
    }
}


module.exports = PeoplesServices