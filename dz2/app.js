// 1-ое задание

const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 2099 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 2099 && positionY <= 699) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX !== 0) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionY !== 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}

move()



const deadline = '2023-06-01'


function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.seconds)
    }

    function makeZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

}

setClock('.timer', deadline)



