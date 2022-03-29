let num = Number(prompt('Digite um numero'))

let raiz = Math.pow(num, 2)
let int = Number.isInteger(num)
let nan = isNaN(num)
let maior = Math.ceil(num)
let menor = Math.floor(num)
let casa = num.toFixed(2)

document.getElementById('numero').innerHTML = num
document.getElementById('texto').innerHTML = 
`
<p>Raiz quadrada: ${raiz}</p>
<p>${num} é inteiro: ${int}</p>
<p>${num} é NaN: ${nan}</p>
<p>Arendodado pra baixo:  ${menor}</p>
<p>Arendodado pra cima:  ${maior}</p>
<p>Com duas casa decimais:  ${casa}</p>
`

console.log(int)