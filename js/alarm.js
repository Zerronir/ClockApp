"use strict";function _classPrivateMethodInitSpec(t,e){_checkPrivateRedeclaration(t,e),e.add(t)}function _defineProperty(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function _classPrivateMethodGet(t,e,s){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return s}function _classPrivateFieldInitSpec(t,e,s){_checkPrivateRedeclaration(t,e),e.set(t,s)}function _checkPrivateRedeclaration(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldSet(t,e,s){return _classApplyDescriptorSet(t,_classExtractFieldDescriptor(t,e,"set"),s),s}function _classApplyDescriptorSet(t,e,s){if(e.set)e.set.call(t,s);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=s}}function _classPrivateFieldGet(t,e){return _classApplyDescriptorGet(t,_classExtractFieldDescriptor(t,e,"get"))}function _classExtractFieldDescriptor(t,e,s){if(!e.has(t))throw new TypeError("attempted to "+s+" private field on non-instance");return e.get(t)}function _classApplyDescriptorGet(t,e){return e.get?e.get.call(t):e.value}var _count=new WeakMap;class Modal{constructor(){_classPrivateFieldInitSpec(this,_count,{writable:!0,value:0})}show({type:t,title:e="",content:s="",buttons:a=[],centered:o=!1,dismissible:i=!0,backdrop:n=!!i||"static",keyboard:r=i,focus:l=!0,fullscreen:d=!1,size:c=""}){_classPrivateFieldSet(this,_count,1+ +_classPrivateFieldGet(this,_count)),c=["sm","lg","xl"].includes(c)?`modal-${c}`:"",d=d?"modal-fullscreen":"",o=o?"modal-dialog-centered modal-dialog-scrollable":"";const b=Bs5Utils.defaults.styles[t],u=b.btnClose.join(" "),m=b.border,h=document.createElement("div");h.setAttribute("id",`modal-${_classPrivateFieldGet(this,_count)}`),h.setAttribute("tabindex","-1"),h.classList.add("modal");let p="",v=[];Array.isArray(a)&&a.length&&(p+=`<div class="modal-footer ${m.join(" ")}">`,a.forEach((t,e)=>{switch(t.type||"button"){case"dismiss":p+=`<button type="button" class="${t.class}" data-bs-dismiss="modal">${t.text}</button>`;break;default:let s=`modal-${_classPrivateFieldGet(this,_count)}-button-${e}`;p+=`<button type="button" id="${s}" class="${t.class}">${t.text}</button>`,t.hasOwnProperty("handler")&&"function"==typeof t.handler&&v.push({id:s,handler:t.handler})}}),p+="</div>"),h.innerHTML=` <div class="modal-dialog ${o} ${d} ${c}">\n                                <div class="modal-content border-0">\n                                  ${e.length?`<div class="modal-header border-0 ${b.main.join(" ")}">\n                                    <h5 class="modal-title">${e}</h5>\n                                    ${i?`<button type="button" class="btn-close ${u}" data-bs-dismiss="modal" aria-label="Close"></button>`:""}\n                                  </div>`:""}\n                                  ${s.length?`<div class="modal-body">${s}</div>`:""}\n                                  ${p}\n                                </div>\n                              </div>`,document.body.appendChild(h),h.addEventListener("hidden.bs.modal",function(t){t.target.remove()}),v.forEach(t=>{document.getElementById(t.id).addEventListener("click",t.handler)});const f={backdrop:n,keyboard:r,focus:l},y=new bootstrap.Modal(h,f);return y.show(),y}}var _count2=new WeakMap;class Snack{constructor(){_classPrivateFieldInitSpec(this,_count2,{writable:!0,value:0})}show(t,e,s=0,a=!0){_classPrivateFieldSet(this,_count2,1+ +_classPrivateFieldGet(this,_count2));const o=Bs5Utils.defaults.styles[t],i=o.btnClose.join(" "),n=document.createElement("div");n.classList.add("toast","align-items-center","border-1","border-dark"),o.main.forEach(t=>{n.classList.add(t)}),n.setAttribute("id",`snack-${_classPrivateFieldGet(this,_count2)}`),n.setAttribute("role","alert"),n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),n.innerHTML=`<div class="d-flex">\n                        <div class="toast-body">${e}</div>\n                        ${a?`<button type="button" class="btn-close ${i} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>`:""}\n                      </div>`,Bs5Utils.defaults.toasts.stacking||document.querySelectorAll(`#${Bs5Utils.defaults.toasts.container} .toast`).forEach(t=>{t.remove()}),document.querySelector(`#${Bs5Utils.defaults.toasts.container}`).appendChild(n),n.addEventListener("hidden.bs.toast",function(t){t.target.remove()});const r={autohide:s>0&&"number"==typeof s};s>0&&"number"==typeof s&&(r.delay=s);const l=new bootstrap.Toast(n,r);return l.show(),l}}var _count3=new WeakMap;class Toast{constructor(){_classPrivateFieldInitSpec(this,_count3,{writable:!0,value:0})}show({type:t,icon:e="",title:s,subtitle:a="",content:o="",buttons:i=[],delay:n=0,dismissible:r=!0}){_classPrivateFieldSet(this,_count3,1+ +_classPrivateFieldGet(this,_count3));const l=Bs5Utils.defaults.styles[t],d=l.btnClose.join(" "),c=l.border,b=document.createElement("div");b.setAttribute("id",`toast-${_classPrivateFieldGet(this,_count3)}`),b.setAttribute("role","alert"),b.setAttribute("aria-live","assertive"),b.setAttribute("aria-atomic","true"),b.classList.add("toast","align-items-center"),c.forEach(t=>{b.classList.add(t)});let u="",m=[];Array.isArray(i)&&i.length&&(u+=`<div class="d-flex justify-content-center mt-2 pt-2 border-top ${c.join(" ")}">`,i.forEach((t,e)=>{switch(t.type||"button"){case"dismiss":u+=`<button type="button" class="${t.class}" data-bs-dismiss="toast">${t.text}</button>&nbsp;`;break;default:let s=`toast-${_classPrivateFieldGet(this,_count3)}-button-${e}`;u+=`<button type="button" id="${s}" class="${t.class}">${t.text}</button>&nbsp;`,t.hasOwnProperty("handler")&&"function"==typeof t.handler&&m.push({id:s,handler:t.handler})}}),u+="</div>"),b.innerHTML=`<div class="toast-header ${l.main.join(" ")}">\n                            ${e}\n                            <strong class="me-auto">${s}</strong>\n                            <small>${a}</small>\n                            ${r?`<button type="button" class="btn-close ${d}" data-bs-dismiss="toast" aria-label="Close"></button>`:""}\n                        </div>\n                        <div class="toast-body">\n                            ${o}\n                            ${u}\n                        </div>`,Bs5Utils.defaults.toasts.stacking||document.querySelectorAll(`#${Bs5Utils.defaults.toasts.container} .toast`).forEach(t=>{t.remove()}),document.querySelector(`#${Bs5Utils.defaults.toasts.container}`).appendChild(b),b.addEventListener("hidden.bs.toast",function(t){t.target.remove()}),m.forEach(t=>{document.getElementById(t.id).addEventListener("click",t.handler)});const h={autohide:n>0&&"number"==typeof n};n>0&&"number"==typeof n&&(h.delay=n);const p=new bootstrap.Toast(b,h);return p.show(),p}}var _createToastContainer=new WeakSet;class Bs5Utils{constructor(){_classPrivateMethodInitSpec(this,_createToastContainer),_classPrivateMethodGet(this,_createToastContainer,_createToastContainer2).call(this),this.Toast=new Toast,this.Snack=new Snack,this.Modal=new Modal}static registerStyle(t,e){if("object"!=typeof e&&Array.isArray(e))throw"The styles parameter must be an object when you register component style.";Bs5Utils.defaults.styles[t]=e}}function _createToastContainer2(){let t=document.querySelector(`#${Bs5Utils.defaults.toasts.container}`);if(!t){const e={"top-left":"top-0 start-0 ms-1 mt-1","top-center":"top-0 start-50 translate-middle-x mt-1","top-right":"top-0 end-0 me-1 mt-1","middle-left":"top-50 start-0 translate-middle-y ms-1","middle-center":"top-50 start-50 translate-middle p-3","middle-right":"top-50 end-0 translate-middle-y me-1","bottom-left":"bottom-0 start-0 ms-1 mb-1","bottom-center":"bottom-0 start-50 translate-middle-x mb-1","bottom-right":"bottom-0 end-0 me-1 mb-1"};(t=document.createElement("div")).classList.add("position-relative"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.innerHTML=`<div id="${Bs5Utils.defaults.toasts.container}" class="toast-container position-fixed pb-1 ${e[Bs5Utils.defaults.toasts.position]||e["top-right"]}"></div>`,document.body.appendChild(t)}}_defineProperty(Bs5Utils,"defaults",{toasts:{position:"top-right",container:"toast-container",stacking:!0},styles:{secondary:{btnClose:["btn-close-white"],main:["text-white","bg-secondary"],border:["border-secondary"]},light:{btnClose:[],main:["text-dark","bg-light","border-bottom","border-dark"],border:["border-dark"]},white:{btnClose:[],main:["text-dark","bg-white","border-bottom","border-dark"],border:["border-dark"]},dark:{btnClose:["btn-close-white"],main:["text-white","bg-dark"],border:["border-dark"]},info:{btnClose:["btn-close-white"],main:["text-white","bg-info"],border:["border-info"]},primary:{btnClose:["btn-close-white"],main:["text-white","bg-primary"],border:["border-primary"]},success:{btnClose:["btn-close-white"],main:["text-white","bg-success"],border:["border-success"]},warning:{btnClose:["btn-close-white"],main:["text-white","bg-warning"],border:["border-warning"]},danger:{btnClose:["btn-close-white"],main:["text-white","bg-danger"],border:["border-danger"]}}});

const bs5Utils = new Bs5Utils();

let alarmHours = $('alarmHoursOptions');
let alarmMinutes = $('alarmMinutesOptions');
let alarmSeconds = $('alarmSecondsOptions');
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

        // Sacamos un toast con mensaje de error
        errorToast();

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

    return val !== "";
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
        alarmHours: hours,
        alarmMinutes: minutes,
        alarmSeconds: seconds,
        isActive: false
    }

    // Almacenamos el objeto alarma en la array
    alarmsArray.push(alarm);

    // Guardar la alarma en el localStorage del navegador
    localStorage.setItem(`alarms`, JSON.stringify(alarmsArray));

    // Añade la alarma a la lista
    let li = document.createElement("li");
    li.id = `alarmLI${alarmsArray.length.toString()}`
    li.setAttribute("data-id", (alarmsArray.length).toString())
    li.innerHTML = `${hours}:${minutes}:${seconds}`;

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

    // Vacíamos el formulario
    alarmHours.value = ''
    alarmMinutes.value = ''
    alarmSeconds.value = ''

    // Añadimos el texto al toast
    let mensaje = `${alarm.alarmHours}:${alarm.alarmMinutes}:${alarm.alarmSeconds}`;

    toast(mensaje);
    clearInterval(alarmController);
    setAlarm();
}

