import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { format } from "date-fns";

import CardPicture from "../utils/assets/middlearth250x175.jpg";

export default function FrontCard(props) {
  return (
    <div className="front">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={CardPicture} />
        <Card.Body>
          <Card.Title className="title">{props.eventname}</Card.Title>
          <Card.Text>
            Date: {format(new Date(props.eventdate), "dd/MM/yyyy")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Eventlocation: {props.eventlocation}</ListGroupItem>
          <ListGroupItem>Points: {props.armylistpoints}</ListGroupItem>
          <ListGroupItem>Ticketprice: {props.ticketprice}</ListGroupItem>
          <ListGroupItem>Description: {props.description}</ListGroupItem>
          <ListGroupItem>Ticketprice: {props.linktoplayerspack}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}
