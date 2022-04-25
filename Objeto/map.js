const pessoas = [
    {id: 3, nome: 'Matheus'},
    {id: 2, nome: 'Wisch'},
    {id: 1, nome: 'Luis'}
]

// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map()
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

for(const pessoa of novasPessoas.keys()){
    console.log(pessoa)
}


console.log(novasPessoas)