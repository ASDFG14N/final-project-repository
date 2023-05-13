//Variables
const carrito = document.querySelector('#carrito2')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaMangas = document.querySelector('#lista-mangas')
let articulosCarrito = []

cargarEventListeners()

function cargarEventListeners() {
    listaMangas.addEventListener('click', agregarCurso)

    carrito.addEventListener('click', eliminarCurso)

    vaciarCarritoBtn.addEventListener('click', () => {
        console.log('vaciarCarrito')
        articulosCarrito = []
        limpiarHTML() //eliminar todo el html
    })
}

function agregarCurso(evt) {
    evt.preventDefault()
    //si el elemeento que estamos presionando contiene lo que se pasa como parametro a contains
    if (evt.target.classList.contains('agregar-carrito')) {
        console.log("prueba")
        const mangaSeleccionado = evt.target.parentElement.parentElement
        //hacemos traversin
        console.log(evt.target.parentElement.parentElement)

        leerDatosCurso(mangaSeleccionado)
    }
}

//eliminar un curso del carrito
function eliminarCurso(evt) {
    console.log(evt.target.classList)
    if (evt.target.classList.contains('borrar-manga')) {
        console.log(evt.target.getAttribute('data-id'))
        const cursoId = evt.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        console.log(articulosCarrito)
        carritoHTML()
    }
}

//lee el contenido del html y extrae la informacion del curso
function leerDatosCurso(mangaSeleccionado) {

    //Crear un objeto con el contenido del curso actual
    const infoManga = {
        imagen: mangaSeleccionado.querySelector('img').src,
        titulo: mangaSeleccionado.querySelector('h3').textContent,
        precio: mangaSeleccionado.querySelector('.precio').textContent,
        id: mangaSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoManga)

    //REVISAR SI UN ELEMENTO YA EXISTE EN EL CARRITO
    const existe = articulosCarrito.some(curso => curso.id === infoManga.id)
    console.log(existe)
    if (existe) {
        //actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoManga.id) {
                curso.cantidad++
                return curso //retorna el objeto actualizado
            } else {
                return curso //retorna los objetos que no sosn los duplicados
            }
        })

        articulosCarrito = [...cursos]
    } else {
        //agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoManga]
    }

    console.log(articulosCarrito)

    carritoHTML()
}

//muestra el carrito de compras en el html
function carritoHTML() {
    //limpiar el html
    limpiarHTML()

    //recorrer el carrito y genera el html
    articulosCarrito.forEach((curso) => {
        console.log(curso)
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>

            <td>
                <a href="#" class= "borrar-manga" data-id="${curso.id}"> X </a>
            </td>
        `
        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row)

    })
}

function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = ""
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}