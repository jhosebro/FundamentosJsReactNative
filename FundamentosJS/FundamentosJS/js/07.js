//TODO Unir 2 objetos

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

const nuevoObjeto = 
{   
    producto : {...producto},
    cliente : {...cliente}
}

console.log(nuevoObjeto)
