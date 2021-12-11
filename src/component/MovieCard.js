import React from "react";
import MovieList from "./MovieList";
import Rating from "./Rating";
import Search from "./Search";

function MovieCard() {
  return (
    <div>
      <Rating />
      <Search />
      <div>
        <MovieList movies={movies} moviesArray={searchMovieTitle} />
      </div>
    </div>
  );
}

export default MovieCard;
