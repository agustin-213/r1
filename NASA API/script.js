// Referencias al DOM
let titulo = document.querySelector('#titulo')
let fecha = document.querySelector('#fecha')
let imagen = document.querySelector('#imagen')
let boton = document.querySelector('#boton')

// Array para guardar fechas ya mostradas
let fechasMostradas = []

// Función para generar una fecha aleatoria entre 1995-06-16 y hoy
function fechaAleatoria() {
    const inicio = new Date(1995, 5, 16).getTime() // APOD empezó el 16 junio 1995
    const hoy = new Date().getTime()
    let aleatoria, yyyy, mm, dd, fechaStr

    do {
        aleatoria = new Date(inicio + Math.random() * (hoy - inicio))
        yyyy = aleatoria.getFullYear()
        mm = String(aleatoria.getMonth() + 1).padStart(2, '0')
        dd = String(aleatoria.getDate()).padStart(2, '0')
        fechaStr = `${yyyy}-${mm}-${dd}`
    } while (fechasMostradas.includes(fechaStr)) // Evita repetir fechas

    return fechaStr
}

// Función para obtener una imagen válida
function obtenerImagen() {
    const fechaRandom = fechaAleatoria()

    fetch(`https://api.nasa.gov/planetary/apod?api_key=ZsMXsJQczfnsYNTfVeHnUedrKpwJw829HKQyb8Mb&date=${fechaRandom}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)

            if (datos.media_type === "image") {
                // Guardamos la fecha para no repetirla
                fechasMostradas.push(datos.date)

                // Mostramos la imagen y la fecha original de la foto
                titulo.textContent = datos.title
                fecha.textContent = datos.date
                imagen.src = datos.url
                imagen.style.display = "block"
            } else {
                // Si es video, intentamos otra fecha hasta encontrar imagen
                obtenerImagen()
            }
        })
        .catch(error => console.error('Error al obtener datos de la NASA:', error))
}

// Evento click del botón
boton.onclick = function() {
    obtenerImagen()
}
