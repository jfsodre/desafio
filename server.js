const http = require('http');
const endereco = 'localhost'
const porta = process.env.PORT || 8900;
const app=require("./app")
const servidor = http.createServer(app);

servidor.listen(porta, endereco,()=>{
    console.log(`Servidor http ativado na URI http://${endereco}:${porta}`);
});
