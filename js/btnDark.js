const toggle = document.getElementById('toggle')
const icon = document.getElementById('icon')

toggle.addEventListener('change', (evt) =>{
    const check = evt.target.checked
    console.log(check)
    document.body.classList.toggle('dark')
    if (check === true) {
        icon.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }else{
        icon.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})