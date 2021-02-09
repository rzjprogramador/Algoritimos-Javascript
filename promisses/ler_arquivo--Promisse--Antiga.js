var fs = require('fs');
 
// Promisses Aninhadas ==== enviavel - evitar === no callback de um chamar o outro == ERA O CODIGO ANTIGO
let c1 = ''
let c2 = ''
let c3 = ''
let c4 = ''


fs.readFile('teste.txt', 'utf8', (err, contents) => {
  c1 = contents
  console.log(contents);

    fs.readFile('teste2.txt', 'utf8', (err, contents) => {
      c2 = contents
      console.log(contents);

      fs.readFile('teste3.txt', 'utf8', (err, contents) => {
        c3 = contents
        console.log(contents);

        fs.readFile('teste4.txt', 'utf8', (err, contents) => {
          c4 = contents
          console.log(contents);


            console.log(`${c1} == ${c2} == ${c3} == ${c4}`)
        });
      });
    });
});




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
