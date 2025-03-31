function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}

const nombre = document.querySelector("#nombre")

for (let index = 0; index < user.length; index++) {
    
    if(user[index].logged === true) {
        nombre.textContent = `${convertirAMayusculas(user[index].user)}`
    }
    
}