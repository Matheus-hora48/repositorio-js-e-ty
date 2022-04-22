/*
//Retorna uma array com os objeto

const produto = { nome: 'Caneca', preco: 3.5 }
for(let [chave, valor] of Object.entries(produto)){
  console.log(chave, valor)
}
console.log(Object.entries(produto))


//para retornar os valores 
const produto = { nome: 'Caneca', preco: 3.5 }
console.log(Object.values(produto))



//Propriedades do objeto

const produto = { nome: 'Caneca', preco: 3.5 }
//ele vai mostrar as propriedades de um objeto 
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))


//Copiando objeto

//como copiar propriedades e modificar um objeto
const produto = { nome: 'Caneca', preco: 3.5 }
//const outra = {...produto, material: 'Vidro'}

//com a função assign sera o mesmo resultado a cima
const outra = Object.assign({}, produto, { material: 'Vidro' })

outra.nome = 'Outro nome'
console.log(produto)
console.log(outra)
*/