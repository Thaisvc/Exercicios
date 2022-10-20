require("dotenv").config();

module.exports = {

  development: {
    username: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
    host:  process.env.DB_HOST,
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO,
    port:  process.env.DB_PORT,
  },
  test: {
    username: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
    host:  process.env.DB_HOST,
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO,
    port:  process.env.DB_PORT,

  },
  production: {
    username: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME,
    host:  process.env.DB_HOST,
    dialect:  process.env.DB_QUAL_BANCO_ESTOU_USANDO,
    port:  process.env.DB_PORT,

  },
};
