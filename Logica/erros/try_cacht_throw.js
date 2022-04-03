/*
function soma (x,y){
  if (typeof x !== 'number' || typeof y !== 'number'){

    //fazendo isso ele cria um erro pra quando da bo
    throw ('x e y precisa ser numeros.')
  }

  return x + y
}

try {
  console.log(soma(1,'5'))
} catch(err) {
  console(err)
}
*/

function retornaHora (data) {
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instancia date')
  }

  if (!data){
    data = new Date()
  }

  return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12:false
  })
}
try{
  const data = new Date('01-01-1970 12:58:15')
  const hora = retornaHora()
  console.log(hora)
} catch (e){
  //Tratar erro
} finally {
  console.log('Até mais')
}
