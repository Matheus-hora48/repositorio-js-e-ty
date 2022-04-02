const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Hora',
  idade: 30
}
//Retorna o índice ou chaves(string, array ou objeto)
//vc vai pegar o indece e o valor que ta no indice
for(let i in pessoa){
  console.log(i , pessoa[i])
}