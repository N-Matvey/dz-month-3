const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')


const regExp = /^[0 1 2]\d{13}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'NOT OK'
        innResult.style.color = 'red'
    }
}

let num = 0
let box = document.querySelector('.box')

const block = () => {
    num++
    box.style.left = `${num}px`
    if (num < 450){
        setTimeout(block, 10)
    }

}

block()
