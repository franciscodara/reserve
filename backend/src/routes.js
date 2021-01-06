const express = require('express');
const routes = express.Router();

// Methods GET, POST, PUT, DELETE.
// req.query acessa os query params (para filtros read).
// req.params acesso os route params (para update e delete).
// req.body acessa o corpo da requisição (para creat e update)

// routes.get('/users', (req, res) => {
// return res.json({idade: req.query.idade});  
// });

// routes.post('/users', (req, res) => {
//     return res.json({message: "Envio de método post."}); 
// });

// routes.put('/users/:id', (req, res) => {
//     return res.json({idade: req.params.id}); 
// });

// routes.get('/users/:id', (req, res) => {
//     return res.json({id: req.params.id});  //req.query acessa os query params.
// });

routes.post('/users', (req, res) => {
    return res.json(req.body); 
});

module.exports = routes;