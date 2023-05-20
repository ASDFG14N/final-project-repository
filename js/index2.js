const listItem = [
    {
        titulo: "Waifu 1",
        descripcion: "sslmslcmslclscs",
        image: "../img/waifu1.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    },
    {
        titulo: "Waifu 1",
        descripcion: "sslmslcmslclscs",
        image: "../img/waifu2.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    },
    {
        titulo: "Waifu 1",
        descripcion: "sslmslcmslclscs",
        image: "../img/waifu3.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    },
    {
        titulo: "Waifu 1",
        descripcion: "sslmslcmslclscs",
        image: "../img/waifu4.png",
        bgColor: "#6ce3f2",
        target: "Any",
        housing: 30,
        movement: 13,
        attack: "3.5s",
        training: "6m",
    }
]

const backgroundWrapper = document.querySelector(".carousel-bg-wrapper");
for (let i = 0; i < listItem.length; i++) {
    backgroundWrapper.innerHTML += `
    <img src="${listItem[i].image}" alt="" class="carousel-bg" />
    `
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
                    <img src="../icon/target.png" alt=""/>
                </span>
                <span>Preferred Target</span>
                <span>${listItem[i].target}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="../icon/target.png" alt=""/>
                </span>
                <span>Preferred Target</span>
                <span>${listItem[i].housing}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="../icon/target.png" alt=""/>
                </span>
                <span>Preferred Target</span>
                <span>${listItem[i].movement}</span>
            </li>
            <li>
                <span class="icon">
                    <img src="../icon/target.png" alt=""/>
                </span>
                <span>Preferred Target</span>
                <span>${listItem[i].attack}</span>
            </li>
        </ul>
        <button style="--i: 3">More Details</button>
    </div>
    `;
}