// 1. Creación de un arreglo
let colores = ["Rojo", "Verde", "Azul", "Amarillo", "Violeta"];
console.log("1. Arreglo original:", colores);

// 2. Acceso a elementos
console.log("2. Primer color:", colores[0]);
console.log("   Último color:", colores[colores.length - 1]);

// 3. Tamaño del arreglo
console.log("3. Cantidad de elementos:", colores.length);

// 4. Agregar al final
colores.push("Naranja");
console.log("4. Después de agregar un color al final:", colores);

// 5. Agregar al inicio
colores.unshift("Rosa");
console.log("5. Después de agregar un color al principio:", colores);

// 6. Eliminar del final
colores.pop();
console.log("6. Después de eliminar el último color:", colores);

// 7. Eliminar del principio
colores.shift();
console.log("7. Después de eliminar el primer color:", colores);

// 8. Reemplazo de un valor
colores[1] = "Turquesa";
console.log("8. Después de cambiar el segundo color:", colores);

// 9. Recorrido del arreglo
console.log("9. Colores uno por uno:");
for (let i = 0; i < colores.length; i++) {
  console.log("   Color " + (i + 1) + ":", colores[i]);
}

// 10. Desafío creativo: ingreso de colores por el usuario
let nuevosColores = [];
for (let i = 0; i < 3; i++) {
  let colorIngresado = prompt(`10. Ingresá el color ${i + 1}:`);
  nuevosColores.push(colorIngresado);
}
console.log("10. Nuevos colores ingresados por el usuario:", nuevosColores);
