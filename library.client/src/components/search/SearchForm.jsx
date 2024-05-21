// src/components/SearchForm.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
    const [searchParams, setSearchParams] = useState({
        title: '',
        author: '',
        
    });

    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setSearchParams({ ...searchParams, [name]: `${value}` });
    };

    const handleSubmit = async (e) => {
        console.log(searchParams)
        e.preventDefault(searchParams);
        try {
            //axios.get('/api/BooksVolumes/GetBookByParams', searchParams)
            const response = await axios.get('/api/BooksVolumes/GetBookByParams', { params: searchParams });
            console.log(response)
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const showResults = () => {
        if (results.items != undefined) {

            var bookVolumes = results.items
            var content = bookVolumes.length > 0 ? (
                <ul>
                
                    {bookVolumes.map((book, index) => (
                        <a href={`/preview?id=${book.id}`}>
                        <div key={index} className="book-card">
                            <div className="image-container">
                                <img src={book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"}></img>
                            </div>
                            <div className="text-container">

                                <h3>{book.volumeInfo.title}</h3>
                                <p>Author: {book.volumeInfo.authors}</p>
                                <span>Published Date: {book.volumeInfo.publishedDate != null ? new Date().toDateString(book.volumeInfo.publishedDate) : "not specified"}</span>
                            </div>
                            </div>
                        </a>

                    ))}
                </ul>
            ) : (
                <p>No books found.</p>
            )
        }
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
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" id="genre" name="genre" value={searchParams.genre} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="publishedDate">Published Date:</label>
                    <input type="date" id="publishedDate" name="publishedDate" value={searchParams.publishedDate} onChange={handleChange} />
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