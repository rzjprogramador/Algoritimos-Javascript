
/*
    DESAFIO MEDIA

    Faça um programa que solicite o nome de tres clientes
    apos solicitar o programa
    tres valores que poderam ser numeros quebrados apos capturar os numeros que serao do cliente cli1 , cli2 e cli3
    apos capturar os numeros e mostrar a opção
   
    - se o valor for maior que 100
        mostrar mensagem: parabens a media de voces é maior que 100

    - se der menor que 50 ,mostrar mensagem : muito bem voce esta na media vamos melhorar
    - se der abaixo de 50 ate 20 ,mmostrar ensagem : voce precisa realmente melhorar
    - se o valor der abaixo de 20 a mostrar mensagem : é isso realmente que voces querem ESTA MUITO RUIM !

    */




DICAS:
  FAZER LOOP DE PERGUNTAS :
  TUDO QUE FOR CALCULO TEM QUE FAZER DENTRO DO FOR
  E ARMAZENAR O RESULTADO EM UM ESPAÇO MEMORIA (ONDE VC CONSEGUE COLOCAR VARIOS ESPAÇOS LÁ
  CONSEGUE COLOCAR O PRIMEIRO , O SEGUNDO ,TERCEIRO,...)

  CONCEITOS:
  ===============================
  DICAS DE OURO :
  FAZER SEMPRE DE FORMA FATIADA --PROBLEMA A PROBLEMA ISOLAR E TESTAR NO CONSOLE

  LOOP : SE ESTA FAZENDO UM LOOP PARA CAPTURAR DADOS É SÓ RPA CAPTURAR DADOS
  SE FOR UM LOOP PARA DESCOBRIR UM VALOR ..É PRA SÓ DESCOBRIR UM VALOR

  ex: dentro do loop :: media += valorClientes[i] << É UM CALCULO EM CADA INTERACAO- ARMAZENADO EM UMA VARIAVEL PRA USAR DEPOIS



  1º CAPTURAR DENTRO DO FOR --- E ARMAZENAR FORA DO FOR :::
  fazer um array vazio antes do for para armazenar as perguntas capturadas
  exemplo:     valorClientes = []
  - se estou capturando com prompt e guardando na var valor , 
  vou fazer um push nesta var para colocar no meu array vazio , que preparei para receber os capturados
  
  exemplo :   
  // ARMAZENANDO OS NUMEROS DO PROMPT NO ARRAY valorClientes[]
  valorClientes.push(valor)
===============================

  2º - FORA DO FOR :: FAZER CALCULOS COM CAPTURADOS --SOMAR E ARMAZENAR EM VAR 
  FORA DO FOR FAZER A MEDIA (PORQUE AINDA NAO TENHO LA DENTRO TODOS VALORES CAPTURADOS)
  
  // Armazenar na var media = A Soma dos 3 valores digitados no prompt que esta agora no array 
   // Obs para exatidao no calculo usar () para isolar ordem de precedencia, senao altera o resultado 

   media = (valorClientes[0] + valorClientes[1] + valorClientes[2]) /3


  */


  




// FORA DO FOR ::: FAZER CALCULOS COM CAPTURADOS E ATRIBUIR A VAR 
 // Armazenar na var media = A Soma dos 3 valores digitados no prompt que esta agora no array 
 // Obs para exatidao no calculo usar () para isolar ordem de precedencia, senao altera o resultado 
  
 // Resultado de media estatica refatorar por dinamica
 //media = (valorClientes[0] + valorClientes[1] + valorClientes[2]) /3

 // MEDIA DINAMICA conforme tamanho do valor digitado pelo cliente


 minha media começa com 0
no laço for ..O i meu interator começa com 0 e enquanto meu indice interador for Menor 
que o tamanho de valor enviado pelo Cliente , fazer meu interador mais 1 vez, pra crescer mais 1

Então neste loop media sera igual ela mesma que era 0 + valor enviado Clientes a cada interação ..por isso coloca o [i]

Fora do for : Faço o calculo media / pelo tamnho total de valor enviado e guardo na mesma varavel media




// CLIENTES DINAMICO VIA DECISAO USUARIO : Perguntando ao usuarios a Quantidade de CLIENTES que pode enviar informações
  
  CONCEITOS :
  Primeiro precisa perguntar "Quantas pessoas vão participar ? " e GUARDAR NUMA VAR
  Assim nesta var terei a quantidade retornada da pergunta
  Fazer antes fora do for , pq se vc quer fazer um loop a pergunta pra saber o que fazer no loop ..a pergunta tem que ser fora do loop


