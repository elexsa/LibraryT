import React,{ useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '/src/context/UserContext'
import './BookCard.css';

function BookCard({ book })
{
    const { user, logout } = useUser();
    const navigate = useNavigate();

    const deleteBook = async () => {

        console.log(book.id)
        console.log(book.title)
        console.log(book.author)
        console.log(book.imageLink)
        await axios.delete(
            '/api/Users/DelBookFromFav/',
            {
                headers: { 'Content-Type': 'application/json' },
                params: { userId: user.id },
                
                data: {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    imageLink: book.imageLink,
},
            });

    };

    return(<div key={book.id} className="book-card">

        <a href={`/preview?id=${book.id}`}>

            <div className="image-container">
                <img src={book.imageLink != null ? book.imageLink : "https://via.placeholder.com/120x180.png?text=no+photo"}></img>
            </div>
            <div className="text-container">
                <h3>{ book.title.length > 40 ? book.title.substr(0, 39) + "..." : book.title }</h3>
                <p>Author: {book.author}</p>
            </div>
        </a>
        <button className="remove-btn" onClick={deleteBook} >
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>)
}

export default BookCard;
