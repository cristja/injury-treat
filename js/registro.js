/* if(localStorage.getItem('activo' == 'true')) {
    window.location = '../index.html'
} */

    const formregistro = document.querySelector('#formregistro');
    const inputusername = document.querySelector('#inputusername');
    const inputuserpass = document.querySelector('#inputuserpass');
    
    
    function registrar(e) {
        e.preventDefault();
    
        let user = {
            user: inputusername.value,
            password: inputuserpass.value,
            logged: false,
            progreso: 0,
            certificado: false,
        }
    
        const users = JSON.parse(localStorage.getItem("user")) || [];
    
        users.push(user)
    
        localStorage.setItem("user", JSON.stringify(users))
    
        const cajitamensaje = document.createElement('p');
        cajitamensaje.classList.add("mensaje")
        cajitamensaje.innerHTML = `Usuario Registrado, ya puedes <a class="text-white" href="./inicioS.html">Iniciar Sesion </a>
        `
    
        formregistro.appendChild(cajitamensaje)
        formregistro.reset()
    }
    
    formregistro.addEventListener('submit', registrar);