//1º MONTAR USUARIO
quant_de_usuario = Number(prompt(`Digite a quantidade de usuarios`))

usuarios = []

for(nome = 0; nome < quant_de_usuario; nome++) {
  grupo_usuario = {}
  grupo_usuario.nome = prompt(`Digite o nome do ${nome + 1} º usuario `)

  // NOTAS
  grupo_usuario.notas = []

  sexo = prompt(`Digite o seu genero \n M para Masculino \n F para Feminino`)
  s_sexo = (sexo.trim().toUpperCase() == "M" ? "M" : "F") 
  // masculino ou feminino
    grupo_usuario.sexo_mostra = (s_sexo == "M" ? "do usuario" : "da usuaria")
  grupo_usuario.tipoUser = (s_sexo == "M" ? "O usuario" : "A usuaria")


// NOTAS ====================================
  somaNotas = 0
  for(nota_index = 0; nota_index < 2; nota_index++) {
    nota_usuario = Number(prompt(`Digite a ${nota_index + 1}ª nota ${grupo_usuario.sexo_mostra}  ${grupo_usuario.nome} `))

    somaNotas += nota_usuario
    grupo_usuario.notas.push(nota_usuario)
  
   }

   grupo_usuario.media = somaNotas / grupo_usuario.notas.length
   usuarios.push(grupo_usuario)

}
// MEDIA
somaGeralMedia = 0
for(usuario_index = 0; usuario_index < usuarios.length; usuario_index++) {
  grupo_usuario = usuarios[usuario_index]

  document.write(`${grupo_usuario.tipoUser} ${grupo_usuario.nome} <br> `)
  
  somaDasNotas = 0
  
  // Mostrando notas
  for(nota_index = 0; nota_index < grupo_usuario.notas.length; nota_index++) {
    document.write(`obteve a ${nota_index + 1}ª nota = ${grupo_usuario.notas[nota_index]} <br><br> `)
  }

  somaGeralMedia += grupo_usuario.media
  document.write(`A media ${grupo_usuario.sexo_mostra} ${grupo_usuario.nome} 
    é : ${grupo_usuario.media} <br><hr> `)
}

mediaGeral = somaGeralMedia / usuarios.length

// ============ MENSAGENS =======================
document.write(`Quantidade de usuarios : ${usuarios.length} <br> `)
document.write(`Média da pesquisa de todos usuarios : ${mediaGeral} <br><br> `)

// CONTROLES

  if(mediaGeral >= 100) {
    document.write(`PARABENS SUA MÉDIA É ${media.toFixed(2)}`)
  }
  else if (mediaGeral >= 50 && mediaGeral < 100) {
    document.write(`Muito bem vamos melhorar sua media é ${media.toFixed(2)}`)
  }
  else if (mediaGeral >= 20 && mediaGeral < 50) {
    document.write(`Esta abaixo da media ... sua media é ${media.toFixed(2)}`)
  }
  else{
    document.write(`Pessoal TA MUITO RUIM sua media é ${media.toFixed(2)}`)  
  }