window.onload = () => {
    populateHours();
    populateMinutes();
    populateSeconds();

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