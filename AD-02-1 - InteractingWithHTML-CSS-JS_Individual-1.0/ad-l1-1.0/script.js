    let encabezados = document.getElementsByTagName("h1");
    encabezados[0].textContent = "Adios";
    encabezados[1].style.color = "orange";
    let encabezadoClic = document.getElementById("encabezado-clic");

    encabezadoClic.addEventListener("click", function() {
        encabezadoClic.style.color = "brown";
    });