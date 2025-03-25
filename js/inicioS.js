/* if(localStorage.getItem('activo') == 'true') {
    window.location = '../index.html'
} */

const formregistro = document.querySelector('#formregistro');
const inputusername = document.querySelector('#inputusername');
const inputuserpass = document.querySelector('#inputuserpass');

const user = JSON.parse(localStorage.getItem("user")) || [];


function validarusuario(e) {
    e.preventDefault();

    for (let index = 0; index < user.length; index++) {
        
    if (user[index].user === inputusername.value && user[index].password === inputuserpass.value) {
        user[index].logged = true
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../index.html";
        return
    }
    }
    alert('Datos Incorrectos')
    
    formregistro.reset()
}

formregistro.addEventListener('submit', validarusuario);