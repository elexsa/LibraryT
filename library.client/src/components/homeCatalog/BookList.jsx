// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ books }) => {

    if (books != undefined) {
    
        return (
            
                <div className="book-list">
                    {books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>


        );

    }
};

export default BookList;
