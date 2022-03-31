function zeroEsquerda(num){
  return num >= 10 ? num : `0${num}`
}

function mesFormatado(mes)

function formataData(data){
  const dia = zeroEsquerda(data.getDate())
  const mes = zeroEsquerda(data.getMonth())
  const ano = zeroEsquerda(data.getFullYear())
  const hora = zeroEsquerda(data.getHours())
  const min = zeroEsquerda(data.getSeconds())

  return `dia, ${dia} de mes de ${ano} <br/> ${hora}:${min}`
}

const data = new Date()
const dataGeral = formataData(data)
console.log(dataGeral)