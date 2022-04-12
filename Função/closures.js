//função anonima
function criaFuncao(){
  const nome = 'matheus'
  return function (){
    return nome 
  }
}

const funcao = criaFuncao()
console.log(funcao)