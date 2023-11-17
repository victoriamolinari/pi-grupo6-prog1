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


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=33e10f642f640258287c658cad162391`)

    .then(function (res) {
        return res.json();
    })

    .then(function (data) {


        img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText = data.title;


        for (var i = 0; i < data.genres.length; i++) {
            genero.innerText += " " + data.genres[i].name + " "
        }

        rating.innerText = "Rating: " + data.vote_average;
        estreno.innerText = "Estreno: " + data.release_date;
        duracion.innerText = "Duracion: " + data.runtime + " min";
        sinopsis.innerText = "Sinopsis: " + data.overview;

        return data;
    })

    .catch(function (error) {
        console.log(error);
        return error;
    });