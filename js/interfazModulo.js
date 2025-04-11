let link = document.querySelector("#volver")
let last_link = localStorage.getItem("last-link")
link.href = last_link
const video = document.querySelector("#video")
const boton = document.querySelector("#boton")

let tiempoVisto = 0


video.addEventListener('timeupdate', function() {
    tiempoVisto = video.currentTime;
    function siguiente() {
    if (tiempoVisto > 175.077183) {
        boton.attributes.removeNamedItem("disabled")
        boton.addEventListener("click", function() {
            window.location = "./test.html"
        })
    }
}
siguiente()

});



