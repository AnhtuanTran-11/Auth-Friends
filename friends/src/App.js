import React from "react";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/loginform" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
