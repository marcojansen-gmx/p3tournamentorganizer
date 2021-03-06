import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ManageEvents from "./pages/ManageEvents";
import LoginPage from "./pages/LoginPage";
import CreateEventForm from "./pages/CreateEventForm";
import Drawer from "./components/Drawer";

export default function App() {

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
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/createevent">
          <Drawer />
          <CreateEventForm />
        </ProtectedRoute>
        <ProtectedRoute exact path="/manageevent">
          <Drawer />
          <ManageEvents />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
