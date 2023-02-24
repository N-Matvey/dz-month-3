const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const rub = document.querySelector('#rub')

const convert = (elem, target, target2, isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.rub).toFixed(2)
            } else if (elem === rub) {
                target.value = (elem.value * response.rubusd).toFixed(2)
                target2.value = (elem.value * response.rub).toFixed(2)
            } else {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value / response.rubusd).toFixed(2)
            }
            elem.value === '' && (target.value = '')
            elem.value === '' && (target2.value = '')
        }
    }
}

convert(som, usd, rub, true)
convert(usd, som, rub, false)
convert(rub, usd, som, false)