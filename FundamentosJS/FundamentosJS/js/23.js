// manipular elementos HTML con jsonplaceholder

const heading = document.querySelector('.heading');

heading.textContent = 'El DOM'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Your name'


const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')