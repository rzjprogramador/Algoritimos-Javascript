// DESAFIO :: MULTIPLICAR CADA VALOR DO ARRAY POR 2

const numeros = [2, 3, 6, 5, 10]

const novoNumerosMap = numeros.map(dado1 => dado1 * 2)
console.log(novoNumerosMap)

/*
SINTAXE : varResultado = array.map(param1 => param1 * 2)
---------------------------
FAZER ALGUMA MUDANÇA OU OPERAÇÃO COM CADA ITEM DE UMA COLEÇÃO.
----------------------------
guardar em uma variavel o array.map(param1 => param1 faça algo para cada item no caso * 2)

-----------------------------
Ao inves de fazer um for e criar variaveis fora do escopo para fazer uma mudança em cada item da coleção usamos o map apartir do es6

*/

/*
// MODO ANTIGO :
const numeros = [2, 3, 6, 5, 10]

let novoNumeros = []

for(let i = 0; i < numeros.length; i++) {
    novoNumeros.push(numeros[i] * 2)
}
console.log(novoNumeros)

*/

// ============================================

// Desafio 2 >> Transformar Nomes de uma coleção em Minusculos com map e toLowerCase

const nomes = ["Reinaldo", "Renata", "Victor"]

const nomesMinusculos = nomes.map(n => n.toLowerCase())
console.log(nomesMinusculos)