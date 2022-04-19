//Ele muda o valor final da array - sempre o mesmo tamanho da origianal
//serve para modificar o retorno de uma array 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobro = numeros.map(function(valor){
  return valor * 2
})
//console.log(numerosDobro)


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia',idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome:'Wallace', idade: 47 },
];

const nomes = pessoas.map(function(valor){
  return valor.nome 
})

const idade = pessoas.map(function(valor){
  return {idade: valor.idade} 
})    

const comId = pessoas.map(function(valor, indice){
  valor.id = (indice + 1) * 1000
  return valor
})
console.log(comId)