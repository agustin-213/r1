//ejercicio 1
let frutas = ["naranja", "manzana", "pera"]
frutas.push ("sandia")
frutas.unshift ("uva")
frutas.pop ("")
frutas.shift ("")
console.log(frutas)

//Ejercicio 2
let nombres = ["Gonza", "Jero", "Juana"]
alert(nombres.length)
nombres.push ("Agustin", "Damaris")
alert(nombres.length)

//Ejercicio 3
let numeros =[1,2,3,4,5,6,7,8,9,10]
for (let indice = 0; indice <= numeros.length; indice++) {
    console.log(indice)
}

//ejercicio 4
const numeros4 = [1, 2, 3, 4, 5];
let sumaTotal = 0;

for (let i = 0; i < numeros4.length; i++) {
  sumaTotal += numeros4[i];
}

console.log(sumaTotal);

//ejercicio 5

let nombres1 = prompt ("Escribe 5  divididas en cada espacio")
let nombres2 = prompt ("pon un nombre")
let nombres3 = prompt ("pon un nombre")
let nombres4 = prompt ("pon un nombre")
let nombres5 = prompt ("pon un nombre")
let registroNombres5 = []
registroNombres5.push (nombres1,nombres2,nombres3,nombres4,nombres5)
alert (registroNombres5)