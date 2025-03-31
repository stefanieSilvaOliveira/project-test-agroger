import express from 'express';
import cors from 'cors';
import jsonServer from 'json-server';

const app = express();
const PORT = 5000;

// Middleware do JSON Server primeiro
const middlewares = jsonServer.defaults();
app.use(middlewares);

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite acesso de qualquer frontend (para testes)
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware para JSON
app.use(express.json());

// Criar um endpoint personalizado
app.get('/api/items', (req, res) => {
  res.json({ message: 'Bem-vindo à API de itens!' });
});

// Configuração do JSON Server
const router = jsonServer.router('db.json');
app.use(router);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`
  🚀 Servidor rodando na porta ${PORT}
  ➜ API: http://localhost:${PORT}/
  ➜ JSON Server: http://localhost:${PORT}/db
  `);
});
