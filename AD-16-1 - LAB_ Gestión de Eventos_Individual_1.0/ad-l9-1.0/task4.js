const contenedor = document.getElementById("container");

const elementosSegundo = document.querySelectorAll(".second");

const elementoTerceroOl = document.querySelector("ol .third");

contenedor.prepend("¡Hola! ");

const pieDePagina = document.querySelector(".footer");
pieDePagina.classList.add("main");

pieDePagina.classList.remove("main");

const nuevoLi = document.createElement("li");
nuevoLi.textContent = "cuatro";

const listaUl = document.querySelector("ul");
listaUl.appendChild(nuevoLi);