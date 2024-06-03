// src/components/BookLists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const BookList = ({ title, books }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="book-list">

            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}

            
        </div>
    );
};

const BookLists = ({ id }) => {


    const [favorites, setFavorites] = useState([]);
    const fetchBooks = async () => {
        const favoritesRes = await axios.get('/api/Users/GetBooksByUser/', { params: { userId: id } });

        setFavorites(favoritesRes.data);

    };

    useEffect(() => {


        fetchBooks();
    }, []);

    return (
        <div className="book-lists">
            <BookList title="Favorites" books={favorites} />

        </div>
    );
};

export default BookLists;
