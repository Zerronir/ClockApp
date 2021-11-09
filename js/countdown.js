let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalController;
let actualTime;
let distance;

const startCountdown = (deadLine, timeout) => {
    intervalController = setInterval(() => {
        actualTime = new Date().getTime(); // Inicializamos un nuevo objeto de tiempo
        let distance = deadLine - actualTime; // Creamos el objeto de la diferencia en el programa para calcular la distancia hasta el itempo objetivo

        // Calculamos los tiempos


    }, timeout !== "" ? timeout : 1000); // Se actualiza cada segundo
}

const stopTheCountdown = () => {
    clearInterval(intervalController);
}

const resetCountdown = () => {
    stopTheCountdown();
    actualTime = null;
}

const playDeadLineSound = () => {
    let audio = new Audio("./resources/audio/countdownAlarm.mp3");
    audio.play();
}