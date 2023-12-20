import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjEyMiIsInVzZXJJZCI6IjEzMiIsImRvbWFpbiI6Ill6Um1OelkzT1dWa01qTTFZemMzTVdWbE1UQXhaVEF4TVdGbVpUUXpObUUyTldSaE5EVXpPRFkzTm1RMFltWmtNV1V6WXpZd1lUWTNaREUxT1RkbFpRPT0iLCJpYXQiOjE3MDMwNTkyMzQsImV4cCI6MTcwMzY2NDAzNH0.s3SQcMKW3trwRsa7jSD0S68zDEwTagZDXbux8O17EkY'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
