const express = require('express');
const solver = require('../solver');
const router = express.Router();

router.post('/manipulacao-string', (req, res, next) =>{
    if (req.body.texto == undefined || req.body.texto.length < 2) return res.status(404).json({message:"Parâmetro inválido." })
    const resultado=solver(req.body.texto);
    res.status(201).json(resultado);
});
module.exports=router;