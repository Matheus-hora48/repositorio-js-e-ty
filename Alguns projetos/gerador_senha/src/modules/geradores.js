const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;~^[]!@#$%*()_+=-'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function gerarSenha(qtd, Maiuscula, minusculas, numeros, simbolos){
  const senhaArr = []
  qtd = Number(qtd)

  for(let i = 0; i < qtd; i++){
    Maiuscula && senhaArr.push(geraMaiuscula())
    minusculas && senhaArr.push(geraMinuscula())
    numeros && senhaArr.push(geraNumero())
    simbolos && senhaArr.push(geraSimbolo())
  }

  return senhaArr.join('').slice(0, qtd)
}

geraSenha(10, true)