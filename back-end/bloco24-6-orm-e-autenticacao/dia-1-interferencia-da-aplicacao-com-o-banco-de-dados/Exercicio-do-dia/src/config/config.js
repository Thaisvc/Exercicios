require("dotenv").config();

module.exports = {

  development: {
    username: process.env.DB_USER || 'root',
    password:  process.env.DB_PASSWORD || 'root',
    database:  process.env.DB_NAME || 'exercicio',
    host:  process.env.DB_HOST || 'localhost',
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO || 'mysql',
    port:  process.env.DB_PORT || 33065,
  },
  test: {
    username: process.env.DB_USER || 'root',
    password:  process.env.DB_PASSWORD || 'root',
    database:  process.env.DB_NAME || 'root',
    host:  process.env.DB_HOST || 'exercicio',
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO || 'mysql',
    port:  process.env.DB_PORT || 33065,

  },
  production: {
    username: process.env.DB_USER || 'root',
    password:  process.env.DB_PASSWORD || 'root',
    database:  process.env.DB_NAME || 'root',
    host:  process.env.DB_HOST || 'exercicio',
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO || 'mysql',
    port:  process.env.DB_PORT || 33065,
  },
};