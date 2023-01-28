const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (elem, target, target2, isTrue) => {
    elem.addEventListener('input', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.response)
        if(isTrue) {
            (target.value = (elem.value / response.usd).toFixed(2)) && (target2.value = (elem.value / response.euroSom).toFixed(2))
        }else if (target2.value === target.value){
            (target.value = (elem.value * response.euroSom).toFixed(2)) && (target2.value = (elem.value * response.euroUsa).toFixed(2))
        }else {
            (target.value = (elem.value * response.usd).toFixed(2)) && (target2.value = (elem.value * response.euroUsd).toFixed(2))
        }
        elem.value === "" && (target.value = "")
        elem.value === "" && (target2.value = "")
    }
})
}

convert(som,euro,usd, true)
convert(som,usd,euro, true)
convert(usd,euro,som, false)
convert(usd,som, euro,false)
convert(euro,usd, som,true)
convert(euro,som, usd,false)