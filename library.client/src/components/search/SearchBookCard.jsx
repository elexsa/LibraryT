import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '/src/context/UserContext'

function SearchBookCard({ book, index }) {

    const { user, logout } = useUser();
    const navigate = useNavigate();
    const [bookmark, setBookmark] = useState(false);

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
        <div key={index} className="book-card-asearch ">

            <a href={`/preview?id=${book.id}`} className="info-container-asearch ">

                <div className="image-container-asearch ">
                    <img src={book.volumeInfo.imageLinks != null ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/120x180.png?text=no+photo"}></img>
                </div>
                <div className="text-container-asearch ">

                    <h3>{book.volumeInfo.title}</h3>
                    <p>Author: {book.volumeInfo.authors}</p>
                    <span>Publisher: {book.volumeInfo.publisher != null ? book.volumeInfo.publisher : "not specified"}</span><br></br>
                    <span>Published Date: {book.volumeInfo.publishedDate != null ? new Date(book.volumeInfo.publishedDate).toDateString() : "not specified"}</span>

                </div>

            </a>
            <button className="bookmark-link" onClick={postBook}>
                <i class={bookmark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} ></i>
            </button>
        </div>
    )
}

export default SearchBookCard