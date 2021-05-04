import React, { useState } from "react";

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
      console.log(`Submitting Eventname: ${eventName}, Eventdate: ${eventDate}, 
      Eventlocation: ${eventLocation}, Available Tickets: ${availableTickets}, 
      Armylist Points value ${armyListPoints}, Ticket Price ${ticketPrice}, Desc ${description}, Players Pack ${linkToPlayerspack}`)
  }
  return (
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
        Location of the Event:
        <input
          type="text"
          value={armyListPoints}
          onChange={e => setArmyListPoints(e.target.value)}
        />
      </label>   

      <label>
        Location of the Event:
        <input
          type="text"
          value={ticketPrice}
          onChange={e => setTicketPrice(e.target.value)}
        />
      </label>   

      <label>
        Location of the Event:
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>  

      <label>
        Location of the Event:
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