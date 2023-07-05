import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAuthority } from '../contexts/AuthorityContext';

const NavBar = () => {
    const {isEdit,setIsEdit} = useUser()
    const {authed} =useAuthority()
    return (
        <ul className='topMenu'>
            <li><Link to={'/'} >HOME</Link></li>
            {

            }
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
        </ul>
    );
};

export default NavBar;