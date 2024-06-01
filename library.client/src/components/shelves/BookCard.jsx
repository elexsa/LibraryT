// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book }) => (
    <div className="book-card">
        <img src={book.coverImage} alt={book.title} />
        <div className="book-info">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
    </div>
);

export default BookCard;
