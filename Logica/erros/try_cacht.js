try {
  console.log('Abri um arquivo')
  console.log('Manipulei e gerou um erro')
  console.log('Fechei o arquivo')
} catch (e){
  //Serve pra tratar o erro
  console.log('Tratando erros')
} finally {
  //sempre - dando erro ou nao sem executa o finally
  console.log('Ele sempre vai ser executado')

}