let valorCompra = 1000
let desconto = 0 

if (valorCompra >= 1000){
    desconto = 0.20
} else if (valorCompra >= 500){
    desconto = 0.10
} else {
    desconto = 0
}

let valorFinal = valorCompra - (valorCompra * desconto)
console.log(`Valor Final = R$ ${valorFinal}`)
console.log(`Desconto Aplicado ${desconto * 100}`)