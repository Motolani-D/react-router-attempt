import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function Search() {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon2" width="50%" />
        <Button variant="outline-secondary" id="button-addon2">
          Search Movie
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;
