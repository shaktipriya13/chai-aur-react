import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';//imported app.js

const root = ReactDOM.createRoot(document.getElementById('root'));
//createRoot is a mthod
//document.getElementById('root')-> this selects the elmnt(div) in html having id as root
root.render(
  // <React.StrictMode>
    <App />
  // {/* </React.StrictMode> */}
);


