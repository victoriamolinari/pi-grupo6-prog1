let favoritos = document.querySelector('.main-section');

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2UxMGY2NDJmNjQwMjU4Mjg3YzY1OGNhZDE2MjM5MSIsInN1YiI6IjY1NGQ1ZDBiMWFjMjkyN2IyZGQwMjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA4emC1lGmK0hJefY9JVz5VCj3bhzhGm-SxAXFhRr-k'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/null/favorite/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=33e10f642f640258287c658cad162391')
    .then(function(response) {
    return response.json();
    })
    .then(function(data){
        for (let i = 0; i < 5; i++) {
            favoritos.innerHTML += ` <article class="main-article" id="${data.results[i].id}">
                                    <a href="./detalle-pelicula.html?id=${data.results[i].id}">
                                        <img class="poster-article" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                                    </a>
                                    <h3 class="title-article">${data.results[i].title}</h3>

                                    <ul class="ul-article">
                                        <li class="detalles-ul"> ${data.results[i].release_date}</li>
                                    </ul>
                                    <a href="" uk-icon="heart"></a>
                                </article>`
        }

        return data;
    })
   
    .catch(function (error) {
        console.log(error);
        return error;
    });


 

