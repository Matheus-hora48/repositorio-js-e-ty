function criaPessoa(nome, sobrenome){

  const pessoafrototype = {
    falar(){
      console.log(`${this.nome} está falando`)
    },

    comer(){
      console.log(`${this.nome} está cpmendo`)
    },

    beber(){
      console.log(`${this.nome} está bebendo`)
    },
  }

  return{
    nome,
    sobrenome
  }
}

const p1 = criaPessoa('Matheus', 'Hora')