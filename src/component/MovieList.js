import React from "react";
import { Card } from "react-bootstrap";
//import { propTypes } from "react-bootstrap/esm/Image";
import Rating from "./Rating";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index, rating, year) => (
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={movie.PosterURL} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              <p>{movie.Year}</p>
            </Card.Text>
            <div>{movie.rating}</div>
            <Rating movieRating={movie.Rating} />
          </Card.Body>

          {/* <img src={movie.PosterURL} alt="movie"></img>
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
          <p>{movie.Rating}</p>
        </div> */}
        </Card>
      ))}
    </>
  );
};
export default MovieList;

// {
//   /* <Card style={{ width: "18rem" }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>; */
// }
