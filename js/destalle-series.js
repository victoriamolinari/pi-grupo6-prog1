let qs = location.search; /* llega como string */
let qsObj = new URLSearchParams(qs); /* esto tratará de convertirlo a obj lit */
let id = qsObj.get("id");

// Recupero los elementos del DOM
const img = document.querySelector(".imagen-pelicula");
const titulo = document.querySelector(".titulo");
const genero = document.querySelector(".genero");
const rating = document.querySelector(".rating");
const estreno = document.querySelector(".estreno");
const duracion = document.querySelector(".duracion");
const sinopsis = document.querySelector(".sinopsis");

const botonVerRecomendaciones = document.querySelector('#verRecomendaciones');
const recomendacionesDisplay = document.querySelector('#recomendacionesDisplay');
const recomendacionesList = document.querySelector('#recomendacionesList');
const comentariosList = document.querySelector('#comentarioList');
const comentariosDisplay = document.querySelector('#comentarioDisplay');



fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=33e10f642f640258287c658cad162391`)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {

        console.log(data);

        img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText = data.name;


        for (var i = 0; i < data.genres.length; i++) {
            genero.innerText += " " + data.genres[i].name + " "
        }

        rating.innerText = "Rating: " + data.vote_average;
        estreno.innerText = "Estreno: " + data.first_air_date;
        sinopsis.innerText = "Sinopsis: " + data.overview;

        return data;
    })

    .catch(function (error) {
        console.log(error);
        return error;
    });