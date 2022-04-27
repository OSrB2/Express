const db = require('../database');
const { DataTypes } = require('sequelize');

const Produtos = require('./Produtos');
const Categorias = require('./Categorias');

const CategoriaProduto = db.define(
  'CategoriaProduto',
  {
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorias,
        key: 'id',
      },
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorias,
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'categoria_Produto',
  }
);

module.exports = CategoriaProduto;
