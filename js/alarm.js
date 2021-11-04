let alarmHours = $('alarmHours');
let alarmMinutes = $('alarmMinutes');
let alarmSeconds = $('alarmSeconds');
let button = $('setAlarm');
let alarmsArray = []; // Array donde guardaremos el objeto de la alarma

let input = document.getElementsByTagName("input");

// Al clicar en el input de de time le quitamos el border del validador
alarmHours.onfocus = () => {
    alarmHours.classList.remove("border");
    alarmHours.classList.remove("border-danger");
}
alarmMinutes.onfocus = () => {
    alarmMinutes.classList.remove("border");
    alarmMinutes.classList.remove("border-danger");
}

alarmSeconds.onfocus = () => {
    alarmSeconds.classList.remove("border");
    alarmSeconds.classList.remove("border-danger");
}

button.onclick = () => {

    if(validateInput(alarmHours.value) && validateInput(alarmMinutes.value) && validateInput(alarmSeconds.value)) {
        setAlarm(alarmHours.value, alarmMinutes.value, alarmSeconds.value);
        logAlarm(alarmHours.value, alarmMinutes.value, alarmSeconds.value);
    } else {
        alert("input value is invalid, please check it")
        alarmHours.classList.add('border');
        alarmHours.classList.add('border-danger');

        alarmMinutes.classList.add('border');
        alarmMinutes.classList.add('border-danger');

        alarmSeconds.classList.add('border');
        alarmSeconds.classList.add('border-danger');
    }
}

// Validamos el input de la hora a la que queremos setear la alarma
const validateInput = (val) => {
    return (!isNaN(val));
}

let alarmController;

// Asignamos la alarma y esperamos a que funcione, cuando funcione emitiremos un modal y un sonido cuando salte el modal
const setAlarm = () => {
    clearInterval(alarmController);

    alarmController = setInterval(() => {
        let trigger = new Date();
        let hour = trigger.getHours();
        let minute = trigger.getMinutes();
        let seconds = trigger.getSeconds();

        // Buscamos si la hora coincide con alguna alarma activada
        for (let i = 0; i < alarmsArray.length; i++) {
            if(
                hour === parseInt(alarmsArray[i].alarmHours) &&
                minute === parseInt(alarmsArray[i].alarmMinutes) &&
                seconds === parseInt(alarmsArray[i].alarmSeconds) &&
                alarmsArray[i].isActive === true
            ) {
                console.log("true");
                playAlarmSound();
            }
        }

    }, 1000);
}

const playAlarmSound = () => {
    clearInterval(alarmController);
    let audio = new Audio("./resources/audio/alarmSound.mp3");
    return audio.play();
}

const logAlarm = (hours, minutes, seconds) => {

    // Añade la alarma a la array de alarmas
    let alarm = {
        alarmId: alarmsArray.length + 1,
        alarmHours: hours < 10 ? "0" + hours : hours,
        alarmMinutes: minutes < 10 ? "0" + minutes : minutes,
        alarmSeconds: seconds < 10 ? "0" + seconds : seconds,
        isActive: false
    }

    // Almacenamos el objeto alarma en la array
    alarmsArray.push(alarm);

    // Guardar la alarma en el localStorage del navegador
    localStorage.setItem(`alarm${alarmsArray.length}`, alarm);

    // Añade la alarma a la lista
    let li = document.createElement("li");
    li.setAttribute("data-id", (alarmsArray.length).toString())
    li.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    // Creamos el botón para eliminar alarmas
    let deleteAlarm = document.createElement("button");
    deleteAlarm.setAttribute("data-id", (alarmsArray.length).toString());
    deleteAlarm.setAttribute("onclick", "deleteItem(this);");
    deleteAlarm.id = `alarm${alarmsArray.length}`;
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
    checkBox.setAttribute("data-id", (alarmsArray.length).toString())
    li.appendChild(checkBox);

    $('alarmList').appendChild(li);

    clearInterval(alarmController);
    setAlarm();
}

// Función para eliminar alarmas de la lista y de la array
const deleteItem = (item) => {
    let id = item.getAttribute("data-id");
    console.log(id);
    // Eliminamos el objeto de la array
    for (let i = 0; i < alarmsArray.length; i++) {
        if(parseInt(alarmsArray[i].alarmId) === parseInt(id)) {
            // Eliminamos el registro
            alarmsArray.splice(i, 1);

            // Reiniciamos la alarma para que no lea el registro eliminado
            clearInterval(alarmController);
            setAlarm();
        }
    }

    let el = $(`alarm${id}`);
    console.log(el)
    $('alarmList').removeChild(el);
}

// Función para activar o desactivar las alarmas
const changeStatus = (item) => {
    let id = item.getAttribute("data-id");

    for (let i = 0; i < alarmsArray.length; i++) {
        if(parseInt(alarmsArray[i].alarmId) === parseInt(id)) {
            alarmsArray[i].isActive = !alarmsArray[i].isActive; // Cambiamos el estado de la alarma

            // Reiniciamos el intervalo de la alarma para que lea los cambios si se han ejecutado
            clearInterval(alarmController);
            setAlarm();
        }
    }
}