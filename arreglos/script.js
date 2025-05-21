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
    const element = array[indice];
    console.log(indice)
}