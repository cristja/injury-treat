const a_head = document.querySelector(".a-head")
const nombre = document.querySelector("#nombre")

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}


for (let index = 0; index < user.length; index++) {
    
    if(user[index].logged === true) {
        nombre.innerHTML = `${convertirAMayusculas(user[index].user)}`
            const modulo1 = modulos.find(modulo => modulo.titulo === "MÓDULO 1");
            const modulo2 = modulos.find(modulo => modulo.titulo === "MÓDULO 2");
            const modulo3 = modulos.find(modulo => modulo.titulo === "MÓDULO 3");
            const modulo4 = modulos.find(modulo => modulo.titulo === "MÓDULO 4");
            const modulo5 = modulos.find(modulo => modulo.titulo === "MÓDULO 5");
        if (user[index].progreso >= 20) {
            modulo1.estado = ["Completado"];
            modulo1.color = "text-success" 
            modulo2.estado = ["En progreso"]
            modulo2.color = "text-warning"
            }
        
        if (user[index].progreso >= 40) {
            modulo2.estado = ["Completado"];
            modulo2.color = "text-success" 
            modulo3.estado = ["En progreso"]
            modulo3.color = "text-warning"
            }
        if (user[index].progreso >= 60) {
            modulo3.estado = ["Completado"];
            modulo3.color = "text-success" 
            modulo4.estado = ["En progreso"]
            modulo4.color = "text-warning"
            }
        if (user[index].progreso >= 80) {
            modulo4.estado = ["Completado"];
            modulo4.color = "text-success" 
            modulo5.estado = ["En progreso"]
            modulo5.color = "text-warning"
            }
        if (user[index].progreso >= 100) {
            modulo5.estado = ["Completado"];
            modulo5.color = "text-success" 
            }
    }
    
}

        
     


const contenedor = document.querySelector("#contenedor")

modulos.forEach(element => {
    let card = document.createElement("div.col")
    card.innerHTML = `
    <div id="tarjet" class="card pointer ${element.estado[1]}">
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

const tarjet = document.querySelector("#tarjet")

function link() {
    window.location.href = "./interfazModulo.html"
    localStorage.setItem("last-link", window.location.pathname)
}

tarjet.addEventListener("click", link)