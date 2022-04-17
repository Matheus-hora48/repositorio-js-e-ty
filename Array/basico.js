/*
//valores por referencia
const nome = ['Matheus', 'Maria', 'Luis']
const novo = [...nome] //faz uma copia do array

novo.shift() //remove o primeiro valor do array
novo.unshift('Cachorro') //adiciona o novo elemento a arr no inicio
novo.pop() //remove o ultimo valor do array
novo.push('Hora') //adiciona um novo lemento a arr no final
console.log(nome.length) //tamanho do arr
console.log(novo)
*/

const nomes = ['Matheus', 'Maria', 'Luis']
const nome = nomes.join(', ')
console.log(nome)