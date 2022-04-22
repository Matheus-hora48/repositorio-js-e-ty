//metodos fora da função construtora
function Produto(nome, preco){
  this.nome = nome,
  this.preco = preco
}

Produto.prototype.desconto = function(percentual){
  this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual/100))
}

const p1 = new Produto('Camisa', 80)

const p2 = {
  nome: 'Caneca', 
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(20)

const p3 = Object.create(Produto.prototype)

console.log(p1)
console.log(p2)
console.log(p3)

/*
const objA = {
  chaveA: 'A'
}

const objB = {
  chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

//Passar o prototype de um obj para outro
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveC)

*/