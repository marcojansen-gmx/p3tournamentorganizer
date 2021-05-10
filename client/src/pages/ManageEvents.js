import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CreateIcon from '@material-ui/icons/Create';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {useLocation, useHistory} from 'react-router-dom';

import backgroundImage from "../utils/assets/backgroundLogin.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Tournament Organizer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      // "url(../utils/assets/backgroundLogin.jpg)",
      "url(https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/The-hobbit-the-battle-of-the-five-armies-lord-of-the-rings-the-fellowship-of-the-ring.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateEventForm(props) {

  const history = useHistory();

  const classes = useStyles();
  const [error, setError] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [availableTickets, setAvailableTickets] = useState("");
  const [armyListPoints, setArmyListPoints] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [userText, setUserText] = useState("");
  const [linkToPlayerspack, setLinkToPlayerspack] = useState("");

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventLocationChange = (e) => {
    setEventLocation(e.target.value);
  };

  const handleAvailableTicketsChange = (e) => {
    setAvailableTickets(e.target.value);
  };
  const handleArmyListPointsChange = (e) => {
    setArmyListPoints(e.target.value);
  };

  const handleTicketPriceChange = (e) => {
    setTicketPrice(e.target.value);
  };
  const handleUserTextChange = (e) => {
    setUserText(e.target.value);
  };

  const handleLinkToPlayerspackChange = (e) => {
    setLinkToPlayerspack(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const newEvent = {
      eventName: eventName,
      eventDate: eventDate,
      eventLocation: eventLocation,
      availableTickets: availableTickets,
      armyListPoints: armyListPoints,
      ticketPrice: ticketPrice,
      userText: userText,
      linkToPlayerspack: linkToPlayerspack,
    };

    fetch("/api/updateevent", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status !== 200) {
          throw resp.statusText;
        }
        return resp.json();
      })
      .then(() => {
        history.push('/homepage')
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create your next Event
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="eventName"
              label="Event Name"
              name="eventName"
              autoComplete="eventName"
              autoFocus
              onChange={handleEventNameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              type="date"
              fullWidth
              id="eventDate"
              label="Event Date"
              name="eventDate"
              autoComplete="eventDate"
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleEventDateChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="eventLocation"
              label="Event Location"
              name="eventLocation"
              autoComplete="eventLocation"
              autoFocus
              onChange={handleEventLocationChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="availableTickets"
              label="Available Tickets"
              name="availableTickets"
              autoComplete="AvailableTickets"
              autoFocus
              onChange={handleAvailableTicketsChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="armyListPoints"
              label="Army List Points"
              name="armyListPoints"
              autoComplete="armyListPoints"
              autoFocus
              onChange={handleArmyListPointsChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="ticketPrice"
              label="Ticket Price"
              type="ticketPrice"
              id="ticketPrice"
              autoComplete="current-password"
              onChange={handleTicketPriceChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="userText"
              label="Description of Event"
              type="userText"
              id="userText"
              autoComplete="current-password"
              onChange={handleUserTextChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="playerspack"
              label="Player's pack"
              type="playerspack"
              id="playerspack"
              autoComplete="current-password"
              onChange={handleLinkToPlayerspackChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="text"
              color="primary"
              className={classes.submit}
            >
              Create Event
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}