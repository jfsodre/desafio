const checkPalindromo = function solver(texto){
    const array_caracteres=texto.toLowerCase().replace(/\s/g,"").split("");
   
    var resultado={'palindromo': false};
    var ocorrencias={};
    var identificados=[];

    if (array_caracteres.join('') == array_caracteres.reverse().join('')) resultado['palindromo']=true;
    console.log()
    array_caracteres.map((char, key)=>{        
        if (identificados.includes(char)==false)
            for (var i = 0; i < array_caracteres.length;i++){
                if (char === array_caracteres[i]){
                    if (ocorrencias[char] === undefined) ocorrencias[char]=0;
                    ocorrencias[char]+=1;
                    identificados.push(char);
                }
        } 
    });

    // Grava Ocorrências
    resultado['ocorrencias_caracteres']=ocorrencias;  
    
    return resultado
}
module.exports=checkPalindromo;

