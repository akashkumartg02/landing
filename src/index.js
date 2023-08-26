import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwiZG9tYWluIjoiWmpKa09HRm1aRGs1WkRJeFpqTTFZell3WTJZMllUVmhNR1JtWkRjMFlqTTBaREE1TldJeFpXRmxNRGRtTjJVMk5qSTFNelptTkRRNFlXUXpPRFJsWVE9PSIsImlhdCI6MTY5MzA1NDQxMCwiZXhwIjoxNjkzNjU5MjEwfQ.iFf1CnDk5x9XhDCsJepCZj-n_4M6kwMrDWqOxHMxku4'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
