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

/*
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
*/

//serve para retornar esperando todas as promises

//estado das promises
//pending-> pendente, logo quando ela começa
//fullfielled-> resolvida
//rejected-> rejeitada

async function executa(){
  try{
    const fase1 = await esperaAi('Fase 1', rand(0,3))
    console.log(fase1)
  
    const fase2 = await esperaAi('Fase 2', rand(0,3))
    console.log(fase2)
  
    const fase3 = await esperaAi('Fase 3', rand(0,3))
    console.log(fase3)
  
    console.log('Terminando na fase:', fase3)
  } catch(e){
    console.log(e)
  }
  
}

executa()