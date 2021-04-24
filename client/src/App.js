import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Cardpage from "./pages/CardPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/card">
          <Cardpage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <ProtectedRoute exact path="/homepage">
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
