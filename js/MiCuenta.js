const nombre = document.querySelector("#nombre")
let inputusernameNew = document.querySelector("#inputusernameNew")
let inputuserpassNew =document.querySelector("#inputuserpassNew")
const guardar = document.querySelector("#save")
const guardar1 = document.querySelector("#save1")
const formulario = document.querySelector("#formulario")
const avatars = document.querySelectorAll(".btn-avatar")
const avatar = document.querySelector(".img-a")
const guardar2 = document.querySelector("#save2")
const a_head = document.querySelector(".a-head")
let link = document.querySelector("#volver")
let last_link = localStorage.getItem("last-link")
link.href = last_link
let certificado = document.querySelector("#certificado")

function link_c() {
    localStorage.setItem("last-link", window.location.pathname)
}

certificado.addEventListener("click", link_c)

for (let i = 0; i < user.length; i++) {
    if(user[i].logged === true) {
        avatar.innerHTML = `<img class=" w-50" src="${user[i].avatar}" alt="">`
        a_head.innerHTML = `<img class="img-fluid w-25 text-white" src="${user[i].avatar}" alt="">`
        if (user[i].certificado == true) {
            certificado.innerHTML = `<a href="./interfazcertificado.html">Prevencion-de-Lesiones.pdf</a>`
        }
    }
    
}

avatars.forEach(boton => {
    boton.addEventListener("click", function(event){
        const valor = event.currentTarget.querySelector("img");
        if (valor) {
            const ruta = valor.src; 
            function subir() {
            for (let i = 0; i < user.length; i++) {
                if (user[i].logged === true) {
                    user[i].avatar = ruta
                    localStorage.setItem("user", JSON.stringify(user))
                    alert("Avatar actualizado")
                    let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop2'));
                    modal.hide();
                }
                
            }
        }
        guardar2.addEventListener("click", subir)
        }
        

        
    })
});



function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}


for (let index = 0; index < user.length; index++) {
    
    if(user[index].logged === true) {
        nombre.textContent = `${convertirAMayusculas(user[index].user)}`
    }
    
}

function actualizacionN(e) {
    e.preventDefault();

    for (let i = 0; i < user.length; i++) {
        
        if(user[i].logged === true) {
            user[i].user = inputusernameNew.value
            localStorage.setItem("user", JSON.stringify(user))
            alert("Nombre de usuario actualizado")
            let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
            modal.hide();
        } 
    }
    formulario.reset()

}

function actualizacionC(e) {
    e.preventDefault();

    for (let i = 0; i < user.length; i++) {
        
        if(user[i].logged === true) {
            user[i].password = inputuserpassNew.value
            localStorage.setItem("user", JSON.stringify(user))
            alert("Contraseña actualizada")
            let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop1'));
            modal.hide();
        } 
    }

}

guardar.addEventListener("click", actualizacionN)
guardar1.addEventListener("click", actualizacionC)

