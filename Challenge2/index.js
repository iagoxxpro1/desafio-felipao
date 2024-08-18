let vitoria = 152
let nivelHeroi = ""

if (vitoria <10){
    nivelHeroi="Ferro"
}   else if (vitoria >= 11 && vitoria <=20){
    nivelHeroi="Bronze"
}   else if (vitoria >= 21 && vitoria <=50){
    nivelHeroi="Prata"
}   else if (vitoria >= 51 && vitoria <=80){
    nivelHeroi="Ouro"
}   else if (vitoria >= 81 && vitoria <=90){
    nivelHeroi="Diamante"
}   else if (vitoria >= 91 && vitoria <=100){
    nivelHeroi="Lendário"
}   else if (vitoria >= 101){
    nivelHeroi="Imortal"
}

function saldoVitorias(vitoria, derrota){
    return vitoria - derrota 

}

let resultado = saldoVitorias(10, 5)
console.log(`O Herói tem saldo de ${resultado} e está no nível ${nivelHeroi}`)

