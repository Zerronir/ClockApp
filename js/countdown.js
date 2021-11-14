let countdownHours = 0;
let countdownMinutes = 0;
let countdownSeconds = 0;
let intervalController;
let actualTime;
let countdownDistance;
let countdownStartButton = $('setCountdown');
let countdownStopButton = $('stopCountdown');
let countdownResetButton = $('resetCountdown');

let cdhours = $('cdhours');
let cdminutes = $('cdminutes');
let cdseconds = $('cdseconds');

let startchr = 0;       // used to control when to read data from form


countdownStartButton.onclick = () => {
    countdownTimer();
}

countdownStopButton.onclick = () => {
    stopTheCountdown();
}

countdownResetButton.onclick = () => {
    resetCountdown();
}

const stopTheCountdown = () => {
    startchr = 0;
    clearInterval(intervalController);
}

const resetCountdown = () => {
    startchr = 0;
    stopTheCountdown();
    actualTime = null;
    countdownHours = 0;
    countdownMinutes = 0;
    countdownSeconds = 0;
}

const playDeadLineSound = () => {
    let audio = new Audio("./resources/audio/countdownAlarm.mp3");
    audio.play();
}

const countdownTimer = () => {
    // https://coursesweb.net/javascript/
    // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
    if(startchr == 0 && $('countdownMinutesOptions') && $('countdownSecondsOptions')) {
        // makes sure the script uses integer numbers
        countdownHours = parseInt($('countdownHoursOptions').value);
        countdownMinutes = parseInt($('countdownMinutesOptions').value);
        countdownSeconds = parseInt($('countdownSecondsOptions').value);

        // if data not a number, sets the value to 0
        if(isNaN(countdownHours)) countdownHours = 0;
        if(isNaN(countdownMinutes)) countdownMinutes = 0;
        if(isNaN(countdownSeconds)) countdownSeconds = 0;

        // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
        document.getElementById('cdhours').value = countdownHours;
        document.getElementById('cdminutes').value = countdownMinutes;
        document.getElementById('cdseconds').value = countdownSeconds;
        startchr = 1;

        $('countdownHoursOptions').value = '';
        $('countdownMinutesOptions').value = '';
        $('countdownSecondsOptions').value = '';

    }

    intervalController = setInterval(() => {
        // if minutes and seconds are 0, sets $startchr to 0, and return false
        if(countdownMinutes === 0 && countdownSeconds === 0 && countdownHours === 0) {
            startchr = 0;

            /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */
            clearInterval(intervalController);
            return playDeadLineSound();
        }
        else {
            // decrease seconds, and decrease minutes if seconds reach to 0
            countdownSeconds--;
            if(countdownSeconds < 0) {
                if(countdownHours > 0) {
                    if(countdownMinutes > 0) {
                        countdownSeconds = 59;
                        countdownMinutes--;
                    }
                    else {
                        if(countdownMinutes > 0) {
                            countdownSeconds = 59;
                            countdownHours--;
                            countdownMinutes--;
                        }
                        else {
                            countdownHours--;
                            countdownSeconds = 59;
                            countdownMinutes = 59;
                        }
                    }
                } else {
                    if(countdownMinutes > 0) {
                        countdownSeconds = 59;
                        countdownMinutes--;
                    }
                    else {
                        countdownSeconds = 0;
                        countdownMinutes = 0;
                    }
                }
            }
        }

        // display the time in page, and auto-calls this function after 1 seccond
        document.getElementById('cdhours').innerHTML = countdownHours < 10 ? `0${countdownHours}` : countdownHours;
        document.getElementById('cdminutes').innerHTML = countdownMinutes < 10 ? `0${countdownMinutes}` : countdownMinutes;
        document.getElementById('cdseconds').innerHTML = countdownSeconds < 10 ? `0${countdownSeconds}` : countdownSeconds;

    }, 1000);
}
