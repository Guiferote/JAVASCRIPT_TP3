function verificaTamanhoString(str){
    let quantidadeCaracteres = str.length;
    return quantidadeCaracteres;
}

let stringUsuario = prompt("Eu irei contar os caracteres do que você inserir no campo abaixo!!");
let tamanhoString = verificaTamanhoString(stringUsuario);

alert("A sua string possui: " + tamanhoString + " caracteres!");