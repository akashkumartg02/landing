import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjIiLCJ1c2VySWQiOiIyIiwiZG9tYWluIjoiWXpSbU56WTNPV1ZrTWpNMVl6YzNNV1ZsTVRBeFpUQXhNV0ZtWlRRek5tRmpPVFpqTlROaFpUbGlNV1F4TkdZMU4yWXdOall3TWpZNVlXWTBPVGsxWVE9PSIsImlhdCI6MTY5Mjg2MjI0NCwiZXhwIjoxNjkzNDY3MDQ0fQ.VomOmr9wx1ye3Dhqgnj7rOnW8qTaVf16eIz6OUuOUsI'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
