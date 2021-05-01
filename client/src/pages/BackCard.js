import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import CardPicture from "../utils/assets/middlearth250x175.jpg";
import "../css/BackCard.css";

const handleGoing = () => {
console.log("Going")
}

const handleMaybe = () => {
    console.log("Maybe")
}

const handleNotGoing = () => {
    console.log("Not Going")
}

export default function BackCard (props) {
    return (
        <div className="back">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CardPicture} />
          <Card.Body>
            <Card.Title className="title">{props.eventname}</Card.Title>
            <Card.Text>
                {props.eventdate}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
            <Button className="goingButton attentdanceButton" variant="primary" type="submit" onClick={handleGoing}>
              Going
            </Button>
            </ListGroupItem>
            <ListGroupItem>
            <Button className="maybeButton attentdanceButton" variant="primary" type="submit" onClick={handleMaybe}>
              Maybe
            </Button>
            </ListGroupItem>
            <ListGroupItem>
            <Button className="notGoingButton attentdanceButton" variant="primary" type="submit" onClick={handleNotGoing}>
              Can't go
            </Button>
            </ListGroupItem>
          </ListGroup>
        </Card> 
        </div>

    )
};
