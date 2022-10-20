require("dotenv").config();

module.exports = {

  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_ROOT_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'exercicio',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql', 
    port: 33065,
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'exercicio',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql', 

  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'exercicio',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql', 
  },
};