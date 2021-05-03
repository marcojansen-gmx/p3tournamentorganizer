import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

export default function CardPage(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const onHover = () => {
        setIsFlipped(!isFlipped);
      };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onMouseEnter={() => onHover(true)}>
        <FrontCard {...props.card}/>
      </div>
      <div onMouseLeave={() => onHover(false)}>
        <BackCard {...props.card}/>
      </div>
    </ReactCardFlip>
  );
}
