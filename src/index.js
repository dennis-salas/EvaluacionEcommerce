import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from './Routers/AppRouter';
import './css/styles.css';
import { Provider } from "react-redux";
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

