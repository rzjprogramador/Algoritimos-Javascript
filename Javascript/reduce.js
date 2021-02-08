numeros = [200, 300, 600]

total = numeros.reduce((acumulador, atual) => acumulador + atual)

console.log(total)

/*
Reduce === reduzir
Sintaxe : 
resultado = array.reduce(function(acumulador , atual) {
  FAZER ALGO COM acumulador e atual exemplo soma : return acumulador + atual

  DESAFIO : SOMAR TODOS NUMEROS DO ARRAY
})

*/