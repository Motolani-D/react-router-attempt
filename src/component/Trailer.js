import React from "react";
import usePlaceholder from "react-bootstrap/esm/usePlaceholder";
import { useParams } from "react-router-dom";
import Video from "../Assets/Video.mp4";

const Trailer = () => {
  const { id } = useParams();
  return (
    <div>
      <p>
        Die Hard follows New York City police detective John McClane (Willis)
        who is caught up in a terrorist takeover of a Los Angeles skyscraper
        while visiting his estranged wife. ... Known mainly for work on
        television, Willis was paid $5 million for his involvement, placing him
        among Hollywood's highest-paid actors.-{id}
      </p>
      <div>
        <video controls autostart autoPlay src={Video} type="video/mp4" />
      </div>
    </div>
  );
};

export default Trailer;
