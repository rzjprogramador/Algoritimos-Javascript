/*
Object create === criador de objetos javascript

*/

const pessoa = {
  nome: '',
  idade: 0
}

// Criando novo objeto apartir do objeto pessoa
p2 = Object.create(pessoa)
p2.nome = 'Gustavo',
p2.idade = 10

// Criando novo objeto apartir do objeto pessoa
p3 = Object.create(pessoa)
p3.nome = 'Leonardo',
p3.idade = 04

console.log(p2)
console.log(p2.nome)
console.log(p2.idade)

console.log(p3)
console.log(p3.nome)
console.log(p3.idade)