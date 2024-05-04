import React, {useState} from "react";
import "./SearchBarStyles.css"


export const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`/api/BooksVolumes/GetBooksByName?name=${value}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.items);
            });
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
        </div>
    )
}