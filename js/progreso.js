
function continuar() {
    
    localStorage.setItem("last-link", window.location.pathname)
    for (let i = 0; i < user.length; i++) {
        if (user[i].progreso == 0) {
            window.location.href = "./interfazModulo.html"
        }
        if (user[i].progreso == 25) {
            window.location.href = "./interfazModulo2.html"
        }
        if (user[i].progreso == 50) {
            window.location.href = "./interfazModulo3.html"
        }
        if (user[i].progreso == 75) {
            window.location.href = "./interfazModulo4.html"
        }
        if (user[i].progreso == 100) {
            window.location.href = "../index.html"
        }
    }
}

const porcentaje = document.querySelector("#porcentaje")
const nombre = document.querySelector("#nombre")
const a_head = document.querySelector(".a-head")
const prog = document.querySelector(".prog")
const btn = document.querySelector("#btn")
const prog1 = document.querySelector(".prog1")
const namen = document.querySelector("#name")

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

for (let index = 0; index < user.length; index++) {
    if (user[index].logged === true) {
        nombre.textContent = `${convertirAMayusculas(user[index].user)}`
        porcentaje.textContent = `Progreso: ${user[index].progreso}%`
        a_head.innerHTML = `<img class="img-fluid w-100" src="${user[index].avatar}" alt="">`
        namen.innerHTML = `${user[index].user}`

        const modulo1 = document.querySelector("#modulo1")
        const modulo2 = document.querySelector("#modulo2")
        const modulo3 = document.querySelector("#modulo3")
        const modulo4 = document.querySelector("#modulo4")
        const modulo5 = document.querySelector("#modulo5")
        if (user[index].progreso >= 25) {
            modulo1.parentNode.classList.add("bg-blue-dark")
            modulo1.parentNode.classList.remove("bg-light")
            modulo1.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo1.appendChild(check)
            prog.innerHTML = "Deseas continuar?"
            btn.innerHTML = "Continuar proceso"
            }
        
        if (user[index].progreso >= 50) {
            modulo2.parentNode.classList.add("bg-blue-dark")
            modulo2.parentNode.classList.remove("bg-light")
            modulo2.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo2.appendChild(check)
            }
        if (user[index].progreso >= 75) {
            modulo3.parentNode.classList.add("bg-blue-dark")
            modulo3.parentNode.classList.remove("bg-light")
            modulo3.classList.add("text-white")
            const check = document.createElement("i")
            check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
            modulo3.appendChild(check)

            }
            if (user[index].progreso >= 100) {
                modulo4.parentNode.classList.add("bg-blue-dark")
                modulo4.parentNode.classList.remove("bg-light")
                modulo4.classList.add("text-white")
                const check = document.createElement("i")
                check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
                modulo4.appendChild(check)
                prog1.innerHTML = ""
                prog.innerHTML = "Haz finalizado con éxito este curso"
                btn.innerHTML = "Volver al inicio"
            }
            if (user[index].certificado == true) {
                modulo5.parentNode.classList.add("bg-blue-dark")
                modulo5.parentNode.classList.remove("bg-light")
                modulo5.classList.add("text-white")
                let opacity = modulo5.parentNode
                opacity.classList.add("opacity-100")
                const check = document.createElement("i")
                check.classList.add("bi" , "bi-check2-circle", "text-success", "fs-3")
                modulo5.appendChild(check) 
            }
            }
    }
    


const volver = document.querySelector("#volver")

function link() {
    localStorage.setItem("last-link", window.location.pathname)
}

volver.addEventListener("click", link)

