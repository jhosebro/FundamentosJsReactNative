// TODO operaciones con arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos al array

const nuevoArray = [...tecnologias, 'GraphQL']

//Eliminar elementos al array

const nuevoArray2 = tecnologias.filter(function (tech){
    return tech !== 'CSS'
})

//Reemplazar elementos al array

const nuevoArray3 = tecnologias.map( function (tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    }
    else{
        return tech
    }
})

console.table(tecnologias);
console.table(nuevoArray);
console.table(nuevoArray2);
console.table(nuevoArray3);