// DESAFIO :: MULTIPLICAR CADA VALOR DO ARRAY POR 2

const numeros = [2, 3, 6, 5, 10]

const novoNumerosMap = numeros.map(dado1 => dado1 * 2)
console.log(novoNumerosMap)

// ============================================


// Desafio 2 >> Transformar Nomes de uma coleção em Minusculos com map e toLowerCase

const nomes = ["Reinaldo", "Renata", "Victor"]

const nomesMinusculos = nomes.map(n => n.toLowerCase())
console.log(nomesMinusculos)