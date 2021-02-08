# Descrever Funcionalidade CALLBACK

// O QUE QUER DIZER  :: CALLBACK ::
      callback === ligar de volta
--------------------------------------

// CONCEITO RESUMIDO :: CALLBACK ::
      executar depois
--------------------------------------

// QUANDO USAR  :: CALLBACK ::
      depois de um metodo em um array >> usar um parametro como função para fazer algo com o parametro que virou argumento na instrução dentro da funcao
--------------------------------------

// EXEMPLO :: CALLBACK ::
      array.filter(param1 => param1.includes("minha busca no array"))
--------------------------------------

// O QUE POSSO FAZER COM :: CALLBACK ::
      Uma função por parametro
--------------------------------------

// O QUE ESPERA :: CALLBACK :: 
      uma função por parametro
--------------------------------------

// Sintaxe :: CALLBACK ::
      (param => param/argumento.metodo)
--------------------------------------

// Exemplo Otimizado :: CALLBACK ::

array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

novoArray = array.filter(param => param.includes("pais"))

console.log(novoArray)


--------------------------------------

// Exemplo Encapsulado :: CALLBACK ::

--------------------------------------

# ==============================