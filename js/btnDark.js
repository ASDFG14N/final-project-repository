function setupToggle(toggle, icon) {
    toggle.addEventListener('change', (evt) => {
        const check = evt.target.checked;
        console.log(check);
        document.body.classList.toggle('dark');
        icon.innerHTML = `<i class="fa-solid fa-${check ? 'moon' : 'sun'}"></i>`;
    });
}

const toggle = document.getElementById('toggle');
const icon = document.querySelector('.icon');
setupToggle(toggle, icon);

const toggle2 = document.getElementById('toggle2');
const icon2 = document.querySelector('.icon2');
setupToggle(toggle2, icon2);
