import React, { useState, useEffect } from "react";
import { Shift } from "ambient-cbg";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardFlip from "../components/CardFlip";

export default function HomePage() {
  const [events, setEvents] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/api/events").then((result) => {
      setEvents(result.data);
    });
  }, []);

  if (events === null) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Shift />
      <Row>
        {events.map((event) => {
          return (
            <Col
              key={event.id}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
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
