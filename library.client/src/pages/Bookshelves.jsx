import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import BookLists from '../components/shelves/BookLists';

const Bookshelves = () => {
    const { user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Shelf</h1>
            <BookLists id={user.id} />
        </div >)
};

export default Bookshelves;