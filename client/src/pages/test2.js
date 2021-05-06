
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function CreateEventForm(props) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [availableTickets, setAvailableTickets] = useState("");
  const [armyListPoints, setArmyListPoints] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [description, setDescription] = useState("");
  const [linkToPlayerspack, setLinkToPlayerspack] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
}
return (
  <Row>
  <Col>
  <form onSubmit={handleSubmit}>
    <label>
      Name of the Event:
      <input
        type="text"
        value={eventName}
        onChange={e => setEventName(e.target.value)}
      />
    </label>
    
    <label>
      Date of the Event:
      <input
        type="date"
        value={eventDate}
        onChange={e => setEventDate(e.target.value)}
      />
    </label>
    
    <label>
      Location of the Event:
      <input
        type="text"
        value={eventLocation}
        onChange={e => setEventLocation(e.target.value)}
      />
    </label>     
    
    <label>
      Maximum ticket contingent:
      <input
        type="number"
        value={availableTickets}
        onChange={e => setAvailableTickets(e.target.value)}
      />
    </label>

    <label>
      Points for Army List:
      <input
        type="text"
        value={armyListPoints}
        onChange={e => setArmyListPoints(e.target.value)}
      />
    </label>   

    <label>
      Ticket Price:
      <input
        type="text"
        value={ticketPrice}
        onChange={e => setTicketPrice(e.target.value)}
      />
    </label>   

    <label>
      Description:
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
    </label>  

    <label>
      Players Pack Link
      <input
        type="text"
        value={linkToPlayerspack}
        onChange={e => setLinkToPlayerspack(e.target.value)}
      />
    </label>  
   
    <input type="submit" value="Submit" />
  </form>
);
}
  <Row>
        <Col>
          <Form>
            <Form.Group controlId=“formBasicEmail”>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type=“email”
                placeholder=“Enter email”
              />
            </Form.Group>
            <Form.Group controlId=“formBasicPassword”>
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type=“password”
                placeholder=“Password”
              />
            </Form.Group>
            <Form.Group controlId=“formBasicName”>
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={name}
                type=“name”
                placeholder=“Name”
              />
            </Form.Group>
            <Form.Group controlId=“formBasicImage”>
              <Form.Label>Image</Form.Label>
              <Form.Control
                ref={imageUrl}
                type=“string”
                placeholder=“Image”
              />
            </Form.Group>
            {error && <Form.Text className=“text-muted”>{error}</Form.Text>}
            <Button variant=“outline-warning” type=“submit” onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>