// index.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/produto');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produto', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// npm init -y cria o package json e cria os metadados para o banco

// Rodar o servidor tem que dar node *nome do arquivo no main: no package json (no caso esse aqui)"[/ ]