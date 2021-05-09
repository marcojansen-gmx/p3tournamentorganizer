import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateEventForm from "./pages/CreateEventForm";
import Drawer from "./components/Drawer";
import axios from "axios";


import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function App() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    axios("/api/events").then((result) => {
      setEvents(result.data);
    });
  }, []);

  if (events === null) {
    return (
      <div>
        <div className="sweet-loading">
          <PacmanLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <ProtectedRoute exact path="/homepage">
          <Drawer />
          <HomePage events={events} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/createevent">
          <Drawer />
          <CreateEventForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
