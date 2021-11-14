window.onload = () => {
    // Populate Alarm options
    populateHours();
    populateMinutes();
    populateSeconds();

    // Count Down Populate
    populateCountdownHours();
    populateCountdownMinutes();
    populateCountdownSeconds();

    // Comprobamos el contenido del localstorage al cargar la página
    startSavedChrono();

    // Comrpobamos el contenido de las alarmas y si contiene alguna pues las añadimos
    loadAlarms();
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

const loadAlarms = () => {
    let alarmsArray = JSON.parse(localStorage.getItem('alarms'));


    // Creamos un bucle en caso de que no sean null
    if(alarmsArray !== null) {
        for (let i = 0; i < alarmsArray.length; i++) {
            printSavedAlarm(alarmsArray[i]);
        }
    }

}

const printSavedAlarm = (alarm) => {
    console.log(alarm);
    // Añade la alarma a la lista
    let li = document.createElement("li");
    li.id = `alarmLI${alarm.alarmId.toString()}`
    li.setAttribute("data-id", alarm.alarmId.toString())
    li.innerHTML = `${alarm.alarmHours}:${alarm.alarmMinutes}:${alarm.alarmSeconds}`;

    // Creamos el botón para eliminar alarmas
    let deleteAlarm = document.createElement("button");
    deleteAlarm.setAttribute("data-id", alarm.alarmId.toString());
    deleteAlarm.setAttribute("onclick", "deleteItem(this);");
    deleteAlarm.id = `alarm${alarm.alarmId}`;
    deleteAlarm.classList.add("deleteItem")
    deleteAlarm.classList.add("btn")
    deleteAlarm.classList.add("ml-3")
    deleteAlarm.classList.add("mr-3")
    deleteAlarm.classList.add("btn-danger")
    deleteAlarm.innerHTML = "Eliminar alarma";
    li.appendChild(deleteAlarm)

    // Creamos el check box para activar y desactivar alarmas
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("value", alarm.isActive);
    checkBox.setAttribute("onclick", "changeStatus(this);")
    checkBox.setAttribute("data-id", alarm.alarmId.toString())
    li.appendChild(checkBox);

    if(alarm.isActive) checkBox.setAttribute("checked", "true");

    $('alarmList').appendChild(li);

    alarmsArray.push(alarm);
}

 const populateHours = () => {
    let parent = $('alarmHours');

    // Con un bucle creamos los elementos de las horas que añadiremos al select de las horas
    for (let i = 0; i < 24; i++) {
        let option = document.createElement("option")

        // Si la hora es menor a 10 le añadimos un 0 por consistencia de datos
        let hour = i < 10 ? '0' + i : i;

        // Añadimos el valor al select y le asignamos el texto también
        option.setAttribute("value", hour);
        option.innerHTML = hour;

        // Añadimos el option al select
        parent.appendChild(option);
    }

}

 const populateMinutes = () => {
    let parent = $('alarmMinutes');

    for (let i = 0; i < 60; i++) {
        let option = document.createElement("option")
        let minutes = i < 10 ? '0' + i : i;
        option.setAttribute("value", minutes);
        option.innerHTML = minutes;

        parent.appendChild(option);
    }
}


 const populateSeconds = () => {
    let parent = $('alarmSeconds');

    for (let i = 0; i < 60; i++) {
        let option = document.createElement("option")
        let seconds = i < 10 ? '0' + i : i;
        option.setAttribute("value", seconds);
        option.innerHTML = seconds;

        parent.appendChild(option);
    }
}

// Helper to populate inputs
const populateCountdownHours = () => {
    let parent = $('countdownHours');

    // Con un bucle creamos los elementos de las horas que añadiremos al select de las horas
    for (let i = 0; i < 24; i++) {
        let option = document.createElement("option")

        // Si la hora es menor a 10 le añadimos un 0 por consistencia de datos
        let hour = i < 10 ? '0' + i : i;

        // Añadimos el valor al select y le asignamos el texto también
        option.setAttribute("value", hour);
        option.innerHTML = hour;

        // Añadimos el option al select
        parent.appendChild(option);
    }

}

const populateCountdownMinutes = () => {
    let parent = $('countdownMinutes');

    for (let i = 0; i < 60; i++) {
        let option = document.createElement("option")
        let minutes = i < 10 ? '0' + i : i;
        option.setAttribute("value", minutes);
        option.innerHTML = minutes;

        parent.appendChild(option);
    }
}


const populateCountdownSeconds = () => {
    let parent = $('countdownSeconds');

    for (let i = 0; i < 60; i++) {
        let option = document.createElement("option")
        let seconds = i < 10 ? '0' + i : i;
        option.setAttribute("value", seconds);
        option.innerHTML = seconds;

        parent.appendChild(option);
    }
}
