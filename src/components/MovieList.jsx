import axios from "axios";
import { useEffect, useState } from "react";
// import movies from "../data/movies.json"; //eso ya lo convierte a un objeto JS
import Movie from "./Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "react-bootstrap";

//recorre todas las peliculas y para cada pelicula me da la informacion
//el filter() filtra con includes() la palabras que contengan x letras y lowercase() pasa todo a minuscula
//despues hay un operador ternario para el mensaje de error (los parentesis los pone automaticamente prettier)
function MovieList({ title, rating, page, setPage }) {
  //   const filteredMovies = movies.filter(
  //     (movie) =>
  //       movie.title.toLowerCase().includes(title.toLowerCase()) &&
  //       movie.vote_average >= rating
  //   );
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    //llamada a la API de peliculas (se pone en useEffect porque quiero que se haga cuando cargue la pagina)
    // la funcion fetchData se creo porq React me obliga a crear una funcion apart para poner el "async"
    // const url es para definir a que direccion se llama cuando carga la pagina, y si hay texto en la busqueda (cambia title), ahi llamaria a otra direcion
    // usar search para buscar por nombre y discover para mostrar todo
    const url = title
      ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&sort_by=popularity.desc&query=${title}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&sort_by=popularity.desc&vote_average.gte=${rating}&page=${page}`;
    const fetchData = async () => {
      const { data } = await axios({
        method: "GET",
        url: url,
      });
      if (page > 1) {
        setFilteredMovies([...filteredMovies, ...data.results]);
      } else {
        setFilteredMovies(data.results);
      }
    };
    fetchData();
    console.log(page);
    // eslint-disable-next-line
  }, [title, rating, page]);
  //al agregar title al final, el useEffect se va a recargar cada vez que cambie esa variable title

  return (
    // el InfiniteScroll corresponde al componente instalado para scroll infinito
    <Container>
      <InfiniteScroll
        dataLength={filteredMovies.length} //This is important field to render the next data
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
      >
        <div className="container mt-3 ">
          <div className="row g-4">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div className="col-md-2">
                  <Movie movie={movie} key={movie.id} />
                </div>
              ))
            ) : (
              <p className="text-center">😢 Lo sentimos, no hay peliculas</p>
            )}
          </div>
          <div></div>
        </div>
      </InfiniteScroll>
    </Container>
  );
}

export default MovieList;
