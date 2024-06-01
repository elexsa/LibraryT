import React, { useState, useEffect } from 'react';
import "./styles/HomePage.css";
import Loading from '../components/Loading';
import BookList from '../components/homeCatalog/BookList';
import axios from 'axios';


const Home = () => {
    const [books, setBooks] = useState([]);

    const apiResult = async () => {
        try {
            //axios.get('/api/BooksVolumes/GetBookByParams', searchParams)
            const randomWord = await axios.get('https://random-word-form.herokuapp.com/random/noun');
            console.log(randomWord.data[0])
            const response = await axios.get('/api/Bookvolumes/GetBooksByName', { params: { name: randomWord.data[0] } });
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
                {books.length == 0 ? <Loading />: <BookList books={books.items} />}

        </div>
    </div>
    );
};

export default Home;