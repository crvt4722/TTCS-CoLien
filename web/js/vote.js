let arr = ['Ronaldo', 'Messi', 'Maguire', 'Benzema', 'Neymar', 'Mbappe']
let arrLength = arr.length
var index = 0

let firstImage = document.querySelector('.first img')
let secondImage = document.querySelector('.second img')
let thirdImage = document.querySelector('.third img')

let firstInput = document.querySelector('.first input')
let secondInput = document.querySelector('.second input')
let thirdInput = document.querySelector('.third input')

let firstLabel = document.querySelector('.first label')
let secondLabel = document.querySelector('.second label')
let thirdLabel = document.querySelector('.third label')

function changeImage(){
    if(index == 7) index = 0
    if(index == -1) index = arrLength -1
    let first = arr[index%arrLength]
    let second = arr[(index+1)%arrLength]
    let third = arr[(index+2)%arrLength]
    console.log(first + second + third + index)

    firstImage.src  = './assets/img/vote/' + first.toLowerCase() + '.jpg'
    secondImage.src  = './assets/img/vote/' + second.toLowerCase() + '.jpg'
    thirdImage.src = './assets/img/vote/' + third.toLowerCase() + '.jpg'

    firstInput.value = first
    secondInput.value = second
    thirdInput.value = third

    firstLabel.textContent = first
    secondLabel.textContent = second
    thirdLabel.textContent = third

}

function hanldeControlNext(){
    index += 1
    changeImage()
}

function handleControllPrev(){
    index -= 1 
    changeImage()
}