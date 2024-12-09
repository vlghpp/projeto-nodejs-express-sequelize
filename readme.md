# Node.js & ORM com Squelize e PostgreSQL

## Iniciando um projeto

ORM - Object Relational Mapping, é um meio de deixar as complexidades de escrever códigos SQL de forma mais amigavel para programadores. Usando orientação a objetos é possível modularizar entidades para as tabelas SQL.


### Comandos Inciais

`npm i sequelize ` - instala a bilioteca sequelize para operar a ORM
`npm i sequelize-cli ` - instala a biblioteca sequelize para conseguir estruturar o projeto e rodar romandos referentes a estruturação.
`npx sequelize-cli init` - cria 4 pastas (Config/Models/Migrations/Seeders) de estruturação para o projeto
`npm sequelize-cli model:generate --name${NOME DO MODELO (e.g Pessoa)} --attributes ${ATRIBUTO da entidade: tipo do atributo} nome:string,email:string,cpf:string,ativo:boolean,role:string`
`npm i --save pg-hstore` - instala a versão de pg (postgreSQL) para usar no squelize
`npx sequelize-cli db:migrate` - faz a migração de dados criadas em models para o banco selecionado no config.json
