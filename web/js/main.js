'use strict'

// Header

/* let headerWrapperIcon = document.querySelector('.header-wrapper__icon')

setInterval(function(){
    headerWrapperIcon.style.display = 'flex'
}, 350)

setInterval(function(){
    headerWrapperIcon.style.display = 'none'
}, 700) */

let headerWrapper = document.querySelector('.header-wrapper')

function setBackgroundColor(color) {
    headerWrapper.style = `background-color: ${color};`
}

// setInterval(setBackgroundColor.bind(this, '#AF1685'), 20000)
// setInterval(setBackgroundColor.bind(this, 'rgb(154, 169, 179)'), 5000)
// setInterval(setBackgroundColor.bind(this, 'rgb(92, 78, 57)'), 10000)
// setBackgroundColor('#AF1685')
// setTimeout(setBackgroundColor.bind(this, 'black'), 10000)

// Slider

let sliderImg = document.getElementById('slider__img')
let controlPrev = document.querySelector('.prev')
let controlNext = document.querySelector('.next')

var cnt = 1

// The function to be controlled the slider with the next and prev buttons.
function controlSlider(option){
    if(option == 'next'){
        cnt = (cnt + 1)%10
        if (cnt == 0) cnt = 1
    }
    else {
        cnt = (cnt - 1)%10
        if (cnt == 0) cnt = 9
    }
    let path = './assets/img/rosi' +cnt +'.jpg'
    sliderImg.src = path
}

controlNext.addEventListener('click', controlSlider.bind(this,'next'))
controlPrev.addEventListener('click', controlSlider.bind(this,'prev'))

// Auto run slider: Default
let controlPlay = document.querySelector('.play')
let controlStop = document.querySelector('.stop')
var autoRunSlider = setInterval(controlSlider.bind(this, 'next'), 5000)

controlStop.addEventListener('click', () => {
    clearInterval(autoRunSlider)
})

controlPlay.addEventListener('click', function(){
    autoRunSlider = setInterval(controlSlider.bind(this, 'next'), 5000)
})
