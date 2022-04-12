//factory serve para facilitar 
//o this faz referencia ao objeto que ta trabalhando

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    //get
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //set serve para alterar algum valor
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    //com o get ele vira um atributo serve so para atribuir um valor
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  }
}

const p1 = criaPessoa('Matheus', 'Hora', 1.8, 80)
p1.nomeCompleto = 'Matheus Hora dos Santo Bento'
console.log(p1.fala('Falando sobre JS'))