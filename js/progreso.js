
function continuar() {
    window.location.href = "./interfazModulo.html"
    localStorage.setItem("last-link", window.location.pathname)
}

const porcentaje = document.querySelector("#porcentaje")
const nombre = document.querySelector("#nombre")
const a_head = document.querySelector(".a-head")

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

for (let index = 0; index < user.length; index++) {
    if (user[index].logged === true) {
        nombre.textContent = `${convertirAMayusculas(user[index].user)}`
        porcentaje.textContent = `Progreso: ${user[index].progreso}%`
        a_head.innerHTML = `<img class="img-fluid w-75" src="${user[index].avatar}" alt="">`
    }
    
}

