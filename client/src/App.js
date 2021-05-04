import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage2 from "./pages/SignupPage2";
import HomePage from "./pages/HomePage";
import LoginPage2 from "./pages/LoginPage2";
import Drawer from "./pages/Drawer";
import axios from "axios";
import CreateEventForm from "./pages/CreateEventForm";

import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function App() {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    axios("/api/cards").then((result) => {
      setCards(result.data);
    });
  }, []);

  if (cards === null) {
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
          <LoginPage2 />
        </Route>
        <Route exact path="/signup">
          <SignupPage2 />
        </Route>
        <ProtectedRoute exact path="/homepage">
          <Drawer />
          <HomePage cards={cards} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/createevent">
          <Drawer />
          <CreateEventForm />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
