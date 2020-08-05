/*ANIMATIONS*/

/*ANIMACIONES ICONOS*/
const animation1 = document.querySelector('.animation1')
const animation2 = document.querySelector('.animation2')
const animation3 = document.querySelector('.animation3')
const indexBar = document.querySelector('.productsContainer')
console.log(animation1)

indexBar.addEventListener('mouseover', e => {
    e.preventDefault()
    animation1.classList.add('animate__animated', 'animate__heartBeat')
    animation2.classList.add('animate__animated', 'animate__heartBeat')
    animation3.classList.add('animate__animated', 'animate__heartBeat')
})

/*ANIMACIONES SERVICIOS */
const animation4 = document.querySelector('.animation4')
const animation5 = document.querySelector('.animation5')
const animation6 = document.querySelector('.animation6')
const animation7 = document.querySelector('.animation7')
const cont1 = document.querySelector('.cont1')
const cont2 = document.querySelector('.cont2')
const cont3 = document.querySelector('.cont3')
const cont4 = document.querySelector('.cont4')

cont1.addEventListener('mouseover', e => {
    e.preventDefault()
    animation4.classList.add('animate__animated', 'animate__rubberBand', 'animatedColor')
})
cont2.addEventListener('mouseover', e => {
    e.preventDefault()
    animation5.classList.add('animate__animated', 'animate__rubberBand', 'animatedColor')
})
cont3.addEventListener('mouseover', e => {
    e.preventDefault()
    animation6.classList.add('animate__animated', 'animate__rubberBand', 'animatedColor')
})
cont4.addEventListener('mouseover', e => {
    e.preventDefault()
    animation7.classList.add('animate__animated', 'animate__rubberBand', 'animatedColor')
})

/*ANIMACIONES NOSOTROS*/