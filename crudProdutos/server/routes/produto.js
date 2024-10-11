const express = require('express');
const Product = require('../model/Product');
const router = express.Router();


// Rota para listar produtos
router.get('/produtos', async (req, res) => {
  const produtos = await Product.findAll();
  res.json(produtos);
});

// Rota para adicionar produto
router.post('/produtos', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const newProduct = await Product.create({ name, description, price, quantity });
  res.json(newProduct);
});

// Rota para editar produto
router.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  await Product.update({ name, description, price, quantity }, { where: { id } });
  res.json({ message: 'Produto atualizado com sucesso' });
});

// Rota para deletar usuário
router.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: 'Produto deletado com sucesso' });
});

module.exports =  router;