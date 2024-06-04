import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '/src/context/UserContext';
import './BookCard.css';
import { useState } from 'react';

const BookCard = ({ book }) => {
    const { user, logout } = useUser();
    const [bookmark, setBookmark ]= useState(false);
    const navigate = useNavigate();

    
    const postBook = async () => {
        if (!user) {
            navigate("/login")
        }
        await axios.post(
            '/api/Users/AddBookToFav/',
            {

                id: book.id,
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors != null ? book.volumeInfo.authors : ["not specified"],
                imageLink: book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"

            }, { params: { userId: user.id } }).then(setBookmark(true));
            
    };
    return (
        <div className="book-card-home">
            <a  href={`/preview?id=${book.id}`}>
        
                <img src={book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"} alt={book.volumeInfo.title} />
                <div className="book-details-home">
                    <h3>{book.volumeInfo.title != null ? (book.volumeInfo.title.length > 40 ? book.volumeInfo.title.substr(0, 39) + "..." : book.volumeInfo.title):""}</h3>    
                    <p>Author: {book.volumeInfo.authors != null ? book.volumeInfo.authors : ["not specified"]}</p>
                    <p>Genre: {book.volumeInfo.categories}</p>
                    <span>Published Date: {book.volumeInfo.publishedDate != null ? new Date(book.volumeInfo.publishedDate).toDateString() : "not specified"}</span>
                </div>
            </a>

            <button className="bookmark-link" onClick={postBook}>
                <i class={bookmark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} ></i>

            </button>
        </div>
    );
};

export default BookCard;
