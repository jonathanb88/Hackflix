import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/MovieDetails.css";
import {Row, Col} from "react-bootstrap"

function MovieDetails({ movie, title }) {
  const params = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}`;
    const fetchData = async () => {
      const { data } = await axios({
        method: "GET",
        url: url,
      });
      setMovieInfo(data);
    };
    fetchData();
  }, []);

  return (
    // el operador ternario con movieInfo es para que si da truthy muestre la info, o sino el mensaje cargando
    <>
      {movieInfo ? (
        <div className="container movieDetail d-flex justify-content-center p-4 ">
          <Row>
            <Col>
              <img
                className="d-block pt-2"
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={movieInfo.original_title}
              />
            </Col>
            <Col>
              <h2>Title: {movieInfo.original_title}</h2>
              <h5>Tagline: {movieInfo.tagline}</h5>
              <p className="pt-3">
                {" "}
                <strong>Overview:</strong> {movieInfo.overview}
              </p>
              <p>
                <strong>Rating: </strong> {movieInfo.vote_average}/10{" "}
              </p>
              <p>
                <strong>Runtime: </strong> {movieInfo.runtime} minutes{" "}
              </p>
              <Link to="/">
                <p className="pt-2">Volver</p>
              </Link>
            </Col>
          </Row>
        </div>
      ) : (
        "Cargando..."
      )}
    </>
  );
}

export default MovieDetails;
