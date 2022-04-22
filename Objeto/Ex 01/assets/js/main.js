let cpf = '070.903.015-08'
let cpfLimpo = cpf.replace(/\D+/g, '')

cpfArray = Array.from(cpfLimpo)
for(let num = 10; num >= 2; num--){
  cpfArray.forEach(val =>{
    console.log(num,val)
  })
}
