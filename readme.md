# Node.js & ORM com Squelize e PostgreSQL

## Iniciando um projeto

ORM - Object Relational Mapping, é um meio de deixar as complexidades de escrever códigos SQL de forma mais amigavel para programadores. Usando orientação a objetos é possível modularizar entidades para as tabelas SQL.


### Comandos Inciais


#### Conteúdo Alura

| **Comando**                                 | **Descrição**                                                                 |
|---------------------------------------------|-------------------------------------------------------------------------------|
| `sequelize db:migrate`                      | Executa todas as migrações pendentes para atualizar o banco de dados.         |
| `sequelize db:migrate:schema:timestamps:add` | Atualiza uma tabela de migração para ter marcação de data/hora.               |
| `sequelize db:migrate:status`               | Exibe o status de todas as migrações.                                         |
| `sequelize db:migrate:undo`                 | Reverte a migração mais recente do banco de dados.                            |
| `sequelize db:migrate:undo:all`             | Reverte todas as migrações executadas.                                        |
| `sequelize db:seed`                         | Executa um seeder específico.                                                 |
| `sequelize db:seed:undo`                    | Deleta os últimos dados inseridos via seeds do banco de dados.                |
| `sequelize db:seed:all`                     | Executa todos os seeders.                                                    |
| `sequelize db:seed:undo:all`                | Deleta todos os dados inseridos via seeds do banco de dados.                 |
| `sequelize db:create`                       | Cria um banco com uma configuração específica.                                |
| `sequelize db:drop`                         | Exclui o banco de dados especificado na configuração.                         |
| `sequelize init`                            | Inicia um projeto Sequelize.                                                 |
| `sequelize init:config`                     | Inicia as configurações do Sequelize.                                         |
| `sequelize init:migrations`                 | Inicia as migrações.                                                         |
| `sequelize init:models`                     | Inicia os modelos.                                                           |
| `sequelize init:seeders`                    | Inicia os seeders.                                                           |
| `sequelize migration:generate`              | Gera um novo arquivo de migração.                                            |
| `sequelize model:generate`                  | Gera uma model e sua migração [alias: model:create].                         |
| `sequelize seed:generate`                   | Gera um novo arquivo de seed.                                                |


#### Minhas anotações

`npm i sequelize ` - instala a bilioteca sequelize para operar a ORM
`npm i sequelize-cli ` - instala a biblioteca sequelize para conseguir estruturar o projeto e rodar romandos referentes a estruturação.
`npx sequelize-cli init` - cria 4 pastas (Config/Models/Migrations/Seeders) de estruturação para o projeto
`npm sequelize-cli model:generate --name${NOME DO MODELO (e.g Pessoa)} --attributes ${ATRIBUTO da entidade: tipo do atributo} nome:string,email:string,cpf:string,ativo:boolean,role:string`
`npm i --save pg-hstore` - instala a versão de pg (postgreSQL) para usar no squelize
`npx sequelize-cli db:migrate` - faz a migração de dados criadas em models para o banco selecionado no config.json
`npx sequelize seed:generate --name demo-pessoa` - Esse arquivo pode ser utilizado para inserir ou remover dados do banco de dados quando rodar o comando `sequelize db:seed:all` ou `sequelize db:seed:undo:all`

### Arquitetura MVC

A arquitetura MVC é um dos padrões aplicados em engenharia de software. Consistem em:

- O **model (M)** faz a manipulação dos dados;
- O **view (V)** trata do output das informações.
- O **controller (C)** age como intermediário entre o modelo e as camadas de visualização;

### Alterando o banco com migrações

Considere a tabela usuarios como exemplo:
|	| usuarios |
|----|---------|
| PK | id  	|
|	| nome	|
|	| celular |

Após criarmos um modelo e um arquivo de migrações com os dados acima e executar a migração com `npx sequelize-cli db:migrate`, o banco de dados vai refletir um resultado semelhante a esse:

| nome  	| tipo     	| PK |
|-----------|--------------|----|
| id    	| INTEGER  	| 1  |
| nome  	| VARCHAR(255) | 0  |
| celular   | VARCHAR(255) | 0  |
| createdAt | DATETIME 	| 0  |
| updatedAt | DATETIME 	| 0  | 		

Vamos considerar que, somente após executarmos o comando de migração, notamos que um dado importante não havia sido incorporado no diagrama, o CPF. Como fazer essa alteração?

1. Comece criando um novo arquivo de migração, mantendo o padrão data-descricao.js. Não precisa ser exatamente os minutos e segundos do momento da criação, basta ser uma data posterior às migrações anteriores. Por exemplo 20230913000516-addcolumn-usuarios.js;

2. Os métodos chamados na migração são parecidos, porém, ao invés de createTable e dropTable, usaremos addColumn e removeColumn. Adicione os dados desejados;

```javascript
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
   await queryInterface.addColumn('usuarios', 'cpf', {
      allowNull: false,
      type: Sequelize.STRING
    });
 },
 async down(queryInterface, Sequelize) {
   await queryInterface.removeColumn('usuarios', 'cpf');
 }
};
```
3. Não se esqueça de atualizar o modelo! Por exemplo, com a propriedade:

```javascript
cpf: {
    type: Sequelize.STRING,
    allowNull: false
},
```

4. Execute novamente o comando de migração `npx sequelize-cli db:migrate`.

Com os passos acima utilizamos novamente as migrações para fazer alterações rastreáveis no banco. As migrações ficam indexadas em sequelizeMeta e podem ser revertidas, mas não é preciso desfazer a migração anterior para fazer uma nova alteração no banco, como adicionar uma coluna. É só rodar um novo comando de migração para adicionar as alterações.