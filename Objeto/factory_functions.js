const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  }
}
const comer = {
  comer() {
    console.log(`${this.nome} está cpmendo`)
  },
}
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const pessoafrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoafrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  })
}

const p1 = criaPessoa('Matheus', 'Hora')
console.log(p1)
