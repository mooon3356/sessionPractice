const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'ha_advanced1',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'ha_advanced1',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'ha_advanced1',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};