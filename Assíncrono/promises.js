//promises serve para quando tiver funções que demora pra responder ela vai esperar todas terminar pra dar um resultadodo
function rand(min, max){
  min *= 1000
  max*= 1000

  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    //reject serve para tratar os erros
    if(typeof msg !== 'string') reject('BAD VALUE')

    //serve para resolve
    setTimeout(function() {
      resolve(msg)
    },tempo)
  })
}

esperaAi('Frase 1', rand(1,3))
.then(resposta =>{
  console.log(resposta)
  return esperaAi('22222', rand(1,3)) 
})
.then(resposta => {
  console.log(resposta)
  return esperaAi('Frase 3', rand(1,3)) 
})
.then(resposta => {
  console.log(resposta)
})
.catch(e =>{
  console.log('ERRO',e)
})