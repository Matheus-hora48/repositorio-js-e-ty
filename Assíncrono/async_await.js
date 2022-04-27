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
  