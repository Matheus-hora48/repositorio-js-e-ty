class ControleRemoto {
  constructor(tv){
    this.tv = tv
    this.volume = 0
  }

  //metodo de instancia
  aumentaVolume(){
    this.volume += 5
  }

  //metodo de instancia
  diminuirVolume(){
    this.volume -= 5
  }

  //metodo estatico
  static trocaPilha(){
    console.log('Pilha trocada')
  }
}

const c1 = new ControleRemoto('Samsung')
c1.aumentaVolume()
c1.aumentaVolume()
c1.aumentaVolume()
c1.aumentaVolume()
c1.aumentaVolume()

c1.diminuirVolume()

//so da pra acessar pelo nome do metodo
ControleRemoto.trocaPilha()
console.log(c1)