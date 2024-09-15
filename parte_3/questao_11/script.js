function converteHorasPraSegundo(nHoras){
    let segundos = nHoras * 3600;
    return segundos;
}

let horas = Number(prompt("Insira aqui a quantidade de horas que eu te direi quantos segundos tem!"));
let segundos = converteHorasPraSegundo(horas);

alert(horas +" horas possuem " + segundos + " segundos!");
