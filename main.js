
const div = document.querySelector('#cube')
let step, stop, rotate
step = document.querySelector('#step')
stop = document.querySelector('#stop')
rotate = document.querySelector('#rotate')
let i = 10
let left = 0
let mtop = 0
let mrotate = 0

let anim1, anim2
let allWidth = document.clientWidth - 210

stop.addEventListener('click', () => {
    i=0
    clearInterval(anim1)
    clearInterval(anim2)
})

rotate.addEventListener('click', () => {
    i=10
  anim2 = setInterval(() => {
    div.style.transform =`rotate(${mrotate}deg)`
    mrotate += i
  }, 100)
})

step.addEventListener('click', () => {
    i=10
  anim1 = setInterval(() => {
    if (left == 0 && mtop <= 500 && mtop > 0) {
      mtop -= i
      div.style.top = mtop + 'px'
    } else if (left <= 600 && mtop == 500) {
      left -= i
      div.style.left = left + 'px'
    } else if (mtop >= 0 && mtop <= 500 && left >= 600) {
      div.style.top = mtop + 'px'
      mtop += i
    } else if (left >= 0 && mtop == 0 && left <= 600) {
      div.style.left = left + 'px'
      left += i
    }
  }, 100)
})