import "./App.css";
import Rating from "./component/Rating";
import AddMovieModal from "./component/AddMovieModal";
import MovieList from "./component/MovieList";
import Search from "./component/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StarIcon from "./component/StarIcon";
import { Button } from "react-bootstrap";
import { myMovieList } from "./Assets/MyMoviesList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([...myMovieList]);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleSearch = (query) => {};
  const handleRatingFilter = (index) => {};

  return (
    <Router>
      <>
        <div className="App">
          <div className="header-items">
            <Rating />
            <Search />

            <Button variant="primary" onClick={handleShow} id="add-button">
              <span style={{ fontSize: "25px", color: "green" }}> + </span> Add
              Movie
            </Button>
          </div>

          <div className="moviesArea">
            <Switch>
              <Route exact path="/">
                <MovieList movies={movies} moviesArray={searchMovieTitle} />
                <Trailer path="trailer/:id" />
              </Route>
            </Switch>{" "}
            <MovieList movies={movies} moviesArray={searchMovieTitle} />
          </div>
        </div>
        <AddMovieModal show={show} setShow={setShow} addMovie={addMovie} />
      </>
    </Router>
  );
}

export default App;
