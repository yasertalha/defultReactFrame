import React from "react";
import Home from "./containers/homeScreen/index";
import Ticket from "./containers/TicketBook/index";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Ticket">
          <Ticket />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
