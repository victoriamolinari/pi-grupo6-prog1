let qs = location.search; /* llega como string */
let qsObj = new URLSearchParams(qs); /* esto tratará de convertirlo a obj lit */
let id = qsObj.get("id");

// Recupero los elementos del DOM
const img = document.querySelector(".imagen-serie");
const text = document.querySelector(".text");
const info = document.querySelectorAll(".info")
const genero = document.querySelector(".nostyle");

fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=33e10f642f640258287c658cad162391`)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {

        console.log(data)
        img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        text.innerText = data.original_name;
        for (var i = 0; i < data.genres.length; i++) {
            info[0].innerHTML += `<a href="./detalle-generos.html?id=${data.genres[i].id}" class="nostyle">${data.genres[i].name} </a>`
        }

        info[1].innerText = data.overview;

        return data;
    })

    .catch(function (error) {
        console.log(error);
        return error;
    });