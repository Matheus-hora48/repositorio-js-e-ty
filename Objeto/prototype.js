//serve para colocar um parametro em um objeto que sempre que criar uma tributo ele vai vim junto

function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  //this.nomeCompleto = () => 'Originas' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.nomeCompleto = function(){
  return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Matheus', 'O.')
const data = new Date()

console.dir(pessoa1)