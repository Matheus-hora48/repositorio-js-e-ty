function diaDaSemana(diaSemana){
  switch (diaSemana) {
    case 0:
      return diaSemanaTexto = 'Domingo'
    case 1:
      return diaSemanaTexto = 'Segunda'
    case 2:
      return diaSemanaTexto = 'Terça'
    case 3:
      return diaSemanaTexto = 'Quarta'
    case 4:
      return diaSemanaTexto = 'Quinta'
    case 5:
      return diaSemanaTexto = 'Sexta'
    case 6:
      return diaSemanaTexto = 'Sabado'
  }
}

function mesFormatado(mes){
  switch (mes){
    case 0:
      return nomeMes = 'Janeiro'
    case 1:
      return nomeMes = 'Fevereiro'
    case 2:
      return nomeMes = 'Março'
    case 3:
      return nomeMes = 'Abril'
    case 4:
      return nomeMes = 'Maio'
    case 5:
      return nomeMes = 'Junho'
    case 6:
      return nomeMes = 'Julho'
    case 7:
      return nomeMes = 'Agosto'
    case 8:
      return nomeMes = 'Setembro'
    case 9:
      return nomeMes = 'Outubro'
    case 10:
      return nomeMes = 'Novembro'
    case 11:
      return nomeMes = 'Dezembro'
  }
}

function formataData(data){
  const diaSemana = data.getDay()
  const dia = data.getDate()
  const mes = data.getMonth()
  const ano = data.getFullYear()
  const hora = data.getHours()
  const min = data.getMinutes()

  const diaSemanaTexto = diaDaSemana(diaSemana)

  const nomeMes = mesFormatado(mes)

  return `${diaSemanaTexto}-feira, ${dia} de ${nomeMes} de ${ano} \n ${hora}:${min}`


}


const data = new Date()
const dataGeral = formataData(data)
console.log(dataGeral)

const h1 = document.querySelector('.container h1')
h1.innerHTML = dataGeral