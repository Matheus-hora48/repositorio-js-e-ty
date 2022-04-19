const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(function(valor){
  return valor % 2 === 0
})

const dobrarNumeros = numerosPares.map(function(valor){
  return valor * 2
})

const somandoTudo = dobrarNumeros.reduce(function(acumulador, valor){
  return acumulador += valor
})

console.log(numerosPares)
console.log(dobrarNumeros)
console.log(somandoTudo)