const checkPalindromo = function solver(texto){
    var array_caracteres=texto.toLowerCase().replace(/\s/g,"").split("");
    var palindromo=[];
    var resultado={'palindromo': false};
    var ocorrencias={};
    var identificados=[];

    for (var i = 0; i < array_caracteres.length;i++){
        if (identificados.indexOf(array_caracteres[i]) == -1){
            if (ocorrencias[array_caracteres[i]] == undefined) ocorrencias[array_caracteres[i]]=0;                
            array_caracteres.map((char, key)=>{
                if(char === array_caracteres[i]){
                    ocorrencias[array_caracteres[i]]+=1;
                    identificados.push(array_caracteres[i])
                };
            });        
        }
    }

    // Grava Ocorrências
    resultado['ocorrencias_caracteres']=ocorrencias;

    for (var i = 0; i < array_caracteres.length;i++){
        palindromo.unshift(array_caracteres[i]);        
    };

    if (array_caracteres.join('') == palindromo.join('')){
        resultado['palindromo']=true
    }

    return resultado
}
module.exports=checkPalindromo;

