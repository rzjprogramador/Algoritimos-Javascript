# Descrever Funcionalidade :: FILTER  ::

// O QUE QUER DIZER  :: FILTER  ::
    filtrar
--------------------------------------

// CONCEITO RESUMIDO :: FILTER  ::
    filtrar dados de um array 
--------------------------------------

// QUANDO USAR  :: FILTER  ::
    quando precisar obter todos dados ou personalizados de um array  

--------------------------------------

// EXEMPLO :: FILTER  ::

array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

arrayNovoFiltrado = array.filter(dados => dados)

console.log(arrayNovoFiltrado)

--------------------------------------

// OUTROS EXEMPLOS COM OUTRAS FUNCIONALIDADE :: FILTER ::

// Exemplo filter com outra função por parametro
array2 = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

novoArray = array2.filter(param => param.includes("pais"))

console.log(novoArray)

--------------------------------------

// O QUE POSSO FAZER COM :: FILTER  ::
      filtrar todos dados existentes no array

--------------------------------------

// O QUE ESPERA :: FILTER  ::
      uma funcao callback por parametro --- e recuperar no argumento dentro da funcao esses dados

--------------------------------------

// Sintaxe :: FILTER  ::
      array.filter(dados => dados) 
      --- antes guardar numa var o resultado para usar fora do escopo

--------------------------------------

// Exemplo Otimizado :: FILTER  ::

array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

arrayNovoFiltrado = array.filter(dados => dados)

console.log(arrayNovoFiltrado)


--------------------------------------

// Exemplo Encapsulado :: FILTER  ::


--------------------------------------



# ==============================
