// TIMER filds
const hourElement  = document.querySelector('.hour')
const minuteElement  = document.querySelector('.minute')
const secondElement  = document.querySelector('.second')
const milisecondElement  = document.querySelector('.milisecond')

//Buttons 
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')


// Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearField()
    newButton.disabled = true
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    counter++
    const results  = document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText ='Result ' + counter + ':' + " " + + hour + ':' + minute +':' + second + ':' + milisecond
    results.append(block)
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})



// Variables 
let hour = 00,
    minute = 00,
    second = 00,
    milisecond = 00,
    interval
    counter = 0
    disabled = true

function startTimer() {
    milisecond++

    //milisecond
    if (milisecond < 9){
     milisecondElement.innerText = "0" + milisecond
    }
    if (milisecond > 9){
        milisecondElement.innerText = milisecond
       }

    if (milisecond > 99) {
        second++
        secondElement.innerText = "0" + second
        milisecond = 0 
        milisecondElement.innerText = "0" + milisecond
    }

//second
if (second < 9){
    secondElement.innerText = "0" + second
   }
   if (second > 9){
       secondElement.innerText = second
      }

   if (second > 60) {
       minute++
       minuteElement.innerText = "0" + minute
       second = 0 
       secondElement.innerText = "0" + second
   }

//hour
if (minute < 9){
    minuteElement.innerText = "0" + minute
   }
   if (hour > 9){
    minuteElement.innerText = minute
      }

   if (minute > 60) {
       hour++
       hourElement.innerText = "0" + hour
       minute = 0 
       minuteElement.innerText = "0" + minute
   }

   newButton.disabled = false

}

//CLEAR THE
function clearField(){
    hour = 00
    minute = 00
    second = 00
    milisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    milisecondElement.textContent = "00"
    
}

function disabledB(){
    if (disabled) {
        newButton.disabled = true
    }
}
disabledB()
