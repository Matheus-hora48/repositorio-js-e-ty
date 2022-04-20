function Produto(nome, preço, estoque){
  this.nome = nome
  this.preço = preço
  this.estoque = estoque

  //serve para definir propriedades no objeto
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor da chave
    //receber o valor
    get: function(){
      return estoquePrivado
    },
    //seta alguma coisa nele
    set: function(valor){
      if(typeof valor !== 'number'){
        throw new TypeError('Mensagem')
      }
      estoquePrivado = valor
    }
  })
}


const p1 = new Produto('Camisa', 20, 4)
console.log(p1)