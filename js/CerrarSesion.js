const user = JSON.parse(localStorage.getItem("user"))

for (let index = 0; index < user.length; index++) {
    
    if(user[index].logged === true) {
        user[index].logged = false
        localStorage.setItem("user", JSON.stringify(user))
    }
    window.location = '../index.html'
    
}

