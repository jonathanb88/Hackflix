import { useState } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Rating from "react-rating";
// import { Navbar } from "react-bootstrap";
import Navbar1 from "../components/Navbar"




function Home() {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(1);
    const [page, setPage] = useState(1);

  return (
    <>
      <Navbar1/>
      <Header title={title} setTitle={setTitle} setPage={setPage} />
      <div className="text-center mt-3 mb-4">
        {!title && (
          <div className="filter">
            Filter by rating:{" "}
            <Rating
              className="text-primary"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={rating}
              start={0}
              step={2}
              stop={10}
              onChange={(rate) => setRating(rate)}
            />
          </div>
        )}
      </div>
      <MovieList title={title} rating={rating} page={page} setPage={setPage} />
    </>
  );
}

export default Home;
