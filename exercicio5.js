function calcularDiasDeVida(idadeEmAnos){
    return idadeEmAnos * 365
}

let idade = 25
let diasVividos = calcularDiasDeVida(idade)

console.log(`Uma pessoa de ${idade} viveu aproximadamente ${diasVividos} dias`)