let hours = 0;
let minutes = 0;
let seconds = 0;
let tenths = 0;


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
    console.log("start clicked")
    clearInterval(time);
    clearInterval(timeMinutes);
    clearInterval(timeHours);
    time = setInterval(startTimerSeconds, 10);
    timeMinutes = setInterval(startTimerMinutes, 100);
    timeHours = setInterval(startTimerMinutes, 100);
}

// Paramos el cronometro pero no lo reiniciamos
stop.onclick = () => {
    clearInterval(time);
}

// Reiniciamos el cronometro
reset.onclick = () => {
    clearInterval(time);
    clearInterval(timeHours);
    clearInterval(timeMinutes);
    console.log("reset clicked")

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
}

// Arrancamos el cronometro con esta función
const startTimerSeconds = () => {
    tenths++; // Incrementamos los milisegundos

    if(tenths < 100 && tenths < 9) {
        t.innerHTML = '';
        t.innerHTML = `0${tenths}`;
    }

    if(tenths > 99) {
        seconds++;
        s.innerHTML = seconds;
        tenths = 0;
    }

    if (seconds < 10) {
        s.innerHTML = `0${seconds}`;
    }

    if(seconds > 59) {
        minutes++;
        s.innerHTML = '00';
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


