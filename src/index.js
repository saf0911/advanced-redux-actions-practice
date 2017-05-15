import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import store from "./Store";
import {increaseCounter} from "./actions";
import {decreaseCounter} from "./actions";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
