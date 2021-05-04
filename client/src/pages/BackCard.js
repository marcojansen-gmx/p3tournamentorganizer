import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { format } from "date-fns";
import CardPicture from "../utils/assets/middlearth250x175.jpg";
import "../css/BackCard.css";
import TransitionsModal from "./TransitionsModal";

export default function BackCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoing = () => {
    fetch("/api/user_data")
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        return fetch("/api/attendancegoing", {
          method: "POST",
          body: JSON.stringify({
            userId: user.id,
            cardId: props.id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      });
  };

  const handleMaybe = () => {
    fetch("/api/user_data")
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        return fetch("/api/attendancemaybe", {
          method: "POST",
          body: JSON.stringify({
            userId: user.id,
            cardId: props.id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      });
  };

  const handleNotGoing = () => {
    fetch("/api/user_data")
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        return fetch("/api/attendancenotgoing", {
          method: "POST",
          body: JSON.stringify({
            userId: user.id,
            cardId: props.id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      });
  };

  return (
    <div className="back">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={CardPicture} />
        <Card.Body>
          <Card.Title className="title">{props.eventname}</Card.Title>
          <Card.Text>
            {format(new Date(props.eventdate), "dd/MM/yyyy")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Button
              className="goingButton attentdanceButton"
              variant="primary"
              type="submit"
              onClick={handleGoing}
            >
              Going
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button
              className="maybeButton attentdanceButton"
              variant="primary"
              type="submit"
              onClick={handleMaybe}
            >
              Maybe
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button
              className="notGoingButton attentdanceButton"
              variant="primary"
              type="submit"
              onClick={handleNotGoing}
            >
              Can't go
            </Button>
          </ListGroupItem>
          <ListGroupItem>
            <Button
              className="modalAttentdanceButton attentdanceButton"
              onClick={handleOpen}
            >
              Check Event Attendance
            </Button>
          </ListGroupItem>
        </ListGroup>
        <TransitionsModal open={open} handleClose={handleClose} />
      </Card>
    </div>
  );
}
