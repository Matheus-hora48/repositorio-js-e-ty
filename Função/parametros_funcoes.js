function conta(ope, acu, ...num) {
  for (let numero of num) {
    if (ope === '+') acu += num
    if (ope === '-') acu -= num
    if (ope === '*') acu *= num
    if (ope === '/') acu /= num
  }

  console.log(acu)
}

conta('+', 1, 20, 30, 40, 50 )

/*
function funcao({nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade)
}

funcao({nome: 'matheus', sobrenome : 'hora', idade: 20})


//assume um valor padrao para as variavei
function funcao(a , b = 3 , c = 4){

  console.log(a + b + c)
}

//assim ele pega o valor padrao do sistema
funcao(2, undefined , 10)


function funcao(a,b,c,d,e,f){
console.log(a,b,c,d,e,f)
}

funcao(1,2,3)


function funcao(){
  let total = 0
  for (let argumentos of arguments){
    total += argumentos
  }

  console.log(total)
}

funcao(1,2,3,4,5,6,7,8,9)
*/
