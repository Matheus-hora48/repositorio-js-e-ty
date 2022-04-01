const pessoa = {
  nome: 'Matheus',
  sobreNome: 'Hora',
  idade: 20,
  endereco: {
    rua: 'Rua Brasil',
    numero: 254   
  }
}

// Atribuição via desestruturação
const { nome: n = '', sobreNome } = pessoa

console.log(n , sobreNome)