
tabuada = parseInt(prompt("Tabuada do numero ? "))
  limiteFinalTabuada = parseInt(prompt("Digite o Limite Final para sua tabuada"))

  for(i = 1; i <= limiteFinalTabuada; i++) {
    document.write(`${tabuada} x ${i} = ${(i * tabuada)}<br>`);
  }