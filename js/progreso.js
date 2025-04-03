function continuar() {
    window.location.href = "./interfazModulo.html"
}

const user = JSON.parse(localStorage.getItem("user")) || [];
let porcentaje = document.querySelector("#porcentaje")

for (let index = 0; index < user.length; index++) {
    if(user[index].logged === true) {
        porcentaje.textContent = `Progreso: ${user[index].progreso}%`
    }
}