// LOOP FOR --- VARIAVEIS DENTRO DO ESCOPO FOR
// Só vaiaveis de calculo Fora do Escopo do for

// Desafio contar 3 valores enviados pelo usuario
soma = 0 

for(contador = 1;contador <= 3; contador ++) {
  capturado = parseInt(prompt(`Digite o ${contador}º valor: `))
  soma = soma + capturado
}
alert(`A soma de todos os valores é : ${soma}`)

// ===========================================


