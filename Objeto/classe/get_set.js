class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }

  set nomeCompleto(valor){
    valor = valor.split(' ')
    this.nome = valor.split()
    this.sobrenome = valor.join(' ')
  }
}

const p1 = new Pessoa('Matheus', 'Hora')
p1.nomeCompleto = 'dos Santos Bento'
console.log(p1.nomeCompleto)


/*
const _velocidade = Symbol('velocidade')
class Carro {
  constructor(nome, velocidade){
    this.nome = nome
    this[_velocidade] = 0
  }

  set velocidade(valor){
    if(typeof valor !== 'number') return
    if(valor >= 100 || valor <= 0)return
    this[_velocidade] = valor
  }

  //returnando a velocidade
  get velocidade(){
    return this[_velocidade]
  }

  acelerar(){
    if(this[_velocidade] >= 100) return
      this[_velocidade]++
  }

  freiar(){
    if(this[_velocidade] <= 0) return
      this[_velocidade]--
  }

}

const c1  = new Carro('Fusca')

c1.velocidade= 35

console.log(c1.velocidade)
*/