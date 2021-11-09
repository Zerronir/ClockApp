window.onload = () => {
    populateHours();
    populateMinutes();
    populateSeconds();

    // Comprobamos el contenido del localstorage al cargar la página
    startSavedChrono();

}

const startSavedChrono = () => {
    // Sacamos el objeto parseado desde el localStorage
    let chrono = JSON.parse(localStorage.getItem('chronoStatus'));

    hours = chrono.hours
    minutes = chrono.minutes
    seconds = chrono.seconds
    tenths = chrono.tenths

    if(chrono.status === 'running') {
        $('startButton').click();
    }

    if(chrono.status === 'paused' || chrono.status === 'stopped') {
        $('hours').innerHTML = `${hours}`
        $('minutes').innerHTML = `${minutes}`
        $('seconds').innerHTML = `${seconds}`
        $('tenths').innerHTML = `${tenths}`
    }
}