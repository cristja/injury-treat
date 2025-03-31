function continuar() {
    window.location.href = "./interfazModulo.html"
}

const porcentaje = document.querySelector("#porcentaje")
const nombre = document.querySelector("#nombre")


function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

for (let index = 0; index < user.length; index++) {
    if (user[index].logged === true) {
        nombre.textContent = `${convertirAMayusculas(user[index].user)}`
        porcentaje.textContent = `Progreso: ${user[index].progreso}%`
    }
    
}

