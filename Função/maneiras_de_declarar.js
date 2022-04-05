//Declaração de função
function falaOi() {
  console.log('oi')
}
falaOi()

//voce pode criar uma função com um dado

const dado = function (){
  console.log('sou um dado')
}

function executaFuncao(funcao){
  console.log('Executando funcao a baixo')
  funcao()
}


executaFuncao(dado)

//arrow function
const funcaoArr = () => {
  console.log('Arrow function')
}

funcaoArr()

//dentro de um objeto
const obj = {
  falar () {
    console.log('falando')
  }
}