// src/components/GenreList.js
import React from 'react';
import './GenreList.css';

const genres = [
    'Action', 'Indie', 'Adventure', 'RPG', 'Strategy',
    'Shooter', 'Casual', 'Simulation'
];

const GenreList = ({ onSelectGenre }) => {
    return (
        <div className="genre-list">
            <h2>Genres</h2>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index} onClick={() => onSelectGenre(genre)}>
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
