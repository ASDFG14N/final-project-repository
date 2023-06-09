fetch('../data/info.json')
    .then(response => response.text())
    .then(jsonString => {
        const listItem = JSON.parse(jsonString);
        myFuntion2(listItem);
        new SlideStories("slide");
    })
    .catch(error => {
        console.error('Error al obtener el archivo JSON, pipipip:', error);
    });

class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.active = 0;
        this.init();
    }

    activeSlide(index) {
        this.active = index;
        this.items.forEach((item) => {
            item.classList.remove("active");
        });
        this.items[index].classList.add("active");
        this.thumbItems.forEach((item) => {
            item.classList.remove("active");
        });
        this.thumbItems[index].classList.add("active");
        this.autoSlide();
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const nextBtn = document.querySelector(".slide-next");
        const prevBtn = document.querySelector(".slide-prev");
        nextBtn.addEventListener("click", this.next);
        prevBtn.addEventListener("click", this.prev);
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll(".slide-items > *");
        this.thumb = this.slide.querySelector(".slide-thumb");
        this.addThumbItems();
        this.activeSlide(0);
        this.addNavigation();
    }
}

function myFuntion2(listItem) {
    const slide2 = document.querySelector(".slide-visible .slide .slide-items");
    for (let i = 0; i < listItem.length; i++) {
        slide2.innerHTML += `<img src="${listItem[i].image}" alt="img${i}" style="--bg:${listItem[i].bgColor}">`
    }
}