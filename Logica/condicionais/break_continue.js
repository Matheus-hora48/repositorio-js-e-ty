const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros){
  
  //usandop o continue quando ele acha oq for ele pula pra proxima e nao realiza a ação
  if(numero === 2){
    continue
  }

  //quando tem o break ele quebra a ação das coisas e nao continua o laço
  if(numero === 7){
    break
  }

  console.log(numero)
}