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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import {UserProvider} from './context/UserContext.jsx';


import { useContext } from 'react';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <Router>
                <App/>
            </Router>
        </UserProvider>
    </React.StrictMode>
);