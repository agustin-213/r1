// 1) Guardamos referencias a elementos del DOM por su id
let titulo = document.querySelector('#titulo')
let fecha = document.querySelector('#fecha')
let imagen = document.querySelector('#imagen')
let boton = document.querySelector('#boton')

// 2) Cuando el usuario hace clic en el botón, se ejecuta esta función
boton.onclick = function () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ZsMXsJQczfnsYNTfVeHnUedrKpwJw829HKQyb8Mb')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos) // ver qué devuelve la API

            // 3) Actualizamos el DOM con los datos correctos
            titulo.textContent = datos.title
            fecha.textContent = datos.date
            imagen.src = datos.url
        })
        .catch(error => console.error('Error al obtener datos de la NASA:', error))
}
