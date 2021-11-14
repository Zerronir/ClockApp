let countdownHours = 0;
let countdownMinutes = 0;
let countdownSeconds = 0;
let intervalController;
let actualTime;
let countdownDistance;
let countdownStartButton = $('setCountdown');

let cdhours = $('cdhours');
let cdminutes = $('cdminutes');
let cdseconds = $('cdseconds');


countdownStartButton.onclick = () => {
    setCountdown();
}

const setCountdown = () => {
    console.log("setCountdown clicked");

    // Get the values
    let years = new Date().getFullYear();
    let months = new Date().getMonth();
    let days = new Date().getDate();
    let hours = $('countdownHoursOptions').value;
    let minutes = $('countdownMinutesOptions').value;
    let seconds = $('countdownSecondsOptions').value;

    // Set the values
    let newDate = new Date(years, months, days, hours, minutes, seconds); // Crear fecha con los inputs del formulario

    intervalController = setInterval(() => {
        seconds--;

        if(seconds <= 0) {
            seconds = 59;
            minutes--;
        }

        if(minutes <= 0 && seconds <=0) {
            hours--;
            minutes = 59;
            seconds = 59;
        }

        if(seconds === 0 && minutes === 0 && hours === 0) {
            playDeadLineSound();
            cdseconds.innerHTML = '00'
            cdminutes.innerHTML = '00'
            cdhours.innerHTML = '00'
        }

        cdseconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        cdminutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        cdhours.innerHTML = hours < 10 ? `0${hours}` : hours;

        //Start the timeout

    }, 1000); // Se actualiza cada segundo
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
