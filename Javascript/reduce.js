numeros = [200, 300, 600]

total = numeros.reduce((acumulador, atual) => acumulador + atual)

console.log(total)

/*
Reduce === reduzir
Sintaxe : 
resultado = array.reduce((acumulador , atual) => acumulador + atual

  DESAFIO : SOMAR TODOS NUMEROS DO ARRAY
  O que espera a função Reduce : espera por 2 parametros :: 
    (acumulador, atual) retorna acumulador <alguma Operação> atual ...guarda em uma variavel

})

*/