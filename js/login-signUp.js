// Obtener elementos del DOM
const crearCuentaBtn = document.getElementById('btnSignUp');
console.log(crearCuentaBtn);
const inicioSesionBox = document.querySelector('.oculto');
console.log(inicioSesionBox);
const fondoOscuro = document.createElement('div');
fondoOscuro.id = 'fondoOscuro';

// Mostrar cuadro de inicio de sesión al hacer clic en "Crear cuenta"
crearCuentaBtn.addEventListener('click', () => {
    inicioSesionBox.classList.remove('oculto');
    document.body.appendChild(fondoOscuro);
});

// Ocultar cuadro de inicio de sesión al hacer clic fuera de él o en el fondo oscuro
document.addEventListener('click', (event) => {
    if (event.target === fondoOscuro) {
        inicioSesionBox.classList.add('oculto');
        document.body.removeChild(fondoOscuro);
    }
});