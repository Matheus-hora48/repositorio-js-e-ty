//serve para percorrer uma array
const a1 = [1,2,3,4,5,6,7,8,9]
let total = 0
a1.forEach(function(valor, indice, array){
  total += valor
})
console.log(total)