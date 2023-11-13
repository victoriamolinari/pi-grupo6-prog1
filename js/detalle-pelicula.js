// Obtén el ID de la película de la query string en la URL
const urlParams = new URLSearchParams(window.location.search);
const idPelicula = urlParams.get("id_pelicula");

// Comprueba si se ha proporcionado un ID de película válido
if (idPelicula) {
  const apiKey = "33e10f642f640258287c658cad162391"; // Reemplaza con tu clave de API

  // Construye la URL de la solicitud a la API utilizando el ID de la película
  const url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}`;

  // Realiza la solicitud a la API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Procesa los datos y muestra la información en tu página
      const tituloPelicula = data.title;
      const descripcion = data.overview;
      const imagen = data.poster_path;

      // Asigna los datos a elementos HTML para mostrarlos
      document.getElementById("titulo").textContent = tituloPelicula;
      document.getElementById("descripcion").textContent = descripcion;
      document.getElementById("imagen").src = `https://image.tmdb.org/t/p/w500/${imagen}`;
    })
    .catch(error => {
      console.error("Error al obtener los datos de la película:", error);
    });
} else {
  console.error("No se proporcionó un ID de película válido en la query string.");
}


// let qs = location.search;
// let qsObj= new URLSearchParams(qs);

// let id_pelicula = qsObj.get("id_pelicula");


// const tituloDetalle = document.querySelector(".text");


// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2UxMGY2NDJmNjQwMjU4Mjg3YzY1OGNhZDE2MjM5MSIsInN1YiI6IjY1NGQ1ZDBiMWFjMjkyN2IyZGQwMjQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nA4emC1lGmK0hJefY9JVz5VCj3bhzhGm-SxAXFhRr-k'
//     }
//   };


// fetch(`https://api.themoviedb.org/3/movie/now_playing?id=${id_pelicula}&api_key=33e10f642f640258287c658cad162391`)
//     .then(function(response) {
//         return response.json();
//     })
    
//     .then(function(data) {
//     console.log(data);
//     tituloDetalle.innerText = data.results[0].title;
//     return data;
//     })
    
//     .catch(function(error) {
//     console.log(error);
//     });
