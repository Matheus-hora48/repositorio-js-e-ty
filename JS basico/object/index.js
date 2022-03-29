const pessoa ={
  nome: 'matheus',
  sobreNome: 'hora',
  idade: 18,

  fala(){

    //o this remete ao objeto que ta inserido
    console.log(`${this.nome} ${sobreNome} está falando oi...`)
  },

  aumentarIdade(){
    this.idade ++
  }
};

pessoa.fala();
pessoa.aumentarIdade();