const user = JSON.parse(localStorage.getItem("user"))
let nombre = document.querySelector("#nombre")
let link = document.querySelector("#volver")
let last_link = localStorage.getItem("last-link")
link.href = last_link


for (let index = 0; index < user.length; index++) {
  if(user[index].logged === true){
        nombre.innerHTML = user[index].nombrecompleto
}
}

