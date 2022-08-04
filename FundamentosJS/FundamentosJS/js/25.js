//Eventos del DOM - inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function() {
    console.log('Escribiendo en el input')
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', (e) => {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100)
})