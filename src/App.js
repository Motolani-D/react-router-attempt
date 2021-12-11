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
import { BroswerRouter as Router } from "react-router-dom";
import Trailer from "./component/Trailer";
import NavBar from "./component/NavBar";
import { Route } from "react-router-dom";
import MovieCard from "./component/MovieCard";
import { Switch } from "react-router-dom";

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
          <div>{/* <NavBar /> */}</div>
          <div className="header-items">
            {/* <Button variant="primary" onClick={handleShow} id="add-button">
              <span style={{ fontSize: "25px", color: "green" }}> + </span> Add
              Movie
            </Button> */}
          </div>
          {/* <Switch>
            <Route exact path="/">
              <MovieCard />{" "}
            </Route>
          </Switch> */}
        </div>
        <AddMovieModal show={show} setShow={setShow} addMovie={addMovie} />
        <Trailer />
      </>
    </Router>
  );
}

export default App;
