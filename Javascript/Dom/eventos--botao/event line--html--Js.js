// eventos DOM em inline ===linha

// Event inline -- 1ª forma via onclick no botao html
const digaOla = () => alert('Olá Mundo !')

// ---------------------------------------


// Event inline -- 2ª forma via getelementById no arquivo js
const obj = document.getElementById("#botao2")
obj.onclick = () => alert("Tudo Bem")
// ---------------------------------------

// Event inline -- 3ª forma by eventListener Js 
const digaAlgo = () => alert("Estou Dizendo algo")

const obj3 = document.getElementById("#botao3")
obj3.addEventListener("click", digaAlgo)
// ---------------------------------------