// Función para eliminar alarmas de la lista y de la array
const deleteItem = (item) => {
    let id = item.getAttribute("data-id");

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


    // Eliminamos el li de la lista
    let el = $(`alarmLI${id}`);
    el.remove();
    deleteToast(); // Mostramos un mensaje de que se ha eliminado la alarma

    if(alarmsArray.length === 0) {
        localStorage.removeItem('alarms');
    } else {
        localStorage.setItem('alarms', JSON.stringify(alarmsArray))
    }

}

// Función para activar o desactivar las alarmas
const changeStatus = (item) => {
    let id = item.getAttribute("data-id");

    for (let i = 0; i < alarmsArray.length; i++) {
        if(parseInt(alarmsArray[i].alarmId) === parseInt(id)) {
            alarmsArray[i].isActive = !alarmsArray[i].isActive; // Cambiamos el estado de la alarma
            if (alarmsArray[i].isActive === true) activateAlarm();
            if (alarmsArray[i].isActive === false) deactivateAlarm();
            // Reiniciamos el intervalo de la alarma para que lea los cambios si se han ejecutado
            clearInterval(alarmController);
            setAlarm();
        }
    }
    localStorage.setItem('alarms', JSON.stringify(alarmsArray));
}

// Toast para cuando se añade una alarma correctamente
const toast = (mensaje) => {
    bs5Utils.Toast.show({
        type: 'primary',
        icon: `<i class="far fa-check-circle fa-lg me-2"></i>`,
        title: 'Alarma creada!',
        content: `La alarma ha sido creada para las ${mensaje}`,
        delay: 2000,
        dismissible: true
    });
}

