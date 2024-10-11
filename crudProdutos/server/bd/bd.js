// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:./bd/lojinha.db');

module.exports = sequelize