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

const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
]


//metodo que ja retorna um promessa resolvida ou rejeitada
function baixaPagina(){
  const emChache = true 

  if(emChache){
    return Promise.resolve('Pagina em chache')
  } else {
    return esperaAi('Baixei a página', 2000)
  }
}

baixaPagina()
.then(dadosPagina => {
  console.log(dadosPagina)
})
.catch(e => console.log(e))

/*
//serve para resolver todas as promises e no final retornar tudo 
Promise.all(promises)
.then(function(valor){
  console.log(valor)
})
.catch(e =>{
  console.log(e)
})


//serve para resolve e entregar a primeira promise que for resolvida
Promise.race(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(e => {
    console.log(e)
  })
*/