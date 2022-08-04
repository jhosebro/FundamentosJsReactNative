const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]


let nuevoArray2

nuevoArray2 = tecnologias.filter( tech => tech !== 'React')

//const resultado = tecnologias.includes('GraphQL')

//Some - Devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)

//Find - Devuelve el primer elemento que cumpla la condicion de
//const resultado = numeros.find(numero => numero > 15)

//Every - Retorna true o false si todos cumplen la condicion 

// const resultado = numeros.every(numero => numero > 15)

//Reduce 
// const resultado = numeros.reduce((total, numero) => numero + total, 0)

//Filter - Crea un nuevo array en base a una condicion
// const resultado = tecnologias.filter(tech => tech === 'React')
// const resultado = numeros.filter(tech => tech > 15)



tecnologias.forEach( (tech, index) =>
    {   
        console.log(index)
    })

//map permite crear un nuevo array

const arrayMap = tecnologias.map( tech =>
    {   
        return tech
    })

console.log(arrayMap)