let cpf = '00747303800'
let cpfLimpo = cpf.replace(/\D+/g, '')
cpfArray = Array.from(cpfLimpo)

let cpfParcial = cpfArray.slice(0, -2)
let regressivo1 = cpfParcial.length + 1
const total = cpfParcial.reduce((ac, val) => {
  ac += (regressivo1* Number(val))
  regressivo1--
  return ac
}, 0)


let digito = 11 - (total % 11) 
if(digito > 9) {
  digito = 0
} else digito


let cpfParcial2 = cpfParcial
cpfParcial2.push(digito.toString())
regressivo2 = cpfParcial.length + 1



const total2 = cpfParcial2.reduce((ac, val) => {
  ac += (regressivo2* Number(val))
  regressivo2--
  return ac
},0)

let digito2 = 11 - (total2 % 11) 
if(digito2 > 9) {
  digito2 = 0
} else digito2

cpfParcial2.push(digito2.toString())
console.log(cpfArray)
console.log(cpfParcial2)

const teste = cpfArray = cpfParcial2 ? true: false 
