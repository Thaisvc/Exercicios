// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  host: process.env.SQL_HOST,
  database: process.env.SQL_DATABASE,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'hello-jwt',
  },
 
};