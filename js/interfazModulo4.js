let link = document.querySelector("#volver")
let last_link = localStorage.getItem("last-link")
link.href = last_link
const video = document.querySelector("#video")
const boton = document.querySelector("#boton")
const boton1 = document.querySelector("#boton1")

let tiempoVisto = 0


video.addEventListener('timeupdate', function() {
    tiempoVisto = video.currentTime;
    function siguiente() {
    if (tiempoVisto > 36.097577) {
        boton.attributes.removeNamedItem("disabled")
        boton.addEventListener("click", function() {
            window.location = "./test4.html"
        })
        boton1.attributes.removeNamedItem("disabled")
        boton1.addEventListener("click", function() {
            window.location = "./test4.html"
        })
    }
}
siguiente()

});



