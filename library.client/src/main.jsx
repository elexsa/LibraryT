//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'

//ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
//        <h1>hello</h1>
//        <App />
//  </React.StrictMode>,
//)

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/*<BrowserRouter>*/}
            <App />
        {/*</BrowserRouter>*/}
    </React.StrictMode>
);