const pessoa = {
  nome: 'Matheus',
  sobrenome: 'Hora',
}

const chave = 'nome'


function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome = sobrenome

  
}

//o new cria um novo objeto
const p1 = new Pessoa('Matheus', 'Hora')
//serve para travar o objeto e empedir de mudar os codigos
Object.freeze(p1)
p1.nome = 'Outra'


console.log(p1)

//so com a notação de chave
console.log(pessoa[chave])
console.log(pessoa.sobrenome)