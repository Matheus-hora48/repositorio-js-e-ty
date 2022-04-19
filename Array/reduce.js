//da pra fazer funções do map e filter mas nao é recomendado
//Função dele é reduzir uma array a um unico elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total =  numeros.reduce(function(acumulador, valor, indice, array){
  return acumulador += valor
}, 0 /*Valor inicial do acumalador*/)

const pares =  numeros.reduce(function(acumulador, valor, indice, array){
  if(valor % 2 === 0) acumulador.push(valor)
  return acumulador  
}, [])

const dobro =  numeros.reduce(function(acumulador, valor, indice, array){
  acumulador.push(valor * 2)
  return acumulador  
}, [])
console.log(total)
console.log(pares)
console.log(dobro)

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia',idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome:'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador
  return valor
})
console.log(maisVelha)