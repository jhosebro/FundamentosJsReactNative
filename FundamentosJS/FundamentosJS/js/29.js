//TODO Fetch API

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => {
        console.log(resultado);
    })
}

consultarAPI()