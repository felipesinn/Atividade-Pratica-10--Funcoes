
const valor = Number(prompt('digite um valor'))

function confereValor(){
    if(valor % 2 === 1){
        console.log(true)
    }else{
        console.log(false)
    }
}

confereValor()

// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.