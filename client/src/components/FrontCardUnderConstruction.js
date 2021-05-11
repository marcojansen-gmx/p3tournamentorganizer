import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import CardPicture from "../utils/assets/middlearth250x175.jpg";

export default function FrontCardUnderConstruction() {
  return (
    <div className="front">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={CardPicture} />
        <Card.Body>
          <Card.Title className="title">The one Ring</Card.Title>
          <Card.Text>Date: 24/12/2039</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Eventlocation: Northern Board</ListGroupItem>
          <ListGroupItem>Points: 650 Points</ListGroupItem>
          <ListGroupItem>Ticketprice: $30</ListGroupItem>
          <ListGroupItem>Description: Heaps of Fun</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}
