let qs = location.search; 
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get("buscar")


let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=33e10f642f640258287c658cad162391&query=${busqueda}`

fetch(endpoint)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

    let busquedapeliculas = data.results;
    let mainbusqueda= document.querySelector('.main-busqueda');

    let resultados = "";
  
    for(let i=0; i<busquedapeliculas.length; i++){
        if(resultados != 'null'); //no me funciona y no me quita las peliculas sin foto
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


   mainbusqueda.innerHTML += resultados;
   

    return data;
})

.catch(function (error) {
    console.log(error);
    return error;
});

