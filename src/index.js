import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Goals from './pages/Goals';
import AddGoal from './pages/AddGoals';
import ActiveGoals from './pages/ActiveGoals';
import AppRouter from './router/AppRouter';
import { Auth0Provider } from "@auth0/auth0-react"

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
  domain = {domain}
  clientId = {clientId}
  redirectUri={window.location.origin}>
 
  <React.StrictMode>
  <AppRouter/>
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
