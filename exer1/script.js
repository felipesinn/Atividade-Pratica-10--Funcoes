// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).
function calcularMedia(nota1, nota2, nota3, letra){
    let media
    const peso1 = 5
    const peso2 = 3
    const peso3 = 2
    const mediaPeso = peso1 + peso2 + peso3

    if(letra == 'A') {
         media = (nota1 + nota2 + nota3) / 3
    }else if (letra =='P'){
        media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / mediaPeso
   }else {
        return "Letra inválida! Digite 'A' para média aritimética ou 'P' para média ponderada"
   }
   return media
}

let nota1 = 9
let nota2 = 8
let nota3 = 9
let letra = "P"

let media = calcularMedia(nota1, nota2, nota3, letra)
console.log('A média do aluno é:',  media);