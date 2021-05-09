import React from "react";
import { Shift } from "ambient-cbg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardFlip from "../components/CardFlip";

export default function HomePage(props) {

  return (
    <Container>
      <Shift />
      <Row>
        {props.events.map((event) => {
          return (
            <Col key={event.id} style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}>
              <CardFlip event={event} />
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
