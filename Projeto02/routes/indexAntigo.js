const express = require('express');

const router = express.Router();//gera rota principal

router.get('/posts/:slug',(req, res) => { //metodo POST
    let slug = req.params.slug;
    res.send("SLUG do post " + slug);
});

router.get('/rota1',(req, res) => {
    res.send("ROTA1");
});

router.get('/rota2',(req, res) => { //metodo GET
    res.json(req.query);
});

module.exports = router;