// Toast para cuando hay un error del validador
const errorToast = () => {
    bs5Utils.Toast.show({
        type: 'danger',
        icon: `<i class="far fa-check-circle fa-lg me-2"></i>`,
        title: 'Error!!!',
        content: `Los datos introducidos son inválidos, por favor rellena todo correctamente`,
        delay: 2000,
        dismissible: true
    });
}

// Toast para cuando hay un error del validador
const deleteToast = () => {
    bs5Utils.Toast.show({
        type: 'warning',
        icon: `<i class="far fa-check-circle fa-lg me-2"></i>`,
        title: 'Alarma eliminada',
        content: `La alarma se ha eliminado correctamente`,
        delay: 2000,
        dismissible: true
    });
}

// Toast para avisar al usuario de que ha activado la alarma
const activateAlarm = () => {
    bs5Utils.Toast.show({
        type: 'success',
        icon: `<i class="far fa-check-circle fa-lg me-2"></i>`,
        title: 'Alarma eliminada',
        content: `La alarma se ha activado correctamente`,
        delay: 2000,
        dismissible: true
    });
}

// Toast para avisar al usuario de que ha desactivado la alarma
const deactivateAlarm = () => {
    bs5Utils.Toast.show({
        type: 'success',
        icon: `<i class="far fa-check-circle fa-lg me-2"></i>`,
        title: 'Alarma eliminada',
        content: `La alarma se ha desactivado correctamente`,
        delay: 2000,
        dismissible: true
    });
}

const editAlarm = () => {

}

// Rellenamos las horas
const populateHours = () => {
    let parent = $('alarmHours');

    // Con un bucle creamos los elementos de las horas que añadiremos al select de las horas
    for (let i = 0; i < 24; i++) {
        let option = document.createElement("option")

        // Si la hora es menor a 10 le añadimos un 0 por consistencia de datos
        let hour = i < 10 ? '0'+i : i;

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
        let minutes = i < 10 ? '0'+i : i;
        option.setAttribute("value", minutes);
        option.innerHTML = minutes;

        parent.appendChild(option);
    }
}

// Rama alarma
const populateSeconds = () => {
    let parent = $('alarmSeconds');

    for (let i = 0; i < 60; i++) {
        let option = document.createElement("option")
        let seconds = i < 10 ? '0'+i : i;
        option.setAttribute("value", seconds);
        option.innerHTML = seconds;

        parent.appendChild(option);
    }
}