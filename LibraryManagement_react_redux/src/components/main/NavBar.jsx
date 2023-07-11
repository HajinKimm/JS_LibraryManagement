import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { changeInput, isEditChange } from '../addbook/addFormSlice';

const NavBar = () => {
    const {userLogin} =useSelector(state => state.authority)
    const dispatch = useDispatch()
    const location = useLocation()
    return (
        <ul className='topMenu'>
            <li><Link to={'/'} className={location.pathname==='/'?'on':''}>HOME</Link></li>

            {   userLogin
                 ?
                <>
                    <li><Link to={'/addbook'} 
                        onClick={()=>{dispatch(isEditChange(false)) ,
                                    dispatch(changeInput({genre:'', title:'', author:'', bookcode:''}))}}
                        className={location.pathname==='/addbook'?'on':''}       
                                >ADD BOOK</Link>
                    </li>
                    <li><Link to={'/logout'} className={location.pathname==='/logout'?'on':''}>LOGOUT</Link></li>
                </>
                :
                <>
                    <li><Link to={'/login'} className={location.pathname==='/addbook'?'on':''}>ADD BOOK</Link></li>
                    <li><Link to={'/login'} className={location.pathname==='/login'?'on':''}>LOGIN</Link></li>
                </>
            }

        </ul>
    );
};

export default NavBar;