import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {userLogin} =useSelector(state => state.authority)
    const dispatch = useDispatch()

    return (
        <ul className='topMenu'>
            <li><Link to={'/'} >HOME</Link></li>

            {   userLogin
                 ?
                <>
                    <li><Link to={'/addbook'} >ADD BOOK</Link></li>
                    <li><Link to={'/logout'}>LOGOUT</Link></li>
                </>
                :
                <>
                    <li><span>ADD BOOK</span></li>
                    <li><Link to={'/login'} >LOGIN</Link></li>
                </>
            }

        </ul>
    );
};

export default NavBar;