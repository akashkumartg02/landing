import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CmdKConfigurer } from '@cmdk/stage-toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CmdKConfigurer token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjIiLCJ1c2VySWQiOiIyIiwiZG9tYWluIjoiXHUwMDAw77-9c1x1MDAwNj3vv71xM3jvv70p77-977-9by0qXFzvv73vv70ua--_vUgpO--_ve-_ve-_vVx1MDAwMdaO77-977-977-9Xyzvv73vv73vv71k77-9OlFuIiwiaWF0IjoxNjkyNzk4Njk0LCJleHAiOjE2OTM0MDM0OTR9.dt3FXJ_f3meURdmyeX_HHszlx8gU3kOz8xb_omYG_hg'>
      <App />
    </CmdKConfigurer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
