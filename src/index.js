import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwiZG9tYWluIjoiWXpSbU56WTNPV1ZrTWpNMVl6YzNNV1ZsTVRBeFpUQXhNV0ZtWlRRek5tRTJOV1JoTkRVek9EWTNObVEwWW1aa01XVXpZell3WVRZM1pERTFPVGRsWlE9PSIsImlhdCI6MTcwODg0OTUwMSwiZXhwIjoxNzA5NDU0MzAxfQ.mwkbofacywxPxp3ubVvFJSPsAib0EjbGhjSZAYuOUSk'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
