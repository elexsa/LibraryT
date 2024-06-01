// src/components/BookLists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const BookList = ({ title, books }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="book-list">
            <div className="list-header">
                <h2>{title}</h2>
                <button onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? 'Expand' : 'Collapse'}
                </button>
            </div>
            {!isCollapsed && (
                <ScrollMenu>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </ScrollMenu>
            )}
        </div>
    );
};

const BookLists = () => {
    const [favorites, setFavorites] = useState([]);
    const [readingNow, setReadingNow] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const favoritesRes = await axios.get('/api/favorites');
            const readingNowRes = await axios.get('/api/readingNow');
            const wantToReadRes = await axios.get('/api/wantToRead');

            setFavorites(favoritesRes.data);
            setReadingNow(readingNowRes.data);
            setWantToRead(wantToReadRes.data);
        };

        fetchBooks();
    }, []);

    return (
        <div className="book-lists">
            <BookList title="Favorites" books={favorites} />
            <BookList title="Reading Now" books={readingNow} />
            <BookList title="Want to Read" books={wantToRead} />
        </div>
    );
};

export default BookLists;
