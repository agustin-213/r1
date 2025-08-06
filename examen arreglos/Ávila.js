
// actividad 1

let notas = [7, 8, 9, 6, 10, 8, 7, 9, 6, 8, 9, 10, 7]; 
let sumaNotas = 0;
for (let i = 0; i < notas.length; i++) {
  sumaNotas += notas[i];
}
let promedio = sumaNotas / notas.length;
console.log("El promedio general del trimestre es: " + promedio);

  
// actividad 2
  let numeros1 = [1,2,3,4,5,6,7,8,9,10]
  let i = 0
  while (numeros1[i] % 2 === 0) {
      console.log (numeros1[i])
      i++;
  }
  
  // actividad 3
  let autos = ['gol', 'clio', 'polo', 'fiesta', 'HB20', 'palio'];

  for (let index = 0; index < autos.length; index++) {
      if (autos[index] === "fiesta") {
          alert("El auto se encuentra en el listado en la posición: " + index);
          break; 
        }
  }
  
// actividad 4
let numeros = [10,6,77,2,5]
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]*numeros[index]);
    
}

// Hecho por Ávila Alvarez Agustín Nehuen