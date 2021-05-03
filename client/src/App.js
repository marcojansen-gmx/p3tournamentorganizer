import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage2 from "./pages/SignupPage2";
import HomePage from "./pages/HomePage";
import LoginPage2 from "./pages/LoginPage2";
import Drawer from "./pages/Drawer";
import axios from "axios";
// import createEventForm from "./pages/createEventForm";
 
export default function App(){
  const [cards, setCards] = useState(null);

  useEffect(() => {
    axios(
        '/api/cards',
      ).then ((result) => {
        setCards(result.data);
        console.log(result.data)
      });
  }, []);

  if (cards===null){
    return <div>
      loading...
    </div>
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
          <ProtectedRoute exact path="/homepage">
            <Drawer />
            <HomePage cards={cards}/>
          </ProtectedRoute>
          {/* <Route exact path="/createevent">
            <Drawer />
            <createEventForm />
          </Route> */}
        </Switch>
    </BrowserRouter>
  
)};
