const sequelize = require("sequelize");
const config = require("./config");
let Sequelize = new sequelize (config.DATABASE, config.USERNAME, config.PASSWORD, {
    dialect: config.DIALECT,
    host: config.HOST
})
module.exports = Sequelize;