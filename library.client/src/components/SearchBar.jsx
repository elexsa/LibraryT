import React, {useState} from "react";
import "./SearchBarStyles.css"
import { SearchResultsList } from './SearchResultsList';



export const SearchBar = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);


    const fetchData = (value) => {
        if (value != "" && value != " ") {
            fetch(`/api/Bookvolumes/GetBooksByName?name=${value}`)
                .then((response) => response.json())
                .then((json) => {

                    const results = json.items;
                    setResults(results);
                    
                });
        } else { const results = []; setResults(results); }

    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <div className="input-wrapper">
            <i class="fa-solid fa-magnifying-glass" />
            <input
                className="search-input"
                placeholder="Search"
                value={input} 
                onChange={(e) => handleChange(e.target.value)}
            />
            <div className="search-result-container">
                <SearchResultsList results={results} />
            </div>
        </div>
    )
}