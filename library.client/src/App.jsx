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
                <Route path="/" element={<Home />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/search" element={<Search />} />
                <Route path="/bookshelves" element={user ? <Bookshelves /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    );
}
