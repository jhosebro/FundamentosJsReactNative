//TODO Eventos del DOM - Cliks

const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
    heading.textContent = 'DOM'
})

const enlace = document.querySelectorAll('.navegacion a');
enlace.forEach( enlace =>
    enlace.addEventListener('click', () => {
        console.log("Diste click en un enlace")
    }))