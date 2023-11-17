let peliculas = document.querySelector('.main-section');
let serie = document.querySelector('.serie-section');
let title = document.querySelector('.titulo-section');

// Conexión con las APIs?

const options2 = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2UxMGY2NDJmNjQwMjU4Mjg3YzY1OGNhZDE2MjM5MSIsInN1YiI6IjY1NGQ1ZDBiMWFjMjkyN2IyZGQwMjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA4emC1lGmK0hJefY9JVz5VCj3bhzhGm-SxAXFhRr-k'
    }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=33e10f642f640258287c658cad162391')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.results)

        for (let i = 0; i < 5; i++) {
            peliculas.innerHTML += ` <article class="main-article" id="${data.results[i].id}">
                                    <a href="./detalle-pelicula.html?id=${data.results[i].id}">
                                        <img class="poster-article" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                                    </a>
                                    <h3 class="title-article">${data.results[i].title}</h3>

                                    <ul class="ul-article">
                                        <li class="detalles-ul"> ${data.results[i].release_date}</li>
                                    </ul>

                                    <span href="" uk-icon="heart" class="heart"></span>

                                </article>`
        }

        return data;
    })

    .catch(function (error) {
        console.log(error);
        return error;
    });


// serie 
const options3 = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2UxMGY2NDJmNjQwMjU4Mjg3YzY1OGNhZDE2MjM5MSIsInN1YiI6IjY1NGQ1ZDBiMWFjMjkyN2IyZGQwMjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA4emC1lGmK0hJefY9JVz5VCj3bhzhGm-SxAXFhRr-k'
    }
};

fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=33e10f642f640258287c658cad162391')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.results)

        for (let i = 0; i < 5; i++) {
            serie.innerHTML += ` <article class="main-article" id="${data.results[i].id}">
                                    <a href="./detalle-series.html?id=${data.results[i].id}">                                        
                                        <img class="poster-article" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                                    </a>
                                    <h3 class="title-article">${data.results[i].original_name}</h3>

                                    <ul class="ul-article">
                                        <li class="detalles-ul"> ${data.results[i].first_air_date}</li>

                                    </ul>

                                    <span href="" uk-icon="heart" class="heart"></span>


                                </article>`
        }

        return data;
    })

    .catch(function (err) {
        console.log(err);
        return err;
    });

// top 5
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2UxMGY2NDJmNjQwMjU4Mjg3YzY1OGNhZDE2MjM5MSIsInN1YiI6IjY1NGQ1ZDBiMWFjMjkyN2IyZGQwMjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA4emC1lGmK0hJefY9JVz5VCj3bhzhGm-SxAXFhRr-k'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=33e10f642f640258287c658cad162391')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.results)
        
        for (let i = 0; i < 5; i++) {
            title.innerHTML += ` <article class="main-article" id="${data.results[i].id}">
                <a href="./detalle-pelicula.html?id=${data.results[i].id}">                                        
                    <img class="poster-article" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                </a>
                <h3 class="title-article">${data.results[i].title}</h3>

                <ul class="ul-article">
                    <li class="detalles-ul"> ${data.results[i].release_date}</li>
                </ul>

                <span href="" uk-icon="heart" class="heart"></span>

            </article>`
        }

        return data;
    })

    .catch(function (err) {
        console.log(err);
        return err;
    });


    // let heart = document.querySelector(".heart");

    //     heart.addEventListener("click", function (e) {
    //         if (heart.style.backgroundColor == "red") {
    //             heart.backgroundColor = "transparent";
    //         } else {
    //             heart.style.backgroundColor = "red"
    //         }
    //     });