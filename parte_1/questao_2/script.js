function pedeIdadeUsuario(){
    let idadeUsuario = prompt("Insira sua idade aqui:");
    idadeUsuario = Number(idadeUsuario);
    return idadeUsuario;
}

function verificaIdadeUsuario(idade){

    let IsUsuarioAdulto;
    if (idade < 18){
        IsUsuarioAdulto = false
        return IsUsuarioAdulto;
    }
    else if(idade >= 18){
        IsUsuarioAdulto = true
        return IsUsuarioAdulto;
    }

}

function enviaMensagemUsuario (isAdulto){
    if(isAdulto){
        alert("Olá adulto");
    }
    else{
        alert("Olá jovem");
    }
}

let idade = pedeIdadeUsuario();

enviaMensagemUsuario(verificaIdadeUsuario(idade));




/*

Faça um programa que peça a idade do usuário através de um prompt. 
Caso a idade digitada seja menor do que 18 anos, mostre um alert na tela com a mensagem 
"Olá jovem!". Caso contrário, mostre a mensagem "Olá adulto!".
Utilize if / else para implementar essa lógica!

*/