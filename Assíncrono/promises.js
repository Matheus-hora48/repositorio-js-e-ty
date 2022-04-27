//promises serve para quando tiver funções que demora pra responder ela vai esperar todas terminar pra dar um resultadodo

esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi('22222', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 3', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log('ERRO', e)
  })
