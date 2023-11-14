let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get("buscar");

fetch(`https://api.themoviedb.org/3/search/movie?api_key=33e10f642f640258287c658cad162391&query=${busqueda}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let busquedapeliculas = data.results;
        let mainbusqueda = document.querySelector('.main-busqueda');

        let resultados = "";


        if (busquedapeliculas.length === 0) {
            let noexiste = document.querySelector('.title-section');
            noexiste.innerText = `No hay resultados para tu busqueda: ${busqueda}`;

        } else {
            // resultados.innerText = `Resultados para tu busqueda: ${busqueda}`
            for (let i = 0; i < busquedapeliculas.length; i++) {
                if (resultados != null && busquedapeliculas[i].poster_path != null) {
                    resultados += `<article class="main-article">
                <a href="./detalle-peliculas.html">
                <img class="poster-article" src="https://image.tmdb.org/t/p/w500/${busquedapeliculas[i].poster_path}">
                </a>
                <h3 class="title-article">${busquedapeliculas[i].title}</h3>
                <ul class="ul-article">
                    <li class="detalles-ul"> ${data.results[i].release_date}</li>
                </ul>
            </article>`
                }
            }

            mainbusqueda.innerHTML += resultados;

        }
        return data;
    })

    .catch(function (error) {
        console.log(error);
        return error;
    });