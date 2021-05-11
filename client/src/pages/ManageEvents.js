import React from "react";
import CardFlipUnderConstruction from "../components/CardFlipUnderConstruction";
import { Shift } from "ambient-cbg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ManageEvents() {
  return (
    <Container>
      <Shift />
      <Row>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <CardFlipUnderConstruction />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}
