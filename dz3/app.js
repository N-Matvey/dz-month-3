const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'None'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}


hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    const target = event.target

    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target === item) {
                num = i
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const modalDarkTrigger = document.querySelector('.btn_dark')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
modalDarkTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

window.onscroll = () => {
    if (scrollY >= 4200) {
        modal.classList.remove('hide')
        modal.classList.add('show')
    } else {
        modal.classList.add('hide')
        modal.classList.remove('show')
    }
}

function slide() {
    if (num <= 2){
        num++
        console.log(num)
        hideTabContent()
        showTabContent(num)
        setTimeout(slide, 8000)
    } else {
        num = -1;
        setTimeout(slide, 4000)
    }
}

setTimeout(slide, 5000)

modal.onclick = (event) => event.target === modal ? closeModal() : false


// data

const deadline = '2023-02-25'


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

let num = 0;

setClock('.timer', deadline)