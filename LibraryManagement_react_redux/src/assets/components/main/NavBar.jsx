import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <ul className='topMenu'>
            <li><Link to={'/'} >HOME</Link></li>
            <li><Link to={'/addbook'} >ADD BOOK</Link></li>
            <li><Link to={'/login'} >LOGIN</Link></li>


{/* 
            {
                authed ?
                <>
                    <li><Link to={'/addbook'} onClick={()=>setIsEdit(false)}>ADD BOOK</Link></li>
                    <li><Link to={'/logout'}>LOGOUT</Link></li>
                </>
                :
                <>
                    <li><span>ADD BOOK</span></li>
                    <li><Link to={'/login'} >LOGIN</Link></li>
                </>
            }
*/}
        </ul>
    );
};

export default NavBar;