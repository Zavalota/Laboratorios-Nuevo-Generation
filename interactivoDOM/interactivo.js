
const botonAgregar = document.getElementById("boton");
const contenerdor = document.getElementById("contenedor");

const titulo = document.querySelector("h1");
titulo.textContent = "Mi Portafolio Interactivo jijiijji";

botonAgregar.addEventListener("click", () => {
    const tarjeta = document.createElement("div");
    
    tarjeta.style.border = "10px solid #0a0505";
    tarjeta.style.padding = "10px";
    tarjeta.style.margin = "10px 0";
    tarjeta.style.borderRadius = "10px";

    const textoProyecto = document.createElement("p");
    textoProyecto.textContent = "Nuevo Proyecto";
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar tarjeta";
    
    botonEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });

    tarjeta.appendChild(textoProyecto);
    tarjeta.appendChild(botonEliminar);

    contenedor.appendChild(tarjeta);
});