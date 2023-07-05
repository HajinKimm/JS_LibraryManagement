import React from 'react';
import BookList from './BookList';
import Header from '../components/Header';
import { useAuthority } from '../contexts/AuthorityContext';
import Login from './Login';

const Home = () => {
    const { authed } =useAuthority()
    return (
        <div>
            {
                authed?
                <BookList/>
                :<Login/>
            }
        </div>
    );
};

export default Home;