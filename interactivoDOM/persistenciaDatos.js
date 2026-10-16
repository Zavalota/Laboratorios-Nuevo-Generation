const btnTema = document.getElementById("btn-tema");
const cuerpo = document.body;

const temaGuardado = localStorage.getItem("temaPreferido");

if (temaGuardado === "oscuro") {
    cuerpo.classList.add("tema-oscuro");
}

btnTema.addEventListener("click", () => {
    cuerpo.classList.toggle("tema-oscuro");
    if (cuerpo.classList.contains("tema-oscuro")) {
        localStorage.setItem("temaPreferido", "oscuro");
    } else {
        localStorage.setItem("temaPreferido", "claro");
    }
});