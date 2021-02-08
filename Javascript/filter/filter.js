
// Exemplo Filter

array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

arrayNovoFiltrado = array.filter(dados => dados)

console.log(arrayNovoFiltrado)


// ----------------------------


// Exemplo filter com outra função por parametro
array2 = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

novoArray = array2.filter(param => param.includes("pais"))

console.log(novoArray)