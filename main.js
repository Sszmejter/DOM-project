addElement = (e, node, txt, att, value) => {
  e.preventDefault()
  const element = document.createElement(node)

  if (txt) {
    const text = document.createTextNode(txt)
    element.appendChild(text)
  }
  if (att) {
    element.setAttribute(att, value)
  }
  document.querySelector('.content').appendChild(element)
}
const searchElement = (e, element) => {
  e.preventDefault()
  const infoElement = document.querySelector('.result')
  infoElement.textContent = ''
  const nameElement = document.querySelectorAll(element)
  console.log(nameElement)
  if (nameElement.length) {
    infoElement.innerHTML = `<p class = "result__info">W tym dokumencie znaleziono <strong>${nameElement.length}</strong> elementy <strong>${element}</strong> </p>`
    showInfo(nameElement, infoElement)
  } else {
    infoElement.innerHTML = `<p class = "result__info">W tym dokumencie nie znaleziono  elementów <strong>${element}</strong> </p>`
    return
  }
}
const showInfo = (nameElement, infoElement) => {
  console.log(nameElement)
  nameElement.forEach((e) => {
    const item = document.createElement('div')
    item.className = 'element-info'
    item.innerHTML = `
    <div>typ: ${e.nodeName}</div>
    <div>klasa:  ${e.className}</div>
    <div>wysokość elementu: ${e.offsetHeight}</div>
    <div>szerokość elementu:  ${e.offsetWidth}</div>
    <div>odległość od lewej krawędzi:  ${e.offsetLeft}</div>
    <div>odległość od górnej krawędzi:  ${e.offsetTop}</div>
    <div>liczba dzieci elementu:  ${e.childElementCount}</div>
    `
    infoElement.appendChild(item)
  })
}
//listeners
const addForm = document.querySelector('.form--add')
addForm.addEventListener('submit', (e) => {
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attribute.value,
    addForm.elements.value.value
  )
})
const searchForm = document.querySelector('.form--search')
searchForm.addEventListener('submit', (e) =>
  searchElement(e, searchForm.elements['searching-element'].value)
)
