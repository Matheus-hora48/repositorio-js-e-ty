function rand(min, max) {
  min *= 1000
  max *= 1000

  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    //reject serve para tratar os erros
    if (typeof msg !== 'string') {
      reject('BAD VALUE')
      return
    }

    //serve para resolve
    setTimeout(function () {
      resolve(msg)
    }, tempo)
  })
}

esperaAi('Fase 1', rand(0,3))
.then(valor => {
  console.log(valor)
  return esperaAi('Fase 2' , rand(0,3))
})
.then(fase =>{
  console.log(fase)
  return esperaAi('Fase 3', rand(0,3))
})
.then(fase =>{
  console.log(fase)
})
.catch(e => console.log(e))