const encabezado = document.querySelector("#encabezado")

const user = JSON.parse(localStorage.getItem("user"))

for (let index = 0; index < user.length; index++) {
  
  if(user[index].logged === true){
    encabezado.innerHTML = `
    <a href=""><img  src="./sources/logooooooooooo-removebg-preview.png" class="img-fluid py-2" alt=""></a>
    <div id="menu" class="dropstart py-1">
                            <button class="dropdown-toggle bg-none btn-sm"  data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bi bi-person-circle text-white fs-1"></i>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="./pages/MiCuenta.html">Mi cuenta</a></li>
                              <li><a class="dropdown-item" href="./pages/progreso.html">Progreso</a></li>
                              <li><a class="dropdown-item" href="./pages/CerrarSesion.html">Cerrar sesión</a></li>
                            </ul>
                        </div>
    `
}
}




function iniciar (){
    window.location.href = "./pages/inicioS.html"
}