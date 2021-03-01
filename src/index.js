import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmBuy from "./components/confirmBuy/confirmBuy";
import { Provider } from "react-redux";
import Store from "./store";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/confirm-buy" component={ConfirmBuy} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
