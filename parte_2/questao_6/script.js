function misturaCor(cor1, cor2){
    let corMisturada;
    cor1 = cor1.toLowerCase();
    cor2 = cor2.toLowerCase();
    
    if(cor1 === "amarelo" && cor2 === "laranja"){
        corMisturada = "Vermelho";
        return corMisturada;
    }
    else if(cor1 === "vermelho" && cor2 === "amarelo"){
        corMisturada = "Laranja";
        return corMisturada;
    }
    else if(cor1 === "azul" && cor2 === "vermelho"){
        corMisturada = "Roxo";
        return corMisturada;
    }
    else if(cor1 === "amarelo" && cor2 === "azul"){
        corMisturada = "Verde";
        return corMisturada;
    }
    else if(cor1 === "amarelo" && cor2 === "verde"){
        corMisturada = "Azul";
        return corMisturada;
    }
    else if(cor1 === "branco" && cor2 === "preto"){
        corMisturada = "Cinza";
        return corMisturada;
    }
    else if(cor1 === "vermelho" && cor2 === "branco"){
        corMisturada = "Rosa";
        return corMisturada;
    }
    else if(cor1 === "vermelho" && cor2 === "verde"){
        corMisturada = "Marrom";
        return corMisturada;
    }
    else if(cor1 === "laranja" && cor2 === "roxo"){
        corMisturada = "Marrom terra";
        return corMisturada;
    }
    else if(cor1 === "roxo" && cor2 === "branco"){
        corMisturada = "Lilás";
        return corMisturada;
    }
}

function mostraCorMisturada(corMisturada){
    if(!corMisturada){
        alert("Não consegui misturar suas cores :(");
    }
    else{
        alert("A mistura resultou em: " + corMisturada + "!!!");
    }
}


let primeiraCor = prompt("Insira aqui a primeira cor: ");
let segundaCor = prompt("Insira aqui a segunda cor: ");

let corMisturada = misturaCor(primeiraCor, segundaCor);

mostraCorMisturada(corMisturada);