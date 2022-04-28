/**
 * Este index serve para importar todos os módulos e relacionar eles
 * sempre que for necessário.
 */

const CategoriaProduto = require('./CategoriaProduto');
const Categorias = require('./Categorias');
const Fabricantes = require('./Fabricantes');
const Produtos = require('./Produtos');
const Usuarios = require('./Usuarios');

Produtos.belongsTo(Fabricantes, {
  foreignKey: 'fabricante_id',
});

Fabricantes.hasMany(Produtos, {
  foreignKey: 'fabricante_id',
});

Produtos.belongsToMany(Categorias, {
  foreignKey: 'produto_id',
  through: CategoriaProduto, // Especifica a categora que relaciona produto com categoria.
});

Categorias.belongsToMany(Produtos, {
  foreignKey: 'categoria_id',
  through: CategoriaProduto,
});

module.exports = {
  Fabricantes,
  Produtos,
  Categorias,
  Usuarios,
};
