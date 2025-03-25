if(localStorage.getItem('activo') == 'true') {
    window.location = '../index.html'
}

const formregistro = document.querySelector('#formregistro');
const inputusername = document.querySelector('#inputusername');
const inputuserpass = document.querySelector('#inputuserpass');




function validarusuario(e) {
    e.preventDefault();

    let usuariolocal = localStorage.getItem('user');
    let passwordlocal = localStorage.getItem('password');
    
    if (usuariolocal === inputusername.value && passwordlocal === inputuserpass.value) {
        localStorage.setItem('activo', true)
        window.location.href = "../index.html";
    }
    else {
        alert('Datos Incorrectos')
    }
    formregistro.reset()
}

formregistro.addEventListener('submit', validarusuario);