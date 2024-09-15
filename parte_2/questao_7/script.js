function pedeCorRoupa(tipoRoupa){
    let corRoupa = prompt("Qual a cor da sua " + tipoRoupa +"?");
    return corRoupa;
}

function verificaLook(corCalca, corCamiseta){
    let comentarioLook;
    corCalca = corCalca.toLowerCase();
    corCamiseta = corCamiseta.toLowerCase();

    if (corCalca === "amarela" && corCamiseta === "vermelha") {
        comentarioLook = "Ketchup e mostarda!";
        return comentarioLook;
    } 
    else if (corCalca === "preta" && corCamiseta === "amarela") {
        comentarioLook = "Agora você é uma abelha!";
        return comentarioLook;
    }
    else if (corCalca === "jeans" && corCamiseta === "branca") {
        comentarioLook = "Look clássico! Não tem como errar";
        return comentarioLook;
    }
    else {
        comentarioLook = "Hmm, nada a comentar...!";
        return comentarioLook;
    }

}

function comentaLook(comentario){
    alert(comentario);
}

calca = pedeCorRoupa("Calça");
camiseta = pedeCorRoupa("Camiseta");

comentarioLook = verificaLook(calca, camiseta);

comentaLook(comentarioLook);