const elementos = [
  {tag: 'p', texto: 'Texto incial'},
  {tag: 'div', texto: 'Texto 1'}, 
  {tag: 'footer', texto: 'Texto 2'},
  {tag: 'section', texto: 'Texto final'},
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++){
  let {tag, texto} = elementos[i]
  let tags = document.createElement(tag)
  tags.innerHTML = texto
  div.appendChild(tags)
}

container.appendChild(div)