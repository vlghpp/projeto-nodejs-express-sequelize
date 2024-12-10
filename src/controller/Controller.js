class Controller {
    constructor(entidadeService) {
      this.entidadeService = entidadeService;
    }
  
    async getAll(req, res) {
      try {
        const listRegisters = await this.entidadeService.getAllRegisters();
        return res.status(200).json(listRegisters);
      } catch (erro) {
        // erro
      }
    }
  
    async getById(req, res) {
      const { id } = req.params;
      try {
        const registerById = await this.entidadeService.getRegisterById(Number(id));
        return res.status(200).json(registerById);
      } catch (erro) {
        // erro
      }
    }
  
    async create(req, res) {
      const dataForCreate = req.body;
      try {
        const dataCreated = await this.entidadeService.createRegister(dataForCreate);
        return res.status(200).json(dataCreated);
      } catch (erro) {
        // erro
      }
    }
  
    async update(req, res) {
      const { id } = req.params;
      const dataForUpdate = req.body;
      try {
        //isUpdated
        const dataUpdated = await this.entidadeService.updateRegister(dataForUpdate, Number(id));
        if (!dataUpdated) {
          return res.status(400).json({ mensagem: 'registro não foi atualizado' });
        }
        return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
      } catch (erro) {
        // erro
      }
    }
  
    async delete(req, res) {
      const { id } = req.params;
      try {
        await this.entidadeService.deleteRegister(Number(id));
        return res.status(200).json({ mensagem: `id ${id} deletado` });
  
  
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
  }
  
  module.exports = Controller;