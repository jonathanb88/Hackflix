import React from "react";
import "./Movie.css";
import { useParams, Link } from "react-router-dom";
import { Modal, Button, Row } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";
import MovieDetails from "../pages/MovieDetails";

function Movie({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="movie">
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={handleShow}
      />
      <Modal
        show={show}
        onHide={handleClose}
        className="my-modal text-dark"
        centered
        size="sm"
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="text-center">
            <p>{movie.title}</p> <p>{movie.tagline}</p>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <p>
            <strong>Rating: </strong> {movie.vote_average}/10{" "}
          </p>
          <p>
            <strong>Released date:</strong> {movie.release_date}{" "}
          </p>
          <img
            className="img-fluid"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="pt-2"> {movie.overview}</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
  // const params = useParams();

  // return (

  //   <div className="movie">
  //     <Link to={`/peliculas/${movie.id}`}>
  //     <img
  //       className="img-fluid"
  //       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  //       alt={movie.title}
  //     ></img>
  //     </Link>
  //   </div>
  // );
}

export default Movie;
