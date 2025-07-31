let categoria = "Prata"
let pontos 

switch(categoria){
    case "Ouro":
        pontos = 20
        console.log(`Categoria Ouro: - Pontuação: ${pontos} pontos`)
        break
    case "Prata":
        pontos = 15
        console.log(`Categoria Prata: - Pontuação: ${pontos} pontos`)
        break
    case "Bronze":
        pontos = 10
        console.log(`Categoria Bronze: - Pontuação: ${pontos} pontos`)      
        break
    default:
        console.log("Categoria Inválida")      
}
