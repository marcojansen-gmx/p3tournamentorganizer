import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import CardPicture from "../utils/assets/middlearth250x175.jpg";
import "../css/BackCard.css";
import TransitionsModalUnderContruction from "./TransitionsModalUnderContruction";

export default function BackCardUnderConstruction(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="back">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={CardPicture} />
        <Card.Body>
          <Card.Title className="title">The one Ring</Card.Title>
          <Card.Text>24/12/2039</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Button
              variant="primary"
              className="modalAttentdanceButton attentdanceButton"
              onClick={handleOpen}
            >
              Manage your event
            </Button>
          </ListGroupItem>
        </ListGroup>
        <TransitionsModalUnderContruction
          eventId={props.id}
          open={open}
          handleClose={handleClose}
        />
      </Card>
    </div>
  );
}
