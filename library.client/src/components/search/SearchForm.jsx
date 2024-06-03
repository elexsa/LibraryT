// src/components/SearchForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '/src/context/UserContext';
import SearchBookCard from './SearchBookCard';

const SearchForm = () => {
    const [searchParams, setSearchParams] = useState({
        title: '',
        author: '',
        subject: '',
        publisher:'',
    });
    const [results, setResults] = useState([]);
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [bookmark, setBookmark] = useState(false);
        

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({ ...searchParams, [name]: `${value}` });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(searchParams);
        try {
            const response = await axios.get('/api/Bookvolumes/GetBookByParams', { params: searchParams });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };


    const showResults = () => {

        if (results.items != undefined) {

            var bookVolumes = results.items
            var content =
                <ul>

                    {bookVolumes.map((book, index) => (
                        <SearchBookCard book={book} index={index} />
                        
                    ))}
                </ul>

        } else { var content = <p> No books found.</p> }
        return content

    }

    return (
        <div className="search-container">
            <h1 className="heading">Advanced Book Search</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={searchParams.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={searchParams.author} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={searchParams.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" id="publisher" name="publisher" value={searchParams.publisher} onChange={handleChange} />
                </div>

                <button type="submit" className="btn-submit">Search</button>
            </form>
            <div className="results">
                {showResults()}
            </div>
        </div>
    );
};

export default SearchForm;