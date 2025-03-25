if(localStorage.getItem('activo' == 'true')) {
    window.location = '../index.html'
}

const formregistro = document.querySelector('#formregistro');
const inputusername = document.querySelector('#inputusername');
const inputuserpass = document.querySelector('#inputuserpass');


function registrar(e) {
    e.preventDefault();
    localStorage.setItem('user', inputusername.value);
    localStorage.setItem('password', (inputuserpass.value));
    localStorage.setItem('activo', false)

    const cajitamensaje = document.createElement('p');
    cajitamensaje.classList.add("mensaje")
    cajitamensaje.innerHTML = `Usuario Registrado, ya puedes <a class="text-white" href="./inicioS.html">Iniciar Sesion </a>
    `

    formregistro.appendChild(cajitamensaje)
    formregistro.reset()
}

formregistro.addEventListener('submit', registrar);