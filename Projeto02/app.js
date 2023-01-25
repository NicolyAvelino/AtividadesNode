// Fazendo a importação do Express
const express = require("express");

// Rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();//gera rota principal
router.get('/',(req, res) => {
    res.send("consegui...");
});

// Configurações básicas do aplicativo
const app = express();
app.use('/', router); // Foi passado 1 rota pois criamos apenas 1

module.exports = app; // Exportamos o app, pois vamos importa-la no servidor