//função invocada automaticamente quando inicia o codigo sem precisar chamar
(function(){
  const sobrenome = 'Hora'
  function criaNome(nome){
    return nome + ' ' + sobrenome
  }

  function falaNome(){
    console.log(criaNome('Matheus'))
  }

  falaNome()
})()

const nome = 'Teste'