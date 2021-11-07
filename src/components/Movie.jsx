import React from "react";
import "./Movie.css";
import {
  useParams,
  Link,
} from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import MovieDetails from "../pages/MovieDetails";

function Movie({ movie }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // return (
  //   <div className="movie">
  //     <img
  //       className="img-fluid"
  //       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //       alt={movie.title}
  //       onClick={handleShow}
  //     />
  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>{movie.title}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //       <p>Released date: {movie.release_date} </p>
       
  //       <img
  //       className="img-fluid"
  //       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //       alt={movie.title}
  //     />
  //           {movie.overview}
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </div>
  // );
  const params = useParams()

  return (

    <div className="movie">
      <Link to={`/peliculas/${movie.id}`}>
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      ></img>
      </Link>
    </div>
  );
  
}

export default Movie;

