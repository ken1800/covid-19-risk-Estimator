import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Alerts from "./components/layout/Alerts";
import Result from "./components/results";
import SignUp from "./components/form";
import Kenny from "./components/kenny";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>{" "}
        <Alerts />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={SignUp} />{" "}
              <Route exact path="/result" component={Result} />{" "}
              <Route exact path="/kenny" component={Kenny} />{" "}
            </Switch>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
