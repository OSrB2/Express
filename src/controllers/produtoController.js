const { Produtos, Fabricantes, Categorias } = require('../models');

const produtoController = {
  listarProdutos: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll({
      include: Fabricantes,
    });

    res.json(listaDeProdutos);
  },

  cadastrarProduto: async (req, res) => {
    const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

    const novoProduto = await Produtos.create({
      nome,
      preco,
      quantidade,
      fabricante_id,
    });

    const categoria = await Categorias.findByPk(categoria_id);
    // findByPk busca pela PK - primaryKey

    await novoProduto.setCategorias(categoria);

    res.json(novoProduto);
  },

  async deletarProduto(req, res) {
    const { id } = req.params;

    await Produtos.destroy({
      where: {
        id, // especidicar a coluna com o valor do ítem a ser deletado
      },
    });

    res.json('Produto deletado!');
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    const produtoAtualizado = await Produtos.update(
      {
        nome,
        preco,
        quantidade,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json('Produto Atualizado!');
  },
};

module.exports = produtoController;
