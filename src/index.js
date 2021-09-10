import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './chrome/dashboard/Dashboard';
import reportWebVitals from './chrome/dashboard/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <img alt="YCAI Logo" src="/ycai-logo.png" />
      <Dashboard />
    </div>
  </React.StrictMode>,
  document.getElementById('ycai--dashboard')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
