
import { Queue } from "./queue.js";

const items = document.querySelector('#items')
const btnBorrar = document.querySelector('#borrar')
const btnAgregar= document.querySelector('#agregar')
const queue = new Queue()

const info = document.querySelector('#info')

let size, next

const main = () => {

  queue.enqueue()
  queue.enqueue()
  queue.enqueue()
  queue.enqueue()
  queue.enqueue()

  mostrarItems()

  btnBorrar.onclick = () => {
    queue.dequeue()
    eliminarItems()
    mostrarItems()
    setInfo()
  }

  btnAgregar.onclick = () => {
    queue.enqueue()
    eliminarItems()
    mostrarItems()
    setInfo()
  }
}

const mostrarItems = () => {
  if (!queue.print()) {
    return 
  }

  queue.print().forEach(item => {
    items.innerHTML += `<div class="item">${item}</div>`
  })
}

const eliminarItems = () => {
  while(items.hasChildNodes()) {
    items.removeChild(items.lastChild)
  }
}
main()

const infoS = (size, next) => {
  info.innerHTML = `
    <div class="size"><b>Size queue:</b> ${size}</div>
    <div class="next"><b>Next item:</b> ${next}</div>
  `
}


const setInfo = () => {
  size = queue.getSize()
  next = queue.peek()

  console.log(size);

  if (!next) {
    console.log('entro');
    next = 'nothing'
  }

  infoS(size, next)
}
setInfo()
