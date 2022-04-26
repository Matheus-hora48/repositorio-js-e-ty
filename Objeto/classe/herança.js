class DispositivoEletronico {
  constructor(nome){
    this.nome = nome
    this.ligado = false
  }

  ligar(){
    if(this.ligado){
      console.log(this.nome + ' já ligado')
      return
    }

    this.ligado = true
  }

  desligar(){
    if(!this.ligado){
      console.log(this.nome + ' já desligado')
      return
    }

    this.ligado = false
  }
}

//como herdar as caracteristicas de outro objeto, assim podemos fz uma pai com todas e os filhos com coisa expessifica 
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo){
    //para recuperar a classe pai
    super(nome)
    this.cor = cor
    this.modelo = modelo
  }
}

class Tablet extends DispositivoEletronico{
  constructor(nome, temWifi){
    super(nome)
    this.temWifi = temWifi
  }

  //sempre que sobrescrever ele mosta o do filho
  ligar(){
    console.log('Vc mudou o metodo ligar')
  }
}

const d1 = new Smartphone('Samsung', 'Preto', 's20')
console.log(d1)

const t1 = new Tablet('ipad', true)
console.log(t1)