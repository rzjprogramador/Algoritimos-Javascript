const array = [
  "Credito", "R$ 200", "R$ 400", "Contas a Pagar", "R$ 300", "R$ 400", "Meus dados"
]

const novoArray = array.filter(novo => novo.includes("R$ 400"))
console.log(novoArray)

/*
FILTRANDO STRING DO ARRAY
- criamos o array com varias strings
- vamos filtrar este array com filter e guardar numa nova variavel 
  --> ex: novoArray = array.filter()
Este metodo filter espera uma funcao de calback que é sme nome e com um parametro e o argumento
parametro que queremos ter de volta , argumento o que queremos que faça
novo => novo.includes("R$ 400") 
  novo é o nome do parametro => que vai retornar novo.includes(aO que quero)

  Então no calback 
  defino o parametro que quero  e => retorno este parametro com o argumento 
      de fazer a função que eu quero ..quero includes("R$ 400") 


*/
// Treinando novo filter :: Retirar Renta e Reinaldo e colocar em var pais --
// Obs buscar por pais ..porque ainda nao consegui buscar mais que 1 item do array de uma vez

const pessoas = ['Pais Reinaldo', 'Pais Renata', 'Leonardo', 'Gustavo']

const pais = pessoas.filter(nomes => nomes.includes('Pais'))
console.log(pais)
