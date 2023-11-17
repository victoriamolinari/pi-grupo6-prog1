let articleserie= document.querySelector('.article-serie');
let articlemovie= document.querySelector('.article-movie');

fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=33e10f642f640258287c658cad162391')
.then(function(response){
    return response.json();
})
.then(function(data){

        for(let i = 1; i < data.genres.length ; i++) {
        articleserie.innerHTML+= `  <li class="genero"><a class="nostyle" href="./detalle-generos.html"${data.genres[i].id}>${data.genres[i].name}</a></li>`
}
})

.catch(function(error) {
    console.log(error);
    return error;
}); 
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=33e10f642f640258287c658cad162391')
.then(function(response){
    return response.json();
})
.then(function(data){

        for(let i = 1; i < data.genres.length ; i++) {
        articlemovie.innerHTML+= `  <li class="genero"><a class="nostyle" href="./detalle-generos.html"${data.genres[i].id}>${data.genres[i].name}</a></li>`
    
}
})

.catch(function(error) {
    console.log(error);
    return error;
}); 


