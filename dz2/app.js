// 1-ое задание

const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449) {
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

// 2-ое задание

let num = 0

const count = () => {
    let span = document.querySelector('.num')
    num++
    span.innerHTML = `${num}`
}

document.querySelector('.start').onclick = () => {
    let _1 = setInterval(count, 150);
    let stopped = function () {
        document.querySelector('.stop').onclick = () => {
            clearInterval(_1)
        }
    }
    stopped()
}


