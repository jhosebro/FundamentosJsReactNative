//TODO Objetos

const producto = 
{
    nombre : "Tablet",
    precio : 500,
    disponible : true
}

console.log(producto.nombre)

//TODO Destructuring

const { precio } = producto
console.log(precio)

//TODO Object Literal Enhacement

const autenticado = true
const usuario = 'Jhoan'

const nuevoObjeto = {
    autenticado,
    usuario
}

nuevoObjeto.usuario = 'Sebastian'

console.log(nuevoObjeto)


//Borrar atributos de un objeto
delete nuevoObjeto.autenticado

console.log(nuevoObjeto)

//Permite que un objeto no pueda ser modificado
Object.freeze(nuevoObjeto)

delete nuevoObjeto.usuario

console.log(nuevoObjeto)
