import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';//imported app.js

const root = ReactDOM.createRoot(document.getElementById('root'));
//createRoot is a mthod

root.render(
  // <React.StrictMode>
    <App />
  // {/* </React.StrictMode> */}
);


