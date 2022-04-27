// Importando sequelize.
const Sequelize = require('sequelize');

const DB_NAME = 'loja'; // Nome do banco de dados.
const DB_USER = 'root'; // Usuário do banco de dados.
const DB_PASS = ''; // Senha do banco de dados.
const DB_CONFIG = {
  // Objeto conténdo informações sobre modelo, conexção e porta.
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
};

// Objeto para guardar a conexção do banco de dados.
let db = {};

// Estrutura de validação da conexção com o bando de dados.
try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error('Error ao tentar uma conexção com banco de dados');
}

async function hasConnection() {
  try {
    await db.authenticate();
    // authenticate executa uma query simples para testar a conexção.
    console.log('Banco de dados conectado!');
    console.log('Acesse via http://localhost:3000');
  } catch (error) {
    console.error('Error ao tentar conectar ao banco de dados!');
  }
}

//
Object.assign(db, {
  hasConnection,
});

module.exports = db;
