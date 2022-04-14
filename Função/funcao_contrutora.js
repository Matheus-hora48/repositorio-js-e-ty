//retorna objeto constroi objeto
function Pessoa(Nome, pessoas){
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function(){
    console(this.nome + ' : sou um método')
  }
}
const p1 = new Pessoa ('Matheus', 'Hora')