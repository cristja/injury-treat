const encabezado = document.querySelector("#encabezado")
const boton = document.querySelector("#boton")
const bienvenida = document.querySelector("#bienvenida")
const nombre = document.querySelector("#nombre")

const user = JSON.parse(localStorage.getItem("user"))

function convertirAMayusculas(cadena) {
  return cadena.toUpperCase();
}

for (let index = 0; index < user.length; index++) {
  
  if(user[index].logged === true){
    nombre.textContent = `${convertirAMayusculas(user[index].user)}`
    encabezado.innerHTML = `
    <a href=""><img  src="./sources/logooooooooooo-removebg-preview.png" class="img-fluid py-2" alt=""></a>
    <div id="menu" class="dropstart py-1 d-flex align-items-center gap-4">
                            <button class="dropdown-toggle bg-none btn-sm"  data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bi bi-person-circle text-white fs-1"></i>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="./pages/MiCuenta.html">Mi cuenta</a></li>
                              <li><a class="dropdown-item" href="./pages/progreso.html">Progreso</a></li>
                              <li><a class="dropdown-item" href="./pages/modulos.html">Modulos</a></li>
                              <li><a class="dropdown-item" href="./pages/CerrarSesion.html">Cerrar sesión</a></li>
                            </ul>
                        </div>
    `
    bienvenida.innerHTML = `
    <h2 class="pt-5 w-100 text-white fs-1 text-center">HOLA <br>${convertirAMayusculas(user[index].user)}</h2>
    <p class="w-100 text-white text-center pb-5">Tu salud es tu mejor inversión</p>
    `
}
}

for (let i = 0; i < user.length; i++) {
  if (user[i].logged === true) {
    boton.textContent = "Ver más"
  }
}




function iniciar (){
    window.location.href = "./pages/inicioS.html"
}

function ver() {
  for (let i = 0; i < user.length; i++) {
    if(user[i].logged === true){
      window.location.href = "./pages/MiCuenta.html"
      return
    }
    else {
      window.location.href = "./pages/inicioS.html"
    }
    
  }
}