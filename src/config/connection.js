const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false, // para não utilizar campos created_at e updated_at
        freezeTableName: true // para não adicionar o "s" no nome das tabelas
    }
});


sequelize.authenticate()
.then(function(){
    console.log('Database connection successful')
}).catch(function(error){
    console.log('Failed to connect to database')
    console.log(error)
});

module.exports = sequelize





