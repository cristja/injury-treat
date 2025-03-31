const contenedor = document.querySelector("#contenedor")

modulos.forEach(element => {
    let card = document.createElement("div.col")
    card.innerHTML = `
    <div class="card">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.titulo}</h5>
            <p class="card-text pb-3">${element.descripcion}</p>
        </div>
    </div>
    `
    contenedor.appendChild(card)
});