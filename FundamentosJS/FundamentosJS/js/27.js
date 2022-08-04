//TODO Creando codigo HTML en js

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre')
    const password = document.querySelector('.password')

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    console.log(alerta)

    if(nombre.value === '' || password.value === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('Error')
    }
    else
    {
        alerta.textContent = 'Todo bien, enviando...'
        alerta.classList.add('Exito')
    }

    formulario.appendChild(alerta)
    console.log("Enviaste formulario")
})