// Función para facilitar el selector por id del DOM para que parezca más jQuery
const $ = function (id) {
    return document.getElementById(id);
}

// Printamos la hora en el reloj
setInterval(() => {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Devolvemos la cadena de texto del reloj donde tendremos la hora
    $("mainClock").innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}, 1000);

let magic = $("playMagicSound");

magic.onclick = () => {
    $('sorpresa').innerHTML = "";
    $('sorpresa2').innerHTML = "";

    setTimeout(() => {
        $('sorpresa').innerHTML = "Enhorabuena, un alumno ha aprendido lo que puede hacer con el objeto Audio y has sido Rick Roleado";
        let img = document.createElement("img");
        img.setAttribute("src", "./resources/images/rick-rickroll.gif");
        $('sorpresa2').appendChild(img);

        let clearButton = document.createElement("button");
        clearButton.setAttribute("onclick", "clearJoke()");
        clearButton.classList.add("btn")
        clearButton.classList.add("btn-warning")
        clearButton.innerHTML = "Venga... ya, borra la bromita"
        $('sorpresa2').appendChild(clearButton);
    }, 100);
    playMagicSound();
}

const clearJoke = () => {

    $('sorpresa').innerHTML = "";
    $('sorpresa2').innerHTML = "";

    let magicSong = new Audio('./resources/audio/sorpresa.mp3');
    magicSong.pause();
}

const playMagicSound = () => {
    let magicSong = new Audio('./resources/audio/sorpresa.mp3');
    magicSong.play();
}