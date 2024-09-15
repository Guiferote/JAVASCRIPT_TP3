function pedeFrutaUsuario(){
    let fruta = prompt("Qual é sua fruta favorita?");
    fruta = fruta.toLowerCase();
    return fruta;
}

function verificaQualDica(fruta){
    let dicaFruta;
    
    if(fruta === "laranja"){
        dicaFruta = "Não esqueça de descascar!";
        return dicaFruta;
    }
    else if(fruta === "maça"){
        dicaFruta = "Se você tirar a casca perderá as vitaminas!";
        return dicaFruta;
    }
    else if(fruta === "banana"){
        dicaFruta = "Já vem naturalmente embalada e pronta para o consumo!";
        return dicaFruta;
    }
    else{
        dicaFruta = "Não tenho nada a dizer sobre isso.";
        return dicaFruta;
    }
}

function enviaDicaFruta(fruta, dicaFruta){
    alert("Sua fruta é: " + fruta + "\n" +dicaFruta);
}


let frutaUsuario = pedeFrutaUsuario();
let dicaFruta = verificaQualDica(frutaUsuario);
enviaDicaFruta(frutaUsuario, dicaFruta);


/* 
Faça um programa que solicite o nome de uma fruta através de um prompt. 
Baseado na entrada do usuário, implemente a seguinte lógica:
Se usuário digitou "laranja", mostre a mensagem "Não esqueça de descascar!";
Se usuário digitou "maça", mostre a mensagem "Se você tirar a casca perderá as vitaminas!";
Se usuário digitou "banana", mostre a mensagem "Já vem naturalmente embalada e pronta para o consumo!";
Caso o usuário tenha digitado qualquer outra coisa, mostre a mensagem "Não tenho nada a dizer sobre isso.".
Utilize if / else / else if para implementar essa lógica!


*/