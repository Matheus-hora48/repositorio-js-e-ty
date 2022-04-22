//como copiar propriedades e modificar um objeto
const produto = {nome: 'Caneca', preco: 3.50}
const outra = {...produto, material: 'Vidro'}

//com a função assign sera o mesmo resultado a cima
outra.nome = 'Outro nome'
console.log(produto)
console.log(outra)