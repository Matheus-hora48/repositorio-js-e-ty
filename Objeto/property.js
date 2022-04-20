function Produto(nome, preço, estoque){
  this.nome = nome
  this.preço = preço
  this.estoque = estoque

  //serve para definir propriedades no objeto
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor da chave
    writable: false, //pode alterar a chave ou nao 
    configurable: true, //pode reconfiguravel a chave
  })
}

//mais complexo
function Produto(nome, preço, estoque){
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor da chave
    writable: false, //pode alterar a chave ou nao 
    configurable: true, //pode reconfiguravel a chave
  })

  Object.defineProperty(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //valor da chave
      writable: true, //pode alterar a chave ou nao 
      configurable: true, //pode reconfiguravel a chave
    },
    preco: {
      enumerable: true, //mostra a chave
      value: preco, //valor da chave
      writable: true, //pode alterar a chave ou nao 
      configurable: true, //pode reconfiguravel a chave
    }
  })
}

const p1 = new Produto('Camisa', 20, 4)
console.log(p1)