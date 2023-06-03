import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Configuração do body-parser para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para permitir o acesso a recursos de diferentes origens (CORS)
app.use(cors());

// Rota para tratar as solicitações POST
app.post('/orit', (req, res) => {
  // Lógica para processar a solicitação POST
  // ...
  res.send('Recebido POST com sucesso!');
});

// Rota para tratar as solicitações GET (apenas como exemplo)
app.get('/orit', (req, res) => {
  res.send('Recebido GET com sucesso!');
});

// Inicialização do servidor
const port = 21001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});






