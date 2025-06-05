/* if(localStorage.getItem('activo' == 'true')) {
    window.location = '../index.html'
} */

const formregistro = document.querySelector('#formregistro');
const inputusername = document.querySelector('#inputusername');
const inputuserpass = document.querySelector('#inputuserpass');


function registrar(e) {
    e.preventDefault();

    let user = {
        avatar: "https://cristja.github.io/injury-treat/sources/login.png",
        nombrecompleto: "unknown",
        user: inputusername.value,
        password: inputuserpass.value,
        logged: false,
        progreso: 0,
        certificado: false,
    }

    const users = JSON.parse(localStorage.getItem("user")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].user === user.user || users[i].password === user.password) {
            alert("El usuario o contraseña ya existe")
            return
        }
        
    }



    users.push(user)

    localStorage.setItem("user", JSON.stringify(users))

    window.location = "./inicioS.html"
    formregistro.reset()
}

formregistro.addEventListener('submit', registrar);