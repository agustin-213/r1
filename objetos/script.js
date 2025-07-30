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
let estudiantes = [
    {
        nombre: "Jazmin",
        apellido: "Rodriguez",
        edad:16 
    }
    {
        nombre: "Matias",
        apellido: "Rosello",
        edad:16 
    }
    {
        nombre: "Agustin",
        apellido: "Avila",
        edad:16 
    }
]

//El corchete indica que posicion del arreglo se usara
console.log (estudiantes[1].nombre)

//mostrara en la consola todos los obetos
for (let index = 0; index < estudiantes.length; index++) {
    console.log(estudiantes[index].apellido + "" + estudiantes[index])
    
}