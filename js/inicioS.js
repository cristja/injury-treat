if(localStorage.getItem('activo') == 'true') {
    window.location = '../index.html'
}

const formregistro = document.querySelector('#formregistro');
const inputusername = document.querySelector('#nombre');
const inputuserpass = document.querySelector('#contraseña');
const enviar = document.querySelector("#enviar")


function validarusuario(e) {
    e.preventDefault();

    let usuariolocal = localStorage.getItem('user');
    let passwordlocal = localStorage.getItem('password');
    
    if (usuariolocal === inputusername.value && passwordlocal === inputuserpass.value) {
        localStorage.setItem('activo', true)
        window.location.href = '../index.html'
    }
    else {
        alert('Datos Incorrectos')
    }
}

enviar.addEventListener('submit', validarusuario);

console.log(validarusuario)