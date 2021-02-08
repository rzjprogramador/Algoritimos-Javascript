# Descrever Funcionalidade :: MAP ::

--------------------------------------

// O QUE QUER DIZER  :: MAP ::
       MAPEAR
--------------------------------------

// CONCEITO RESUMIDO :: MAP ::
  Mapear cada item de um array , adquirir esses items com uma funcao de callback e fazer algo com todos esses items
--------------------------------------

// QUANDO USAR  :: MAP ::
      Quando precisar alterar todos items do array.

--------------------------------------

// EXEMPLO :: MAP ::

const numeros = [2, 3, 6, 5, 10]

const novoNumerosMap = numeros.map(dado1 => dado1 * 2)
console.log(novoNumerosMap)      

--------------------------------------

// OUTROS EXEMPLOS COM OUTRAS FUNCIONALIDADE :: MAP ::

const nomes = ["Reinaldo", "Renata", "Victor"]

const nomesMinusculos = nomes.map(n => n.toLowerCase())
console.log(nomesMinusculos)

--------------------------------------

// O QUE POSSO FAZER COM :: MAP ::

Modificar todos itens de um array      

--------------------------------------

// O QUE ESPERA :: MAP :: 
  por parametro espera uma funcao de callback -- e na instrução fazer algo com este argumento     

--------------------------------------

// Sintaxe :: MAP ::
      array.map(param1 => param1 * 2)

--------------------------------------

// Exemplo Otimizado :: MAP ::

// DESAFIO :: MULTIPLICAR CADA VALOR DO ARRAY POR 2

const numeros = [2, 3, 6, 5, 10]

const novoNumerosMap = numeros.map(dado1 => dado1 * 2)
console.log(novoNumerosMap)


--------------------------------------

// Exemplo Encapsulado :: MAP ::

// Ao inves de fazer um for e criar variaveis fora do escopo para fazer uma mudança em cada item da coleção usamos o map apartir do es6
................................

// MODO ANTIGO :
const numeros = [2, 3, 6, 5, 10]

let novoNumeros = []

for(let i = 0; i < numeros.length; i++) {
    novoNumeros.push(numeros[i] * 2)
}
console.log(novoNumeros)



--------------------------------------





# ==============================
