//Serve para filtar o arr e retrona uma array  com a mesma quantidade de elementos ou menor 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Filtando numeros maiores que 10 da
function callbackFilter(valor, indice, array){
  return valor > 10
}
const numFiltrado = numeros.filter(callbackFilter)

//Forma para simplificar
const numFiltradoo = numeros.filter(valor => valor > 10 )



const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia',idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome:'Wallace', idade: 47 },
  ];

//nomes com mais de 5 letras
const pessoasNome = pessoas.filter(function(obj){
  return obj.nome.length >= 5
})

//maior que 50 anos
const idade = pessoas.filter(function(obj){
  return obj.idade > 50
})

//terminando com a
const terminaA = pessoas.filter(function(obj){
  return obj.nome.toLowerCase().endsWith('a')
})

console.log(terminaA)
console.log(idade)