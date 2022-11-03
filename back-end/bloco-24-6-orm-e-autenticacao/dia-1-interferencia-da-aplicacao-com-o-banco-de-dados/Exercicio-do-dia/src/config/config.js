require('dotenv').config();

const config = {
  username: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT ,
  port: process.env.DB_PORT ,

/*   username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'trybe_orm',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  port: process.env.DB_PORT || '33065', */
};

module.exports = {
  development: config,
  test: config,
  production: config,
};