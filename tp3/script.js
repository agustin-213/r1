// 1

let animales = ["perro", "gato", "conejo", "loro"];

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}


// 2

for (let i = 0; i < animales.length; i++) {
    if (i % 2 === 0) {
        console.log(animales[i]);
    }
  }
  
  // 3

  let numeros = [4, 7, 2, 9, 5];
  let sumaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  
  console.log(sumaTotal);
  
  //4

  let datos = [3, 6, 1, 8];
  let resultado = []; 
  
  for (let i = 0; i < datos.length; i++) {
    resultado.push(datos[i] * 2); 
  }
  
  console.log(resultado); 
  
  //5

  let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombre = prompt("Ingresá un nombre");

if (alumnos.includes(nombre)) {
  console.log("El nombre se encontró en la lista.");
} else {
  console.log("El nombre NO está en la lista.");
}

  //6

let valores = [5, 0, 8, 0, 2];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] === 0) {
    valores[i] = 100;
  }
}

console.log(valores); 

  //10

let notas = [8, 7, 9, 10, 6];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let promedio = suma / notas.length;
console.log("El promedio es " + promedio);
