
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
        const modulo1 = document.querySelector("#modulo1")
        const modulo2 = document.querySelector("#modulo2")
        const modulo3 = document.querySelector("#modulo3")
        const modulo4 = document.querySelector("#modulo4")
        const modulo5 = document.querySelector("#modulo5")
        if (user[index].progreso >= 20) {
            modulo1.parentNode.classList.add("bg-blue-dark")
            modulo1.parentNode.classList.remove("bg-light")
            modulo1.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo1.appendChild(check)
            }
        
        if (user[index].progreso >= 40) {
            modulo2.parentNode.classList.add("bg-blue-dark")
            modulo2.parentNode.classList.remove("bg-light")
            modulo2.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo2.appendChild(check)
            }
        if (user[index].progreso >= 60) {
            modulo3.parentNode.classList.add("bg-blue-dark")
            modulo3.parentNode.classList.remove("bg-light")
            modulo3.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo3.appendChild(check)

            }
            if (user[index].progreso >= 80) {
                modulo4.parentNode.classList.add("bg-blue-dark")
                modulo4.parentNode.classList.remove("bg-light")
                modulo4.classList.add("text-white")
                const check = document.createElement("i")
                check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
                modulo4.appendChild(check)
            }
            if (user[index].progreso >= 100) {
                modulo5.parentNode.classList.add("bg-blue-dark")
                modulo5.parentNode.classList.remove("bg-light")
                modulo5.classList.add("text-white")
                const check = document.createElement("i")
                check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
                modulo5.appendChild(check) 
            }
            }
    }
    


