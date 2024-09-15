function wordToNumber(num){
    let number;
    num = num.toLowerCase();
    switch (num) {
        case "um":
            number = 1;
            break;
        case "dois":
            number = 2;
            break;
        case "três" || "tres":
            number = 3;
            break;
        case "quatro":
            number = 4;
            break;
        case "cinco":
            number = 5;
            break;
        case "seis":
            number = 6;
            break;
        case "sete":
            number = 7;
            break;
        case "oito":
            number = 8;
            break;
        case "nove":
            number = 9;
            break;
    
        default:

            break;
    }
    return number;
}


function mostraNumeroUsuario(num){
    if(!num){
        alert("Por favor, insira apenas numeros de um a nove");
    }
    else{
        alert("Seu numero convertido para algarismo é: " + num);
    }
}

let numeroUsuario = prompt("Insira o seu numero por extenso que eu irei converter para o tipo number");

let palavraPraNumero = wordToNumber(numeroUsuario);

mostraNumeroUsuario(palavraPraNumero);