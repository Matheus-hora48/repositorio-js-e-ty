/*
Operadores logicos
&& -> and -> E
|| -> or -> ou
! -> not -> não
*/

const usuario = 'matheus'
const senha = 'senha01'

const vaiLogar = usuario === 'matheus' && senha === 'senha012'

console.log(vaiLogar)
console.log('--------------------------')
console.log(true && true && false)
console.log(true || false || true)
console.log(!true)
console.log(!false)