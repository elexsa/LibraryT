import React, { useState, useEffect } from 'react';
import "./styles/HomePage.css";
import GenreList from '../components/homeCatalog/GenreList';
import BookList from '../components/homeCatalog/BookList';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);

    const apiResult = async () => {
        try {
            //axios.get('/api/BooksVolumes/GetBookByParams', searchParams)
            const response = await axios.get('/api/BooksVolumes/GetBooksByName', { params: {name:"nigger"} });
            console.log(response)
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
        
    };
    useEffect(() => {
        apiResult()
    }, [])


//    const [selectedGenre, setSelectedGenre] = useState('');
//    const [filteredBooks, setFilteredBooks] = useState(books);

//    useEffect(() => {
//    //if (selectedGenre) {
//    //    setFilteredBooks(booksData.filter(book => book.genre === selectedGenre));
//    //} else {
//        setFilteredBooks(books);
///*    }*/
//    }, [selectedGenre]);
    console.log(books)

    return (
    <div className="App">
        <div className="container">
{/*        <GenreList onSelectGenre={setSelectedGenre} />*/}
        <BookList books={books.items} />

        </div>
    </div>
    );
};

export default Home;