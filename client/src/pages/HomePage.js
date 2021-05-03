import React, { useState } from "react";
import { Shift } from "ambient-cbg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardFlip from "./CardFlip";

export default function HomePage(props) {
  const [error, setError] = useState("");

  function handleLogout() {
    fetch("/api/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        window.location = "/";
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <Container>
      <Shift />
      <Row>
        {props.cards.map((card) => {
          return (
            <Col key={card.id} style={{
              display: "flex",
              justifyContent: "center",
            }}>
              <CardFlip card={card} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
