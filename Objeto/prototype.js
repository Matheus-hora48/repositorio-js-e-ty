function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Matheus', 'O.')
const data = new Date()