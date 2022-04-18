const nome = ['Matheus', 'Maria', 'Luis', 'Eduardo', 'Júlia']

//Adicionando elemento

//push - adicionando no inicio
//const removidos = nome.splice(nome.length , 0, /*(itens que nao ser adicionados)*/ 'Hora')

//unshift - adicionando no final
nome.splice(0, 0, 'Hora')

//Removendo elemento

//passa primeiro o indice que quer remover e quantos elementos vai ser removido
//const removidos = nome.splice(4, 2)

//pop - tira o ultimo
//const removidos = nome.splice(-1, 1)

//shift - tira o primeiro
//const removidos = nome.splice(0, 1)

console.log(nome)
