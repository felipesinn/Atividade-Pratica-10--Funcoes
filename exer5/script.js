
function verificarNumeroPerfeito(num) {
    let somaDivisores = 0;
  
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        somaDivisores += i;
      }
    }
  
    return somaDivisores === num;
  }
  function verificarNumPerfeito(num) {
    return verificarNumeroPerfeito(num) ? `${num} é um número perfeito!` : `${num} não é perfeito!`;
  }
  console.log(verificarNumPerfeito(6)); // 6 é um número perfeito!
  console.log(verificarNumPerfeito(28)); // 28 é um número perfeito!
  console.log(verificarNumPerfeito(12)); // 12 não é perfeito!
  

// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
