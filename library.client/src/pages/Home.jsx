import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import BookList from '../components/homeCatalog/BookList';
import axios from 'axios';
import "./styles/HomePage.css";

const Home = () => {

    const [books, setBooks] = useState([]);
    const [word, setWord] = useState("");
    const [counter, setCounter] = useState(0);
    const [max, setMax] = useState(0);

    const apiResult = async () => {
        try {

            const randomWord = await axios.get('https://random-word-form.herokuapp.com/random/noun');
            setWord(randomWord.data[0]);
            const response = await axios.get('/api/Bookvolumes/GetBooksByName', { params: { name: randomWord.data[0], num: 10 } });
            setBooks(response.data.items);
            setCounter(15)
            setMax(response.data.totalItems)


        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const diveDeeper = async () => {
        try {
            if (counter == 40)
            {
                return
            }
            setCounter(counter+5)
            const response = await axios.get('/api/Bookvolumes/GetBooksByName', { params: { name: word, num: counter } });
            setBooks(response.data.items)


        } catch (error) {
            console.error('Error fetching search results:', error);
        }

    };

    useEffect(() => {
        apiResult()
    }, [])


    return (
    <div className="App">
        <div className="container">
                {books.length == 0 ? <Loading /> : <BookList books={books} />}

                
            </div>
            {books.length == 0 ? "" : <button id="deepButton"onClick={diveDeeper}>↓Dive deeper↓</button>}



    </div>
    );
};

export default Home;