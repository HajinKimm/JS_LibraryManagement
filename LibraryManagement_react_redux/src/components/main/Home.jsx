import React from 'react';
import BookList from '../bookList/BookList';
import { useSelector } from 'react-redux';
import Login from '../login/Login';

const Home = () => {
    return (
        <div>
                <BookList/>
        </div>
    );
};

export default Home;