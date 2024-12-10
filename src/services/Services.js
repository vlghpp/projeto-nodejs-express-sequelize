const dataSource = require('../../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegisters () {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegister(dataOfRegister) {
    return dataSource[this.model].create(dataOfRegister);
  }

  async updateRegister(dataUpdated, id) {
    const listRegistersUpdated = dataSource[this.model].update(dataUpdated, {
      where: { id: id }
    });
    if (listRegistersUpdated[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;