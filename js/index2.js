const listItem = [
    {
        titulo: "Chika Fujiwara",
        descripcion: 
        "Lorem ipsum dolor sit amet consec neque, quos labore dicta ad facilis distinctio? Quis maxime assumenda necessitatibus accusamus illum nesciunt.",
        image: "../img/waifu1.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    },
    {
        titulo: "Miku Nakano",
        descripcion: "Lorem ipsum dolor sit ameiditate neque, quos laborsumenda necessitatibus accusamus illum nesciunt.",
        image: "../img/waifu2.png",
        bgColor: "#7b5e4d",
        target: "Air",
        housing: 30,
        movement: 20,
        attack: "2s",
        training: "5m",
    },
    {
        titulo: "3",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisuos laboretatibus accusamus illum nesciunt.",
        image: "../img/waifu3.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    },
    {
        titulo: "Chizuru Ichinose",
        descripcion: "Lorem ipsum dolor sit amet exercitationem cuis maxime assumenda necessitatibus accusamus illum nesciunt.",
        image: "../img/waifu4.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 32,
        attack: "0.6s",
        training: "1m",
    },
    {
        titulo: "Chizuru Ichinose",
        descripcion: "Lorem ipsum dolor sit amet exercitationem cuis maxime assumenda necessitatibus accusamus illum nesciunt.",
        image: "../img/waifu4.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 32,
        attack: "0.6s",
        training: "1m",
    }
]

const backgroundWrapper = document.querySelector(".carousel-bg-wrapper");
for (let i = 0; i < listItem.length; i++) {
    backgroundWrapper.innerHTML += `
    <img src="${listItem[i].image}" alt="" class="carousel-bg" />
    `;
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
            <span class="icon">
                <img src="../img/estrellas.png" alt="" />
            </span>
            <span>Preferred Target</span>
            <span>${listItem[i].target}</span>
        </li>
        <li>
            <span class="icon">
                <img src="../img/estrellas.png" alt="" />
            </span>
            <span>Houssing Space</span>
            <span>${listItem[i].housing}</span>
        </li>
        <li>
            <span class="icon">
                <img src="../img/estrellas.png" alt="" />
            </span>
            <span>Movement Speed</span>
            <span>${listItem[i].movement}</span>
        </li>
        <li>
            <span class="icon">
                <img src="../img/estrellas.png" alt="" />
            </span>
            <span>Training Time</span>
            <span>${listItem[i].attack}</span>
        </li>
        <li>
            <span class="icon">
                <img src="../img/estrellas.png" alt="" />
            </span>
            <span>Training Time</span>
            <span>${listItem[i].training}</span>
        </li>
    </ul>
    <button style="--i: 3">Mas Detalles</button>
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

let currentIndex = 0;
const setActive = (index) => {
    currentIndex = index;

    if (currentIndex == 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentIndex == listItem.length - 1) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    backgrounds.forEach((background) => {
        background.classList.remove("active");
    })
    backgrounds[currentIndex].classList.add("active")

    indicatorNumbers.forEach((number) => {
        number.classList.remove("active");
    })
    indicatorNumbers[currentIndex].classList.add("active");

    contents.forEach((content) => {
        content.classList.remove("active");
    })
    contents[currentIndex].classList.add("active");

    items.forEach((item) => {
        item.classList.remove("active");
    })
    items[currentIndex].classList.add("active");
}

setActive(currentIndex);

prev.addEventListener("click", () => {
    currentIndex--;
    slide.style = `--i: ${currentIndex}`;
    setActive(currentIndex);
})

next.addEventListener("click", () => {
    currentIndex++;
    slide.style = `--i: ${currentIndex}`;
    setActive(currentIndex);
})