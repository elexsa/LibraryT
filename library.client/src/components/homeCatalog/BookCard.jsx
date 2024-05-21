// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
    return (
        <div className="book-card-home">
            <img src={book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"} alt={book.volumeInfo.title} />
            <div className="book-details-home">
                <h3>{book.volumeInfo.title}</h3>
                <p>Author: {book.volumeInfo.author}</p>
                <p>Genre: {book.volumeInfo.categories}</p>
                <span>Published Date: {new Date(book.volumeInfopublishedDate).toDateString()}</span>
            </div>
        </div>
    );
};

export default BookCard;
