//Como funciona o for

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar'
  console.log(i, par)
}

console.log('----------------------')

//Percorrendo array com for
const frutas = ['uva','maça','banana']

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice ${i}`,frutas[i])
}