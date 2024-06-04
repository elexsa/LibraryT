
//function App() {
//    return (

//    );
//}
//export default App;

import React from "react";
import {Routes,Route} from "react-router-dom";
import { useUser } from './context/UserContext';
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import Search from "./pages/Search";
import Bookshelves from "./pages/Bookshelves";
import Register from "./components/Register";
import Login from "./components/Login";
import BookLists from "./components/shelves/BookLists";
import NoPage from "./pages/NoPage";

export default function App() {
    const { user } = useUser();
    return (
        <div className="App">
            
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Homepath />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/search" element={<Search />} />
                <Route path="/bookshelves" element={user ? <Bookshelves /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    );
}

//import { useEffect, useState } from 'react';
//import './App.css';

//function App() {

//    const [forecasts, setForecasts] = useState();

//    useEffect(() => {
//        populateWeatherData();
//    }, []);

//    const contents = forecasts === undefined
//        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//        : <table className="table table-striped" aria-labelledby="tabelLabel">
//            <thead>
//                <tr>
//                    <th>Date</th>
//                    <th>Temp. (C)</th>
//                    <th>Temp. (F)</th>
//                    <th>Summary</th>
//                </tr>
//            </thead>
//            <tbody>
//                {forecasts.map(forecast =>
//                    <tr key={forecast.date}>
//                        <td>{forecast.date}</td>
//                        <td>{forecast.temperatureC}</td>
//                        <td>{forecast.temperatureF}</td>
//                        <td>{forecast.summary}</td>
//                    </tr>
//                )}
//            </tbody>
//        </table>;

//    return (
//        <div>
//            <h1 id="tabelLabel">Weather forecast</h1>
//            <p>This component demonstrates fetching data from the server.</p>
//            {contents}
//        </div>
//    );
    
//    async function populateWeatherData() {

//        const response = await fetch("/api/WeatherForecast/Get");
//        const data = await response.json();
//        console.log(data);
//        setForecasts(data);

//        //var name = 'пітьма';
//        //var num = 10;
//        //const response = await fetch(`/api/BooksVolumes/GetBooksByName?name=${encodeURIComponent(name)}&num=1`);
//        //const data = await response.json();
//        //console.log(data);

//        //const response = await fetch("/api/BooksVolumes/BooksByName?Name=soul");
//        //const data = await response.json();
//        //console.log(data);

//        //var responseClone; // 1
//        //fetch('/weatherforecast/get')
//        //    .then(function (response) {
//        //        responseClone = response.clone(); // 2
//        //        return response.json();
//        //    })
//        //    .then(function (data) {
//        //        // Do something with data
//        //    }, function (rejectionReason) { // 3
//        //        console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//        //        responseClone.text() // 5
//        //            .then(function (bodyText) {
//        //                console.log('Received the following instead of valid JSON:', bodyText); // 6
//        //            });
//        //    });
//    }
//}

//export default App;