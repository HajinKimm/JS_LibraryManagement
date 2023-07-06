import React from 'react';
import { HeaderWrap } from '../../styled/BookStyled';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={'/'}>북카페 도서 관리 시스템</Link></h1>
                <NavBar/>
            </div>
        </HeaderWrap>
    );
};

export default Header;