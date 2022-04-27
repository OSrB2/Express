const db = require('../database'); // Importando a conexção.
const { DataTypes } = require('sequelize'); // Importando tipos do sequelize.
const Fabricantes = require('./Fabricantes');

const Produtos = db.define(
  // define - explica pro sequelize que existe a tabela no banco de dados.
  'Produtos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    preco: {
      type: DataTypes.FLOAT,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    fabricante_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Fabricantes,
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE, // Data de criação do produto.
    },
    updatedAt: {
      type: DataTypes.DATE, // Data da ultima atualização do produto.
    },
  },
  {
    tableName: 'produtos', // Nome da tabela.
  }
);

module.exports = Produtos; // Exportando a estrutura produtos.
