//TODO Destructuring de dos o mas objetos

const producto = 
{
    nombre : "Tablet",
    precio : 500,
    disponible : true
}

const cliente = 
{
    nombre : "Jhoan",
    premium : true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente , premium } = cliente

console.log(nombre)
console.log(nombreCliente)
