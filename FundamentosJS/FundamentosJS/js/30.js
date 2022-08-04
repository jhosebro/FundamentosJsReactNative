//Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"
// Async Await API - Async Bloquea cada linea de codigo para que termine de ser ejecutado
const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
}

consultarAPI()