//return
function criaMult(mult){
  return function (n){
    return n * mult
  }

}

const duplica = criaMult(2)
const triplica = criaMult(3)
const quadriplica = criaMult(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

/*
function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto
  }
  return falaFrase
}

const ola = falaFrase('Olá')
const resto = fala ('mundo!')

console.log(resto)


function criaPessoa(nome, sobrenome){
  return { nome: nome, sobrenome: sobrenome}
}

console.log(criaPessoa('Matheus', 'Hora'))


function soma(a, b){
  return a + b
}

console.log(soma(2,5))
*/