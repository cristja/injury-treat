const encabezado = document.querySelector("#encabezado")
const boton = document.querySelector("#boton")
const bienvenida = document.querySelector("#bienvenida")
const nombre = document.querySelector("#nombre")
let btn = document.querySelector("#registro")




const user = JSON.parse(localStorage.getItem("user"))

function continuar() {
    window.location.href = "./pages/registro.html"
    localStorage.setItem("last-link", window.location.pathname)
    for (let i = 0; i < user.length; i++) {
      if (user[i].logged === true) {
        if (user[i].progreso == 0) {
            window.location.href = "./pages/interfazModulo.html"
        }
        if (user[i].progreso == 25) {
            window.location.href = "./pages/interfazModulo2.html"
            btn.textContent = "Continuar proceso"
        }
        if (user[i].progreso == 50) {
            window.location.href = "./pages/interfazModulo3.html"
            btn.textContent = "Continuar proceso"
        }
        if (user[i].progreso == 75) {
            window.location.href = "./pages/interfazModulo4.html"
            btn.textContent = "Continuar proceso"
        }
        if (user[i].progreso == 100) {
            window.location.href = "./pages/interfazcertificado.html"
            btn.textContent = "Continuar proceso"
        }
      }
        
    }
}



function convertirAMayusculas(cadena) {
  return cadena.toUpperCase();
}

for (let index = 0; index < user.length; index++) {
  
  if(user[index].logged === true){
    encabezado.innerHTML = `
    <a href=""><img  src="./sources/logooooooooooo-removebg-preview.png" class="img-fluid py-2" alt=""></a>
    <div class="d-flex align-items-center ">
    
    <div id="menu" class="dropstart py-1 text-end">
                            <button class="dropdown-toggle bg-none btn-sm w-10  text-end"  data-bs-toggle="dropdown" aria-expanded="false">
                              <img class="img-fluid w-100 text-white" src="${user[index].avatar}" alt="">
                            </button>
                            <ul class="dropdown-menu">
                              <li><a id="volver" class="dropdown-item" href="./pages/MiCuenta.html">Mi cuenta</a></li>
                              <li><a class="dropdown-item" href="./pages/progreso.html">Progreso</a></li>
                              <li><a class="dropdown-item" href="./pages/modulos.html">Módulos</a></li>
                              <li><a class="dropdown-item" href="./pages/CerrarSesion.html">Cerrar sesión</a></li>
                            </ul>
                        </div>
                        <p class="d-flex justify-content-center text-white ps-3 pe-1 mt-3">Hola</p>
                        <p class="d-flex justify-content-center text-white pe-3 mt-3">${user[index].user}</p>
    </div>
    `
        if (user[index].progreso >= 0) {
            btn.textContent = "Empezar proceso"
        }
        if (user[index].progreso >= 25) {
            btn.textContent = "Continuar proceso"
        }
        if (user[index].progreso >= 50) {
            
        }
        if (user[index].progreso >= 75) {
          
        }
        if (user[index].progreso >= 100) {
            btn.textContent = "Ver certificado"
        }
    
}
}

let volver = document.querySelector("#volver")
volver.addEventListener("click", () => {
  localStorage.setItem("last-link", window.location.pathname)
})
for (let i = 0; i < user.length; i++) {
  if (user[i].logged === true) {
    boton.textContent = "Ver más"
  }
}




function iniciar (){
    window.location.href = "./pages/inicioS.html"
}

function ver() {
  localStorage.setItem("last-link", window.location.pathname)
  for (let i = 0; i < user.length; i++) {
    if(user[i].logged === true){
      window.location.href = "./pages/modulos.html"
      return
    }
    else {
      window.location.href = "./pages/inicioS.html"
    }
    
  }
}