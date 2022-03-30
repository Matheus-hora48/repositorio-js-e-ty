/*

|| -> o or precisa de pelo menos uma expressão que seja verdadeira e caso ache ele retorna ela
Valores que avalia em falso
false
0
'' " " ` `
null/undefined
NaN
*/

function falaOi() {
  return 'oi'
}
let vai = "hora"

console.log(vai && falaOi())

const corUser = 'vermelho'
const corPadrao = 'rosa'

console.log(corUser || 'rosa')