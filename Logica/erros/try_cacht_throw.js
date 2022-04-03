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
