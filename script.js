//CONSTANTES
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let actualDate= new Date();
    let hour = actualDate.getHours();
    let min = actualDate.getMinutes();
    let sec = actualDate.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
})