// Creamos el reloj solo cuando el documento esté cargado completamente
window.onload = () => {
    console.log("Document is ready")
    createClock();
}

// Función para facilitar el selector por id del DOM para que parezca más jQuery
const $ = function (id) {
    return document.getElementById(id);
}

// Printamos la hora en el reloj
const createClock = () => {
    setInterval(() => {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // Devolvemos la cadena de texto del reloj donde tendremos la hora
        $("mainClock").innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }, 1000);
}