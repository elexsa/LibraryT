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
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <App />
        
    </React.StrictMode>
);
//<GoogleOAuthProvider clientId="112383829383-puhoirnfaatkvtps1k44pc7ec42ojgit.apps.googleusercontent.com">
//</GoogleOAuthProvider>