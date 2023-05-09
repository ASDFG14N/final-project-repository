const busqueda = document.querySelector(".busqueda")
const lupa = document.querySelector(".lupa")

lupa.onclick = function(){
    busqueda.classList.toggle("activar")
}