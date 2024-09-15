function pedePoderDeLuta(){
    let poderDeLuta = prompt("Qual é o poder de luta do kakarotto?");
    poderDeLuta = Math.round(poderDeLuta);
    return poderDeLuta;
}

function verificaPoderDeLuta(poderDeLuta, poderNecessario){
    let temOPoderNecessario
    
    if (poderDeLuta > poderNecessario){
        temOPoderNecessario = true
        return temOPoderNecessario;
    }
    else{
        temOPoderNecessario = false
        return temOPoderNecessario;
    }
}

function reaçãoAoPoder(temOpoder){
    if (temOpoder == true){
        alert("Isso deve ser um engano, esse aparelho deve estar quebrado!");
    }
    else{
        alert("Ainda não é o suficiente para derrotar Vegeta!");
    }
}

let poderDeLuta = pedePoderDeLuta();

let isPoderSuficiente = verificaPoderDeLuta(poderDeLuta, 8000);

reaçãoAoPoder(isPoderSuficiente);


/*
Crie um programa que faça a seguinte pergunta através de um prompt: "Qual o poder de luta de Kakarotto?"

Guarde essa resposta em uma variável poderDeLuta, que deve ser convertida para um número inteiro. 
Depois utilize if / else para criar o seguinte comportamento:
Se poderDeLuta for maior do que 8000, mostre um alert com a mensagem 
"Isso deve ser um engano, esse aparelho deve estar quebrado!"
Caso contrário, mostre em um alert a mensagem "Ainda não é o suficiente para derrotar Vegeta!"

*/