//Assim se cria um array
//Cada elemento de um arr tem um indice
const frutas = ['uva', 'maça' , 'banana']

//para adicionar itens no inicio
frutas.unshift('melão')

//para adicionar itens no final da arr
frutas.push('melancia')

//serve para remover o ultimo elemento de uma arr
const removidoFim = frutas.pop()

//serve para remover o primeiro elemento
const removidoIni = frutas.shift()

//o slice serve para escolher onde vc quer percorrer esse arr
console.log(frutas.slice(0,2))

console.log(removidoIni)
console.log(removidoFim)
console.log(frutas)
//para saber o tamanho do arr
//console.log(frutas.length)