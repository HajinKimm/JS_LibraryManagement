import React from 'react';
import BookList from '../bookList/BookList';
import { useSelector } from 'react-redux';
import Login from '../login/Login';

const Home = () => {
    const {userLogin} = useSelector(state=>state.authority)
    return (
        <div>
            {
                userLogin? <BookList/>: <Login/>
            }
        </div>
    );
};

export default Home;