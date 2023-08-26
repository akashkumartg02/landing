import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwiZG9tYWluIjoiWXpsa05qUXpabUV6TTJGa1ptWTBNR1ExTURkbE0ySXdZbUZoT1dNNU1UZzJZakJoTURSak1UZGpOVEUwWmpVNU1XSXpOemhsTkdWbU1ERTRNbU14WWc9PSIsImlhdCI6MTY5MzA1NDIyMywiZXhwIjoxNjkzNjU5MDIzfQ.4sN4WWldyKDXAY7LhJoztFaQACDpPqdVg1nQdkhXWcs'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
