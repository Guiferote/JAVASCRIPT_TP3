
function pedeNumeroUsuario(){
    let numeroUsuario = prompt("Insira aqui um numero de 0 a 9:");
    numeroUsuario = Number(numeroUsuario);
    return numeroUsuario;
}

function retornaNumeroPorExtenso(numero){
    let numeroPorExtenso;
    switch(numero){
        case 1 :
            numeroPorExtenso = "Um";
            return numeroPorExtenso;
        break;
        
        case 2:
            numeroPorExtenso ="Dois";
            return numeroPorExtenso;
        break;
        
        case 3 :
            numeroPorExtenso = "Três";
            return numeroPorExtenso;
        break;
        
        case 4 :
            numeroPorExtenso = "Quatro";
            return numeroPorExtenso;
        break;
        
        case 5 :
            numeroPorExtenso = "Cinco";
            return numeroPorExtenso;
        break;
        
        case 6 :
            numeroPorExtenso = "Seis";
            return numeroPorExtenso;
        break;
        
        case 7 :
            numeroPorExtenso = "Sete";
            return numeroPorExtenso;
        break;
        
        case 8 :
            numeroPorExtenso = "Oito";
            return numeroPorExtenso;
        break;
        
        case 9 :
            numeroPorExtenso = "Nove";
            return numeroPorExtenso;
        break;
        
        default:
            numeroPorExtenso = "Número desconhecido";
            return numeroPorExtenso;

    }
}

function mostraNumeroPorExtenso(numeroPorExtenso){
    alert(numeroPorExtenso);
    
}

const numeroUsuario = pedeNumeroUsuario();
const numeroPorExtenso = retornaNumeroPorExtenso(numeroUsuario);
mostraNumeroPorExtenso(numeroPorExtenso);


/*
Mostrando os números por extenso:
Faça um programa que receba números de 0-9 através de um prompt (converta-os para number!).
Após, utilize switch / case para exibir esses números por extenso através de um alert. 
Conforma a lógica a seguir:
    digitou 0 mostra "zero" em um alert;
    digitou 1 mostra "um" em um alert;
    digitou 2 mostra "dois" em um alert;
    digitou 3 mostra "três" em um alert;
    digitou 4 mostra "quatro" em um alert;
    digitou 5 mostra "cinco" em um alert;
    digitou 6 mostra "seis" em um alert;
    digitou 7 mostra "sete" em um alert;
    digitou 8 mostra "oito" em um alert;
    digitou 9 mostra "nove" em um alert;
    digitou qualquer outra coisa, mostra "Número desconhecido" em um alert.
 */