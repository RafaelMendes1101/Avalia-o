let listaDeNumeros = [5, 20, 40, 60 , 10]
let maiorNumero = listaDeNumeros[0]

for( const numero of listaDeNumeros){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}    
console.log(`maior numero na lista é ${maiorNumero}`)