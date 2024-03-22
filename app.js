const express = require('express');
const morgan = require('morgan')
const app = express();
const bodyParser=require('body-parser');

const router= require('./api/routes/default');

// Bibliotecas utilizadas na solução

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*' );
    res.header(
        "Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'POST');
        return res.status(200).json({});
    }
    next();
});
// Rota da aplicação
app.use('/api', router);

module.exports=app;