let hours = 0;
let minutes = 0;
let seconds = 0;
let tenths = 0;
let timerStatus = 'stopped';

// Definimos los elementos de minuts, segundos y milisegundos

// definimos los botones de start/stop/reset
const start = $('startButton');
const stop = $('stopButton');
const reset = $('resetButton');
const setLap = $('setLap');

// Recogemos los spans donde printaremos el tiempo
const h = $('hours')
const m = $('minutes')
const s = $('seconds')
const t = $('tenths')

let time; // Este será el intervalo de refresco de los milisegundos
let timeMinutes; // Este será el intervalo de refresco de los minutos
let timeHours; // Este será el intervalo de refresco de las horas


// Creamos la función al hacer click en el botón de start
// esta función recibirá la orden de activar el cronometro
start.onclick = () => {
    clearInterval(time);
    time = setInterval(startTimerSeconds, 10);
    timerStatus = 'running';
}

// Paramos el cronometro pero no lo reiniciamos
stop.onclick = () => {
    clearInterval(time);
    timerStatus = 'paused';
}

// Reiniciamos el cronometro
reset.onclick = () => {
    clearInterval(time);
    timerStatus = 'reset';

    hours = 0;
    minutes = 0;
    seconds = 0;
    tenths = 0;

    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
    t.innerHTML = "000";

}

setLap.onclick = () => {
    // Print the lap on the lap record list
    let lapList = $('lapList')
    let lap = document.createElement('li');
    lap.innerHTML = $('lap').innerHTML;
    lapList.appendChild(lap);
    saveState();
}

// Arrancamos el cronometro con esta función
const startTimerSeconds = () => {
    tenths++; // Incrementamos los milisegundos
    t.innerHTML = tenths;

    if(tenths < 10) {
        t.innerHTML = `00${tenths}`;
    }

    if(tenths < 100 && tenths > 10) {
        t.innerHTML = `0${tenths}`;
    }

    if(tenths > 99) {
        seconds++;
        tenths = 0;
        t.innerHTML = '000';
        s.innerHTML = seconds;
    }

    if(seconds < 10) {
        s.innerHTML = `0${seconds}`;
    }

    if(seconds > 59) {
        minutes++;
        seconds = 0;
        tenths = 0;
        t.innerHTML = '000';
        s.innerHTML = '00';
        m.innerHTML = `${minutes}`;
    }

    if(minutes < 10) {
        m.innerHTML = `0${minutes}`;
    }

    if(minutes > 59) {
        hours++;
        minutes = 0;
        seconds = 0;
        tenths = 0;
        t.innerHTML = '000';
        s.innerHTML = '00';
        m.innerHTML = '00';
        h.innerHTML = `${hours}`;
    }

    if(hours < 10) {
        h.innerHTML = `0${hours}`;
    }

    if(hours === 1) {
        setLap();
        reset.click();
        start.click();
    }


}

const startTimerMinutes = () => {

    if(parseInt(s.innerHTML) === 59) {
        minutes++;
    }

    if(minutes < 10) {
        m.innerHTML = `0${minutes}`;
    }

    if (minutes > 59) {
        hours++;
        m.innerHTML = '00';
    }
}

// Guardamos el estado del cronometro para cuando volvamos a entrar a la app
const saveState = () => {
    let chrono = {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        tenths: tenths,
        status: timerStatus
    }

    localStorage.setItem('chronoStatus', JSON.stringify(chrono));
}

window.onunload = () => {
    saveState();
}