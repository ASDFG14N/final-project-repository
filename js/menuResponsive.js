//Variables del menu responsive
const contenedorHamburguesa = document.querySelector('.contenedor-hamburguesa')
const hamburguesa = document.getElementById('barra_menu')

//Animacion del boton hamburguesa
hamburguesa.addEventListener('click', () => {
    line1.classList.toggle('activeline1-barra-menu')
    line2.classList.toggle('activeline2-barra-menu')
    line3.classList.toggle('activeline3-barra-menu')
})

//Animacion del menu responsive
contenedorHamburguesa.addEventListener('click', () => {
    if (navMobile.style.display === "none") {
        navMobile.style.display = "block";
        navMobile1.classList.add('nav-mobile_visible')
    } else {
        navMobile.style.display = "none";
        navMobile1.classList.remove('nav-mobile_visible')
    }
})

//Menu acordion responsive
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}