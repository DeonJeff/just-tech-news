// import the Sequelize constructor from the library
const Sequelize = require( " sequelize ");
const { Sequelize } = require("sequelize/types");

//create connection to oour datbase, pass in your MySQl information for username and password
const Sequelize = new Sequelize( " just_tech_news_db", "username", "password", {
   host: "localhost",
   dialect: "mysql" ,
   port: 3306
});

module.exports = sequelize;