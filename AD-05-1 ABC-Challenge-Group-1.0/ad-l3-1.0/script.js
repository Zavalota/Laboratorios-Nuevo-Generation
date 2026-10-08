function obtenerColorAleatorio() {
    const colores = ["green", "blue", "red"];
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}

const etiquetasH5 = document.getElementsByTagName("h5");

for (let i = 0; i < etiquetasH5.length; i++) {
    etiquetasH5[i].addEventListener("click", function() {
        this.style.color = obtenerColorAleatorio();
    });
}