const user = JSON.parse(localStorage.getItem("user"))


function mostrar() {
    const respuestas = document.querySelectorAll('input:checked')
    const cerrar = document.querySelector("#Cerrar")

    let contadorI = 0

    respuestas.forEach(element => {
        if(element.value === "incorrecta"){
            contadorI++
        }
    });

    const modalBody = document.getElementById('modalBody');
        if (contadorI >= 3) {
            modalBody.innerText = `Has cometido ${contadorI} respuestas incorrectas. No has pasado el formulario. Debes repetirlo.`;
        } else {
            modalBody.innerText = '¡Buen trabajo! Has pasado el formulario.';
            for (let i = 0; i < user.length; i++) {
                if (user[i].logged === true) {
                    user[i].progreso = 20
                    localStorage.setItem("user", JSON.stringify(user))
                }
                
            }
        }

        // Mostrar el modal
        $('#resultadoModal').modal('show');

        cerrar.addEventListener("click", function () {
            $('#resultadoModal').modal('hide');
            if(contadorI >= 3) {
                window.location = "./interfazModulo.html"
            }
            else {
                window.location = "./modulos.html"
            }
            
        })
    }