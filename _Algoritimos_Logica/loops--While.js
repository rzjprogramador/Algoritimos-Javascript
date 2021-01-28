// LOOP COM WHILE --ONDE AS VARIAVEIS SAO INICIADAS FORA DO LOOP

contador = 1
soma = 0

while(contador <= 3) {
    numero = parseInt(prompt(`Digite o ${contador} valor : `))
    soma = soma + numero
    contador++
}
alert(`A soma de todos valores foi : ${soma}`)