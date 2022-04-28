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

    res.status(201).json(novoProduto);
  },

  async deletarProduto(req, res) {
    try {
      const { id } = req.params;

      await Produtos.destroy({
        where: {
          id, // especidicar a coluna com o valor do ítem a ser deletado
        },
      });

      res.status(204);
    } catch (error) {
      return res.status(500).json('Ocorreu algum problema!');
    }
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    if (!id) return res.status(400).json('id não enviado');

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

    res.status(200).res.json('Produto Atualizado!');
  },
};

module.exports = produtoController;
