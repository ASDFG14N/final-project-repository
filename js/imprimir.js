const carruselContenedores = document.querySelectorAll(".contendor-carrusel-sup");
let portadaIndex = 0;
console.log(carruselContenedores);

const portadas = [
    "../img/Akiba Maid Sensou.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/animes-bofuri.jpg",
    "../img/animes-dagashi.jpg",
    "../img/animes-demon slayer.jpg",
    "../img/animes-grace.jpg",
    "../img/animes-haruhi.jpg",
    "../img/animes-naruto.jpg",
    "../img/animes-sakura.jpg",
    "../img/animes-servant.jpg",
    "../img/animes-three.jpg",
    "../img/animes-tokyo.jpg",
    "../img/animes-yourlie.jpg",
    "../img/Ayakashi Triangle.jpg",
    "../img/Beast Tamer.jpg",
    "../img/Boku no Kokoro no Yabai Yatsu.jpg",
    "../img/Fumetsu no Anata e 2nd Season.jpg",
    "../img/Ijiranaide, Nagatoro-san 2nd Attack.jpg",
    "../img/Inu ni Nattara Suki na Hito ni Hirowareta..jpg",
    "../img/Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken.jpg",
    "../img/Isekai wa Smartphone to Tomo ni. 2.jpg",
    "../img/Jijou wo Shiranai Tenkousei ga Guigui Kuru..jpg",
    "../img/kanojo mo kanojo.jpg",
    "../img/Kizuna no Allele.jpg",
    "../img/Megami no Café Terrace.jpg",
    "../img/Mou Ippon!.jpg",
    "../img/Mushikaburi-hime.jpg",
    "../img/Nijiyon Animation.jpg",
    "../img/Oniichan wa Oshimai!.jpg",
    "../img/Otonari ni Ginga.jpg",
    "../img/Shinmai Renkinjutsushi no Tenpo Keiei.jpg",
    "../img/Shinobi no Ittoki.jpg",
    "../img/Shumatsu no harem britania lumiere.jpg",
    "../img/World Dai Star.jpg",
    "../img/Tensei shitara Ken Deshita.jpg",
    "../img/Saikin Yatotta Maid ga Ayashii.jpg",
    "../img/Kakegurui Twin.jpg",
    "../img/Isekai Yakkyoku.jpg",
    "../img/Soredemo Ayumu wa Yosetekuru.jpg",
    "../img/Mamahaha no Tsurego ga Motokano datta.jpg",
    "../img/Kumichou Musume to Sewagakari.jpg",
    "../img/Warau Arsnotoria Sun!.jpg",
    "../img/Made in Abyss Retsujitsu no Ougonkyou.jpg",
    "../img/Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV) 2nd Season.jpg",
    "../img/Engage Kiss.jpg",
    "../img/Kanojo, Okarishimasu 2nd Season.jpg",
    "../img/Kakkou no Iinazuke.jpg",
    "../img/Kaginado Season 2.jpg",
    "../img/Kenja no Deshi wo Nanoru Kenja.jpg",
    "../img/Gunjou no Fanfare.jpg",
    "../img/Shokei Shoujo no Virgin Road.jpg",
    "../img/Otome Game Sekai wa Mob ni Kibishii Sekai desu.jpg",
    "../img/Healer Girl.jpg",
    "../img/Kaijin Kaihatsu-bu no Kuroitsu-san.jpg",
    "../img/Karakai Jouzu no Takagi-san 3.jpg",
    "../img/Sono Bisque Doll wa Koi wo Suru.jpg",
    "../img/Shinka no Mi Shiranai Uchi ni Kachigumi Jinsei.jpg",
    "../img/Hanyou no Yashahime Sengoku Otogizoushi - Ni no Shou.jpg",
    "../img/Shinigami Bocchan to Kuro Maid.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
    "../img/5-toubun no Hanayome Movie.jpg",
]


const imprimirCarrusel = () => {
    for (let i = 0; i < carruselContenedores.length; i++) {
        carruselContenedores[i].innerHTML += `
        <div class="contenedor-carrusel">
        <i class="fa-solid fa-angle-left" id="izq"></i>
        <div class="carrusel-lista" id="carrusel-lista"> <!--carrusel contenido-->
            <a href="../html/viewAnime.html">
                <img src="${portadas[portadaIndex]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 1]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 2]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 3]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 4]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 5]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 6]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 7]}" alt="bofuri">
            </a>


            <a href="#">
                <img src="${portadas[portadaIndex + 8]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 9]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 10]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 11]}" alt="bofuri">
            </a>

            <a href="#">
                <img src="${portadas[portadaIndex + 12]}" alt="bofuri">
            </a>

        </div> <!--fin de carrusel contenido-->
        <i class="fa-solid fa-angle-right"></i>

    </div> <!--fin de la clase: carrusel-lista-->
        `;
        portadaIndex += 13;
    }
};
imprimirCarrusel()