let cpf = '070.903.015.08'
let cpfLimpo = cpf.replace(/\D+/g, '')
cpfArray = Array.from(cpfLimpo)

//fazendo a validação
function sequencia(cpf) {
  const sequencia = cpf[0].repeat(cpf.length)
  return sequencia === cpf
}

function validando(cpf) {
  if (typeof cpf === 'undefined') return false
  if (cpf.length !== 11) return false
  if (sequencia(cpf)) return false
}

const cpfParcial = cpfArray.slice(0, -2)
const regressivo = cpfParcial.length + 1

//funções que vai fz o calculo
function primeiroNumero(parcial, regressivo) {
  const total = parcial.reduce((ac, val) => {
    ac += regressivo * Number(val)
    regressivo--
    return ac
  }, 0)

  let digito = 11 - (total % 11)
  return digito > 9 ? '0' : digito
}

const pri = primeiroNumero(cpfParcial, regressivo)
const priArr = adicionadoPrimeiroDigito(cpfParcial, pri)

const segundoRegressivo = cpfParcial.length + 1
const seg = segundoNumero(cpfParcial, segundoRegressivo)
const segArr = adicionadoSegundoDigito(cpfParcial, seg)

console.log(Number(cpfLimpo))
//const teste = cpfParcial == cpfArray ? true :false

//console.log(teste)



function adicionadoPrimeiroDigito(parc, total) {
  return parc.push(total.toString())
}

function segundoNumero(parcial, regressivo) {
  const total = parcial.reduce((ac, val) => {
    ac += regressivo * Number(val)
    regressivo--
    return ac
  }, 0)

  let digito = 11 - (total % 11)
  return digito > 9 ? '0' : digito
}


function adicionadoSegundoDigito(parc, total) {
  return parc.push(total.toString())
}

function novoCpf(cpfVelho){

}
