function mostrarInfoEnlaces() {
    const enlaces = document.querySelectorAll("a");
    const numEnlaces = enlaces.length;
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[numEnlaces - 1].href;
    
    alert(`Numero de enlaces: ${numEnlaces}\nPrimer enlace: ${primerEnlace}\nUltimo enlace: ${ultimoEnlace}`);
}

// Crear el boton pq el orignal se borra
const boton = document.createElement("button");
boton.textContent = "Mostrar informacion de enlaces";
boton.onclick = mostrarInfoEnlaces;
document.body.appendChild(boton);