function mostraHora(){
  let data = new Date()

  return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12:false
  })
}

//serve para fazer um loop e executar a cada hora
const time = setInterval(function () {
  console.log(mostraHora())
}, 1000)

//essa serve para executar em um momento especifico
setTimeout( function(){
  clearInterval(timer)
}, 3000)

setTimeout(function(){
  console.log('Olá mundo')
}, 5000)