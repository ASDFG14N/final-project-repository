fetch('../data/info.json')
    .then(response => response.text())
    .then(jsonString => {
        const listItem = JSON.parse(jsonString);
        myFuntion(listItem);
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON, pipipip:', error);
    });

function myFuntion(listItem) {
    const backgroundWrapper = document.querySelector(".carousel-bg-wrapper");
    for (let i = 0; i < listItem.length; i++) {
        backgroundWrapper.innerHTML += `<img src="${listItem[i].image}" alt="" class="carousel-bg" />`;
    }

    const contentWrapper = document.querySelector(".content-wrapper");
    for (let i = 0; i < listItem.length; i++) {
        contentWrapper.innerHTML += `
            <div class="content">
                <h1 class="name" style="--i: 0">${listItem[i].titulo}</h1>
                <div class="describe" style="--i: 1">
                    <p>${listItem[i].descripcion}</p>
                </div>
                <ul class="properties" style="--i: 2">
                    <li>
                        <span class="icon"><i class="fa-solid fa-cake-candles" style="color: #ffffff;"></i></span>
                        <span>Cumpleaños</span>
                        <span>${listItem[i].target}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <i class="fa-solid fa-user-clock" style="color: #ffffff;"></i>
                        </span>
                        <span>Edad</span>
                        <span>${listItem[i].age}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <i class="fas fa-heart icon" style="color: #ffffff;"></i>
                        </span>
                        <span>Situacion Sentimental</span>
                        <span>${listItem[i].heart}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <i class="fas fa-eye icon" style="color: #ffffff;"></i>
                        </span>
                        <span>Color de ojos</span>
                        <span>${listItem[i].colorEyes}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <i class="fas fa-palette icon" style="color: #ffffff;"></i>
                        </span>
                        <span>Color de pelo</span>
                        <span>${listItem[i].hairColor}</span>
                    </li>
                </ul>
                <a href="#" style="--i: 3">Conoce más</a>
            </div>
            `;
    }

    const slide = document.querySelector(".slide-wrapper .slide");
    for (let i = 0; i < listItem.length; i++) {
        slide.innerHTML += `
    <div class="item-wrapper">
        <div class="item" style="--bg: ${listItem[i].bgColor}">
            <img src="${listItem[i].image}"/>
        </div>
    </div>
`
    }

    const backgrounds = document.querySelectorAll(".carousel-bg");
    const indicatorNumbers = document.querySelectorAll(".carousel-indicators .number");
    const contents = document.querySelectorAll(".content");
    const items = document.querySelectorAll(".slide .item-wrapper");
    const prev = document.querySelector(".carousel-control .prev")
    const next = document.querySelector(".carousel-control .next")

    let indiceActual = 0;
    const setActive = (index) => {
        indiceActual = index;

        if (indiceActual == 0) {
            prev.disabled = true;
        } else {
            prev.disabled = false;
        }

        if (indiceActual == listItem.length - 1) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }

        backgrounds.forEach((background) => {
            background.classList.remove("active");
        })
        backgrounds[indiceActual].classList.add("active")

        indicatorNumbers.forEach((number) => {
            number.classList.remove("active");
        })
        indicatorNumbers[indiceActual].classList.add("active");

        contents.forEach((content) => {
            content.classList.remove("active");
        })
        contents[indiceActual].classList.add("active");

        items.forEach((item) => {
            item.classList.remove("active");
        })
        items[indiceActual].classList.add("active");
    }

    setActive(indiceActual);

    //Funciones que permiten al usuario deslizar manualmente los items
    prev.addEventListener("click", () => {
        indiceActual--;
        slide.style = `--i: ${indiceActual}`;
        setActive(indiceActual);
    })

    next.addEventListener("click", () => {
        indiceActual++;
        slide.style = `--i: ${indiceActual}`;
        setActive(indiceActual);
    })

    //Funcion que desliza el carrusel automaticamente
    function autoSlide() {
        indiceActual++;
        //Reiniciar el indice en caso llegue al final  
        if (indiceActual == listItem.length) {
            indiceActual = 0;
        }
        slide.style = `--i: ${indiceActual}`;
        setActive(indiceActual);
        setTimeout(autoSlide, 4000);
    }
    //Deslizar automaticamente
    setTimeout(autoSlide, 5000);
}