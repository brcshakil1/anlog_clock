setInterval(setClock, 1000);

const hoursHand = document.querySelector('[data-hour-hand]');
const minutesHand = document.querySelector('[data-minutes-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');


function setClock() {
    const currentTime = new Date();
    const secondRatio = currentTime.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentTime.getHours()) / 12;

    setRotation(secondsHand, secondRatio);
    setRotation(minutesHand, minuteRatio);
    setRotation(hoursHand, hourRatio)
}

function setRotation (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}