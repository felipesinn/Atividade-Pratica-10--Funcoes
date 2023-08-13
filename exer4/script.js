function converterSegundosParaTempo(segundos) {
    const SEGUNDOS_POR_HORA = 3600;
    const SEGUNDOS_POR_MINUTO = 60;
  
    const horas = Math.floor(segundos / SEGUNDOS_POR_HORA);
    segundos %= SEGUNDOS_POR_HORA;
    const minutos = Math.floor(segundos / SEGUNDOS_POR_MINUTO);
    const segundosRestantes = segundos % SEGUNDOS_POR_MINUTO;
  
    return {
      horas: horas,
      minutos: minutos,
      segundos: segundosRestantes
    };
  }
  
  const tempoTotalSegundos = 3672;
  const tempoConvertido = converterSegundosParaTempo(tempoTotalSegundos);
  
  console.log(`${tempoConvertido.horas}:${tempoConvertido.minutos}:${tempoConvertido.segundos}`);
  

// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12