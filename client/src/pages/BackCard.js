import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import { format } from 'date-fns'
import CardPicture from "../utils/assets/middlearth250x175.jpg";
import "../css/BackCard.css";
import TransitionsModal from "./TransitionsModal";

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div className="back">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CardPicture} />
          <Card.Body>
            <Card.Title className="title">{props.eventname}</Card.Title>
            <Card.Text>
                {format(new Date(props.eventdate), 'dd/MM/yyyy')}</Card.Text>
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
            <ListGroupItem>
            <Button className="modalAttentdanceButton attentdanceButton" onClick={handleOpen}>
              Check Event Attendance
            </Button>
            </ListGroupItem>
          </ListGroup>
          <TransitionsModal open={open} handleClose={handleClose}/>
        </Card> 
        </div>

    )
};
