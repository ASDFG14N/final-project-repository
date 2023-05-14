const btn = document.getElementById('btn-dark')
const icon = document.getElementById('moom-sun')
const siteHeader = document.getElementById('site-header')

btn.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    icon.innerHTML = '<i class="fa-solid fa-sun"></i>'
    console.log(siteHeader)
})