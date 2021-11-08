const mongoose = require('mongoose');
const { database } = require('../config/connect');

const mongoConnect = mongoose.connect(
    database, 
    { useNewUrlParser: true })
    .then(console.log('Sucesso ao conectar com a base de dados!'))
    .catch(error => console.log('Erro ao iniciar a conexão com a base de dados', error))


module.exports = mongoConnect;