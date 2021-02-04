import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store  from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ConfirmBuy from './components/confirmBuy/confirmBuy';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <Provider store = {Store}>
      <Route path="/" exact={true} component={App} />
      <Route path="/confirm-buy" component={ConfirmBuy} />
      </Provider>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

