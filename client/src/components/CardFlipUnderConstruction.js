import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCardUnderConstruction from "./FrontCardUnderConstruction";
import BackCardUnderConstruction from "./BackCardUnderConstruction";

export default function CardPageUnderConstruction() {
  const [isFlipped, setIsFlipped] = useState(false);

  const onHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onMouseEnter={() => onHover(true)}>
        <FrontCardUnderConstruction />
      </div>
      <div onMouseLeave={() => onHover(false)}>
        <BackCardUnderConstruction />
      </div>
    </ReactCardFlip>
  );
}
