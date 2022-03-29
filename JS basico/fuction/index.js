//criando um função
//function saudacao(nome) {
//  return `Bom dia! ${nome}`
//}

function soma(x,y){
  const resul = x + y

  //quando tem return ela nao executa mais nada  abaixo dele
  return resul 
}

const raiz = ((n) => {
  return n**0.5
})

console.log(raiz(25))

console.log(soma(2,5))
console.log(soma(7,8))
console.log(soma(9,3))