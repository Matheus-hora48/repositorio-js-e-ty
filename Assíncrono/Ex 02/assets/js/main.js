fetch('pagina1.html')
  .then(resposta =>{
    if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO')
    return resposta.text
  })
  .then(html => console.log(html))
  .catch(e => console.log(e))

  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
  //
  async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const response = await fetch(href)
    if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO')
    const html = await response.text()
    carregaResultado(html)
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  