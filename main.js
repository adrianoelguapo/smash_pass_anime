let charactersData = [
    {
        id: "1",
        name: "Kamado Tanjiro",
        image: "../images/tanjiro.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "2",
        name: "Agatusma Zenitsu",
        image: "../images/zenitsu.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "3",
        name: "Uzumaki Naruto",
        image: "../images/naruto.webp",
        anime: "Naruto"
    },
    {
        id: "4",
        name: "Monkey D. Luffy",
        image: "../images/luffy.webp",
        anime: "One Piece"
    },
    {
        id: "5",
        name: "Light Yagami",
        image: "../images/lightyagami.webp",
        anime: "Death Note"
    },
    {
        id: "6",
        name: "Edward Elric",
        image: "../images/edwardelric.webp",
        anime: "Fullmetal Alchemist"
    },
    {
        id: "7",
        name: "Saitama",
        image: "../images/saitama.webp",
        anime: "One Punch Man"
    },
    {
        id: "8",
        name: "Levi Ackerman",
        image: "../images/levi.webp",
        anime: "Attack on Titan"
    },
    {
        id: "9",
        name: "Ichigo Kurosaki",
        image: "../images/ichigo.webp",
        anime: "Bleach"
    },
    {
        id: "10",
        name: "Natsu Dragneel",
        image: "../images/natsu.webp",
        anime: "Fairy Tail"
    },
    {
        id: "11",
        name: "Tomioka Giyu",
        image: "../images/giyu.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "12",
        name: "Tokito Muichiro",
        image: "../images/tokito.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "13",
        name: "Uzui Tengen",
        image: "../images/uzui.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "14",
        name: "Kocho Shinobu",
        image: "../images/shinobu.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "15",
        name: "Iguro Obanai",
        image: "../images/obanai.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "16",
        name: "Himejima Gyomei",
        image: "../images/gyomei.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "17",
        name: "Shinazugawa Sanemi",
        image: "../images/sanemi.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "18",
        name: "Kanroji Mitsuri",
        image: "../images/kanroji.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "19",
        name: "Tsuyuri Kanao",
        image: "../images/kanao.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "20",
        name: "Kanzaki Aoi",
        image: "../images/aoi.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "21",
        name: "Kibutsuji Muzan",
        image: "../images/muzan.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "22",
        name: "Kamado Nezuko",
        image: "../images/nezuko.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "23",
        name: "Lady Tamayo",
        image: "../images/tamayo.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "24",
        name: "Daki",
        image: "../images/daki.webp",
        anime: "Kimetsu no Yaiba"
    },
    {
        id: "25",
        name: "Eren Jaeger",
        image: "../images/eren.webp",
        anime: "Attack on Titan"
    },
    {
        id: "26",
        name: "Mikasa Ackerman",
        image: "../images/mikasa.webp",
        anime: "Attack on Titan"
    },
    {
        id: "27",
        name: "Erwin Smith",
        image: "../images/erwin.webp",
        anime: "Attack on Titan"
    },
    {
        id: "28",
        name: "Hange Zoë",
        image: "../images/hange.webp",
        anime: "Attack on Titan"
    },
    {
        id: "29",
        name: "Reiner Braun",
        image: "../images/reiner.webp",
        anime: "Attack on Titan"
    },
    {
        id: "30",
        name: "Bertholdt Hoover",
        image: "../images/bertholdt.webp",
        anime: "Attack on Titan"
    },
    {
        id: "31",
        name: "Annie Leonhart",
        image: "../images/annie.webp",
        anime: "Attack on Titan"
    },
    {
        id: "32",
        name: "Jean Kirstein",
        image: "../images/kirstein.webp",
        anime: "Attack on Titan"
    },
    {
        id: "33",
        name: "Connie Springer",
        image: "../images/connie.webp",
        anime: "Attack on Titan"
    },
    {
        id: "34",
        name: "Sasha Blouse",
        image: "../images/blouse.webp",
        anime: "Attack on Titan"
    },
    {
        id: "35",
        name: "Historia Reiss",
        image: "../images/historia.webp",
        anime: "Attack on Titan"
    },
    {
        id: "36",
        name: "Zeke Jager",
        image: "../images/zeke.webp",
        anime: "Attack on Titan"
    },
]

$(function () {
    function seleccionar() {
        if (charactersData.length === 0) {
            $(".contenedor").empty();

            $(".contenedor").append(`
                <div class="tarjeta">
                    <p class="nombrepersonaje"> Ya no quedan mas personajes </p>
                </div>
            `)
            seleccionar();
        }

        let numpersonajes = charactersData.length;
        let posicionrandom = Math.floor(Math.random() * numpersonajes);

        $(".contenedor").empty();

        $(".contenedor").append(`
            <div class="tarjeta" id="${charactersData[posicionrandom].id}">
                <img class="fotopersonaje" width="600px" height="350px" src="${charactersData[posicionrandom].image}">
                <p class="nombrepersonaje">${charactersData[posicionrandom].name}</p>
                <p class="animepersonaje">${charactersData[posicionrandom].anime}</p>
                <div class="botonestarjeta">
                    <input class="botonsmash" type="button" value="SMASH">
                    <input class="botonpass" type="button" value="PASS">
                </div>
            </div>
        `);
    }

    function manejarBotones(event) {
        let idPersonajeBorrar = $(event.target).closest(".tarjeta").attr("id");
        charactersData = charactersData.filter(character => character.id !== idPersonajeBorrar);
        seleccionar();
    }

    // Usar delegación de eventos
    $(".contenedor").on("click", ".botonsmash, .botonpass", manejarBotones);

    seleccionar();
});
