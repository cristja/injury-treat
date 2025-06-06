const a_head = document.querySelector(".a-head")
const nombre = document.querySelector("#nombre")
const tarjet2 = document.querySelector("#tarjet2")
const tarjet3 = document.querySelector("#tarjet3")
const tarjet4 = document.querySelector("#tarjet4")
const tarjet5 = document.querySelector("#tarjet5")
const namen = document.querySelector("#name")

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}


for (let index = 0; index < user.length; index++) {
    a_head.innerHTML = `<img class="img-fluid w-100" src="${user[index].avatar}" alt="">`
    if(user[index].logged === true) {
        namen.innerHTML = `${user[index].user}`
        nombre.innerHTML = `${convertirAMayusculas(user[index].user)}`
            const modulo1 = modulos.find(modulo => modulo.titulo === "MÓDULO 1");
            const modulo2 = modulos.find(modulo => modulo.titulo === "MÓDULO 2");
            const modulo3 = modulos.find(modulo => modulo.titulo === "MÓDULO 3");
            const modulo4 = modulos.find(modulo => modulo.titulo === "MÓDULO 4");
            const certificacion = modulos.find(modulo => modulo.titulo === "CERTIFICACIÓN");
        if (user[index].progreso >= 25) {
            modulo1.estado = ["Completado"];
            modulo1.color = "text-success" 
            modulo2.estado = ["En progreso"]
            modulo2.color = "text-warning"
            
            function link2() {
                window.location.href = "./interfazModulo2.html"
                localStorage.setItem("last-link", window.location.pathname)
            }
            }
        
        if (user[index].progreso >= 50) {
            modulo2.estado = ["Completado"];
            modulo2.color = "text-success" 
            modulo3.estado = ["En progreso"]
            modulo3.color = "text-warning"

            function link3() {
                window.location.href = "./interfazModulo3.html"
                localStorage.setItem("last-link", window.location.pathname)
            }
            }
        if (user[index].progreso >= 75) {
            modulo3.estado = ["Completado"];
            modulo3.color = "text-success" 
            modulo4.estado = ["En progreso"]
            modulo4.color = "text-warning"

            function link4() {
                window.location.href = "./interfazModulo4.html"
                localStorage.setItem("last-link", window.location.pathname)
            }
            }
        if (user[index].progreso >= 100) {
            modulo4.estado = ["Completado"];
            modulo4.color = "text-success" 
            certificacion.estado = ["En progreso"]
            certificacion.color = "text-warning"

            function link5() {
                localStorage.setItem("last-link", window.location.pathname)
                if (user[index].nombrecompleto == "unknown") {
                    window.location.href = "./autenticacion.html"
                }
                else{
                    window.location.href = "./interfazcertificado.html"
                }
                
                
            }
            }
        if (user[index].certificado == true) {
            certificacion.estado = ["Completado"];
            certificacion.color = "text-success"
        }
    }
    
}

const volver = document.querySelector("#volver")

function link_c() {
    window.location.href = "./MiCuenta.html"
    localStorage.setItem("last-link", window.location.pathname)
}

volver.addEventListener("click", link_c)        
     


const contenedor = document.querySelector("#contenedor")

modulos.forEach(element => {
    let card = document.createElement("div.col")
    card.innerHTML = `
    <div id="tarjet${element.id}" onclick="link${element.id}()" class="card pointer ${element.estado[1]}">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.titulo}</h5>
            <p class="card-text pb-3">${element.descripcion}</p>
            <p >${element.estado[0]}<i class="bi bi-circle-fill ${element.color} px-1"></i></p>
        </div>
    </div>
    `
    contenedor.appendChild(card)
});


const tarjet1 = document.querySelector("#tarjet1")

function link() {
    window.location.href = "./interfazModulo.html"
    localStorage.setItem("last-link", window.location.pathname)
}

tarjet1.addEventListener("click", link)
tarjet2.addEventListener("click", link2)
tarjet3.addEventListener("click", link3)
tarjet4.addEventListener("click", link4)
tarjet5.addEventListener("click", link5)


