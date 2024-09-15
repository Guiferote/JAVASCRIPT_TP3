function verificaParOuImpar(num){
    num = Math.round(num)
    let parOuImpar = num % 2;
    if(parOuImpar === 0){
        return "par";
    }
    else{
        return "impar";
    }
}

let numeroUsuario = prompt("Insira um número inteiro que eu irei verifcar se ele é par ou impar");

alert("Seu numero é: " + verificaParOuImpar(numeroUsuario))