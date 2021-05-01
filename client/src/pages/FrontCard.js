import CardPicture from "../utils/assets/middlearth250x175.jpg";

import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';



export default function FrontCard (props) {
    return (
        <div className="front">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={CardPicture} />
          <Card.Body>
            <Card.Title className="title">{props.eventname}</Card.Title>
            <Card.Text>
                {props.eventdate}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{props.eventlocation}</ListGroupItem>
            <ListGroupItem>{props.armylistpoints}</ListGroupItem>
            <ListGroupItem>{props.ticketprice}</ListGroupItem>
          </ListGroup>
        </Card> 
        </div>

    )
};