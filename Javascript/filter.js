array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

novoArray = array.filter(param => param.includes("pais"))

console.log(novoArray)

/*
DESAFIO : USAR MAIS QUE UM METODO --
FERRAMENTA : usado FUNÇÃO CALBACK

CONCEITO TECNICO: 
primeiro metodo e como parametro uma funcao anonima com 1 parametro como callback => que retorna este parametro como argumento/instrucao para fazer algo com o resultado desta primeira funcao é o callback


 FERRAMENTAS DENTRO : 
 -->Metodos usados metodo1 = filter(para filtrar o array)

 --> metodo2 = includes(ver se tem incluso no array o que queremos chamado por parametro)

SINTAXE :: armazenaResultado = array.metodo1(param => retorna param.metodo2("Resposta-Param"))
console.log(novoArray)
 

 */