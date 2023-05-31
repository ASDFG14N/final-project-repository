//Variables del div de inicio de sesion y signup
const loginForm = document.querySelector('form.login')
const signupForm = document.querySelector('form.signup')
const loginBtn = document.querySelector('label.login')
const signupBtn = document.querySelector('label.signup')
const signupLink = document.querySelector('.signup-link a')
const signupText = document.querySelector('.titulo-texto .signup')
const loginText = document.querySelector('.titulo-texto .login')

//Variables de los botones del header crear e iniciar session
const crearCuentaBtn = document.getElementById('btnSignUp');
const  iniciarSesionBtn = document.getElementById('btnLogin');
const inicioSesionBox = document.querySelector('.oculto');
const fondoOscuro = document.createElement('div');
fondoOscuro.id = 'fondoOscuro';

//Funcionalidad de los botones del inicioSesionBox
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = '-50%'
    loginText.style.marginLeft = '-50%'
})
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = '0%'
    loginText.style.marginLeft = '0%'
})
signupLink.onclick = (() => {
    signupBtn.click()
    return false
})

// Mostrar cuadro de inicio de sesion
crearCuentaBtn.addEventListener('click', () => {
    signupBtn.click()
    inicioSesionBox.classList.remove('oculto');
    document.body.appendChild(fondoOscuro);
});

// Mostrar cuadro de inicio de sesion
iniciarSesionBtn.addEventListener('click', () => {
    loginBtn.click()
    inicioSesionBox.classList.remove('oculto');
    document.body.appendChild(fondoOscuro);
})

// Oculta el cuadro de inicio de sesion
document.addEventListener('click', (event) => {
    if (event.target === fondoOscuro) {
        inicioSesionBox.classList.add('oculto');
        document.body.removeChild(fondoOscuro);
    }
});