import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage2 from "./pages/SignupPage2";
import HomePage from "./pages/HomePage";
import LoginPage2 from "./pages/LoginPage2";
import Drawer from "./pages/Drawer";
import createEventForm from "./pages/createEventForm";

function App() {
  const props = {
    eventname:  "eventname_example",
    eventdate:  "13/13/2022_example",
    eventlocation:  "eventlocation_example",
    armylistpoints:  "armylistpoints_example",
    ticketprice:  "ticketprice_example",
  };
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <LoginPage2 />
          </Route>
          <Route exact path="/signup">
            <SignupPage2 />
          </Route>
          <Route exact path="/homepage">
            <Drawer />
            <HomePage {...props}/>
          </Route>
          <Route exact path="/createevent">
            <Drawer />
            <createEventForm />
          </Route>
          <ProtectedRoute exact path="/test">
            <Drawer />
            <HomePage />
          </ProtectedRoute>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
