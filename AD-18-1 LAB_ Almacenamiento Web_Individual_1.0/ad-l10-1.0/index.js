const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
    .then((response) => response.json())
    .then((response) => {
      const colors = response.data

      itemsContainer.innerHTML = ""

      colors.forEach((color) => {
        addItem(color)
      })

      const dataString = JSON.stringify(colors)
      localStorage.setItem("colors", dataString)
    })
    .catch((error) => console.error("Error al obtener los colores:", error))
}

function loadColorsFromStorage() {
  const dataString = localStorage.getItem("colors")
  if (dataString) {
    const colors = JSON.parse(dataString)
    itemsContainer.innerHTML = ""
    colors.forEach((color) => {
      addItem(color)
    })
  }
}

const btnClear = document.querySelector("#btn-clear")
const btnLoad = document.querySelector("#btn-load")

if (btnClear) {
  btnClear.addEventListener("click", () => {
    itemsContainer.innerHTML = ""
    localStorage.removeItem("colors")
  })
}

if (btnLoad) {
  btnLoad.addEventListener("click", () => {
    fetchColorsList()
  })
}
fetchColorsList()
loadColorsFromStorage()