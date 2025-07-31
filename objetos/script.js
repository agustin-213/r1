//Los objetos deben estar separados por comas
/*let estudiante = {
    // clave: valor 
    nombre: " Agustin",
    apellido: " Avila",
    DNI: 48910762,
    Direccion: " calle falsa 123",
    
}
console.log (estudiante.nombre + estudiante.apellido)
*/

//Cada objeto debera estar separado por una coma si no ocurre un error
let estudiantes = [
    {
        nombre: "Jazmin",
        apellido: "Rodriguez",
        edad:16,
        nota:7
    },
    {
        nombre: "Matias",       
        apellido: "Rosello",
        edad:16,
        nota:7.5 
    },
    {
        nombre: "Agustin",
        apellido: "Avila",
        edad:16 ,
        nota:10
    },
    {
        nombre: "Jeronimo",
        apellido: "Orfila",
        edad:16,
        nota:3
    },
    {
        nombre: "Damaris",
        apellido: "Villegas",
        edad:16,
        nota:9.89 
    },
]

//El corchete indica que posicion del arreglo se usara
console.log (estudiantes[1].nombre)

//mostrara en la consola todos los obetos
for (let index = 0; index < estudiantes.length; index++) {
    console.log(estudiantes[index].apellido + "" + estudiantes[index] + "Su nota numerica del examen es:" + "" +  nota[index])
    
}