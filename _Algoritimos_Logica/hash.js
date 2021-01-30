// ===== HASH -- OBJETO DE DADOS ESTRUTURADOS ==========

// Criando um array vazio alunos, para armazenar hash {dados estruturados de aluno}

alunos = []

aluno = {
    nome: "Reinaldo",
    notas: [10, 10],
    media: 10

}

// SÓ É POSSIVEL CRIAR UMA COLEÇÃO DE HASH DENTRO DE UM ARRAY
// Adicionando o hash de aluno no array alunos
// Padrao : <array>.push(<hash>) -- Narrativa: no array tal,pushar o hash tal
alunos.push(aluno)

// Acessando propriedades do array
// Padrao : <array>[indice].item
alunos[0].nome

// ==================================
// Criando outro Hash 
aluno2 = {
  nome: "Gustavo",
  notas: [20, 20],
  media: 20
}
// Adicionando no array alunos[]
alunos.push(aluno2)

// Acessando propriedade do hash que esta dentro do array  
alunos[1].nome

// Acessando atributo do hash
// Padrao: <hash>.<atributo>
aluno.notas
aluno2.nome

/*
COM HASH VC CONSEGUE ESTRUTURAR DADOS
É UMA ESTRUTURA ONDE VC GUARDA EM UM OBJETO DADOS ESTRUTURADOS

SE VC QUISER MOSTRAR DADOS DE CADA USUARIO VC CONSEGUE COM HASH {} PQ OS DADOS ESTARAO ESTRUTURADOS POR ENTIDADE

VC CRIA UMA UNICA VARIAVEL E ESTRUTURA SEU CONTEUDO COM DADOS EM chave e valor

*/
