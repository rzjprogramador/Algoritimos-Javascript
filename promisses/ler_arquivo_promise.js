var fs = require('fs')

const lerArquivo = function(arquivo) {
  return new Promise(function(resolve, reject) {

    fs.readFile(arquivo, 'utf8', (err, contents) => {
      if(err) {
        reject(err)
      }
      else {
        resolve(contents)
      }
    })
  })
}

// INVOCAÇÃO CHAMADA COM ASYNC AWAIT DE MODO SEQUENCIAL 
const init = async() => {

  const contents1 = await lerArquivo("teste.txt")
  const contents2 = await lerArquivo("teste2.txt")
  const contents3 = await lerArquivo("teste3.txt")
  const contents4 = await lerArquivo("teste4.txt")

  console.log(contents1)
  console.log(contents2)
  console.log(contents3)
  console.log(contents4)
}
init()


/*
AO INVES DE INVOCAR ASSIM CONFUSO :

lerArquivo('teste.txt').then(function(contents) {
  console.log(contents)

  return lerArquivo('teste2.txt')
}).then(function(contents) {
    console.log(contents)
    
    return lerArquivo('teste3.txt')
  }).then(function(contents) {
      console.log(contents)
    
      return lerArquivo('teste4.txt')
    }).then(function(contents) {
        console.log(contents)
    })
*/




/*
CONCEITO ASSINCRONO
 Quando vc tem que chamar algo que é diferente do que uma variavel que esta em memoria vc tem que chamar assincrono
 Exemplo : vai chamar uma pagina diferente ..tem que chamar um ajax .. um assincrono desta pagina ajax
 Chama uma função que tenha um callback.

 */

 /*
 CONCEITO MONTAGEM FUNÇÃO CALLBACK
 MODO 1 -- PODE MONTAR A FUNÇÃO FORA E CHAMAR DENTRO DA OUTRA NO PARAMETRO

  const callback = function(err, contents) {
    console.log(contents)
  }

 fs.readFile('teste.txt', 'utf8', callback);
----------------------------------------------
OU A MESMA COISA == MODO 2 MODERNO com Arrow Function 
TIRA O function e coloca ao inves da chamada da funcao ...no param ..coloca a variavel dado que vai retornar a funcao e fora a arrow function e o que vai fazer

fs.readFile('teste.txt', 'utf8', (err, contents) => {
    console.log(contents);
});

 */

 /*
Criar uma Promise
Criar uma função generica lerArquivo
ela vai receber um arquivo ===== (arquivo)
ela vai retornar uma promessa ==== return new Promise
e essa promessa vai resolver ou rejeitar uma operação ==== (function(resolve, reject))

MANDAMOS LER O ARQUIVO ==== fs.readFile('teste.txt', 'utf8', (err, contents) => {
  NESTE MANDAR LER TEMOS O CALLBACK DO ARQUIVO QUE QUEREMOS LER
SE DER ALGUM ERRO CHAMAMOS O REJECT PASSANDO O ERRO QUE DEU ==== if(err) {reject(err) }
SE DÉR TUDO CERTO PASSAMOS O RESOLVE , PASSANDO O CONTEUDO QUE DEU CERTO === else { resolve(contents)} 
É O QUE FOI PASSADO NO PARAM DO CALLBACK 
   function(err, contents) (DEU ERRO, DEU CERTO) (SE DEU ERRO dou um reject, DEU CERTO dou um resolve)

*/

/*
:: CHAMADA DA FUNÇÃO -- EXECUÇÃO :::
QUERO LER O ARQUIVO : lerArquivo('teste.txt')
E COLOCO O THEN -- QUE RECEBE MA FUNÇÃO QUE RECEBE O CONTEUDO DE VOLTA -- coloco o conteudo que deu certo ==== .then(function(contents))
SE EU RECEBER ESTE CONTEUDO POSSO FAZER O QUE PRECISO COM ESTE CONTEUDO === {  console.log(contents) }

# SE QUERO QUE ESSA PROMESSA RETORNE A LEITURA DE UM PROXIMO
PRA EXECUTAR UM OUTRO THEN OU OUTRA COISA

POSSO EXECUTAR DENTRO DESSA PROMESSA ..UMA OUTRA PROMESSA
CHAMAR O ARQUIVO 2 O ARQUIVO 3 O ARQUIVO 4 ===

return lerArquivo('teste2.txt')
}).then(function(contents) {
    console.log(contents)

 

=== OBS :: TA CONFUSO ==== PODEMOS MELHORAR OTMIZAR COM ASYNC AWAIT
    QUE VAI LER SEQUENCIAL COMO EM OUTRAS LINGUAGENS ::

    // INVOCAÇÃO CHAMADA COM ASYNC AWAIT DE MODO SEQUENCIAL 
const init = async() => {

  const contents1 = await lerArquivo("teste.txt")
  const contents2 = await lerArquivo("teste2.txt")
  const contents3 = await lerArquivo("teste3.txt")
  const contents4 = await lerArquivo("teste4.txt")

  console.log(contents1)
  console.log(contents2)
  console.log(contents3)
  console.log(contents4)
}
init()




*/
