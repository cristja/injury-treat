const a_head = document.querySelector(".a-head")
const nombre = document.querySelector("#nombre")

function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}


for (let index = 0; index < user.length; index++) {
    
    if(user[index].logged === true) {
        nombre.innerHTML = `${convertirAMayusculas(user[index].user)}`
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

const volver = document.querySelector("#volver")

function link_c() {
    localStorage.setItem("last-link", window.location.pathname)
}

volver.addEventListener("click", link_c)