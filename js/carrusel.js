const contenedoresCarrusel = document.querySelectorAll('.contenedor-carrusel');

contenedoresCarrusel.forEach((contenedor) => {
    const listaCarrusel = contenedor.querySelector('.carrusel-lista');
    const direccionales = contenedor.querySelectorAll('i');
    const primerAnime = listaCarrusel.querySelector('img');

    let isArrastrarInicio = false;
    let prevPageX;
    let prevScrollIzq;
    const primerAnimeAncho = (primerAnime.clientWidth + 33) * 2;

    // Funciones para los botones izquierda y derecha
    direccionales.forEach((direccional) => {
        direccional.addEventListener('click', () => {
            if (direccional.id == 'izq') {
                listaCarrusel.scrollLeft -= primerAnimeAncho;
            } else {
                listaCarrusel.scrollLeft += primerAnimeAncho;
            }
        });
    });

    // Funciones para deslizar el mouse
    const arrastrarInicio = (evt) => {
        isArrastrarInicio = true;
        prevPageX = evt.pageX;
        prevScrollIzq = listaCarrusel.scrollLeft;
    };

    const arrastrar = (evt) => {
        if (!isArrastrarInicio) return;
        evt.preventDefault();
        const posicionDif = evt.pageX - prevPageX;
        listaCarrusel.scrollLeft = prevScrollIzq - posicionDif;
    };

    const arrastrarDetener = () => {
        isArrastrarInicio = false;
    };

    listaCarrusel.addEventListener('mousedown', arrastrarInicio);
    // listaCarrusel.addEventListener('mousemove', arrastrar);
    listaCarrusel.addEventListener('mouseup', arrastrarDetener);
});
