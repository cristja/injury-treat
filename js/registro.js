if(localStorage.getItem('activo' == 'true')) {
    window.location = '../index.html'
}

const formregistro = document.querySelector('#form');
const inputusername = document.querySelector('#nombre');
const inputuserpass = document.querySelector('#contraseña');
const reset = document.querySelector(".formulario")
const enviar = document.querySelector("#enviar")

function registrar(e) {
    e.preventDefault();
    localStorage.setItem('user', inputusername.value);
    localStorage.setItem('password', (inputuserpass.value));

    const cajitamensaje = document.createElement('p');
    cajitamensaje.classList.add("mensaje")
    cajitamensaje.innerHTML = `Usuario Registrado, ya puedes <a class="text-white"  href="./inicioS.html">Iniciar Sesion </a>
    `

    formregistro.appendChild(cajitamensaje)
}

enviar.addEventListener('click', registrar);