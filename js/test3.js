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
    const modalheader = document.getElementById('modalheader')
    const modalfooter = document.getElementById('modalfooter')
        if (contadorI >= 3) {
            modalBody.innerText = `Haz respondido ${contadorI} preguntas incorrectas. No has pasado el modulo. Debes repetirlo.`;
            modalBody.classList.add("bg-danger-subtle", "text-danger-emphasis")
            modalheader.classList.add("bg-danger", "text-white")
            modalfooter.classList.add("bg-danger")
        } else {
            modalBody.innerText = '¡Buen trabajo! Has completado el moduló 3 con exito, haz desbloqueado el moduló 4.';
            modalBody.classList.add("bg-success-subtle", "text-success-emphasis")
            modalheader.classList.add("bg-green-aqua", "text-white")
            modalfooter.classList.add("bg-green-aqua")
            for (let i = 0; i < user.length; i++) {
                if (user[i].logged === true) {
                    if (user[i].progreso == 50) {
                        user[i].progreso = 75
                        localStorage.setItem("user", JSON.stringify(user))
                    }
                }
                
            }
        }

        // Mostrar el modal
        $('#resultadoModal').modal('show');

        cerrar.addEventListener("click", function () {
            $('#resultadoModal').modal('hide');
            if(contadorI >= 3) {
                window.location = "./interfazModulo3.html"
            }
            else {
                window.location = "./modulos.html"
            }
            
        })
    }