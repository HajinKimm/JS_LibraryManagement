import React from 'react';
import { FooterWrap } from '../../styled/BookStyled';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, isEditChange } from '../addbook/addFormSlice';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {userLogin} =useSelector(state => state.authority)
    const dispatch = useDispatch()
    const onUp = ()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }
    return (
        <FooterWrap>
            <ul>
                <li><Link to={'/'} onClick={onUp}>HOME</Link></li>

                {   userLogin
                    ?
                    <>
                        <li><Link to={'/addbook'} 
                            onClick={()=>{onUp(), dispatch(isEditChange(false)) ,
                                        dispatch(changeInput({genre:'', title:'', author:'', bookcode:''}))}}>ADD BOOK</Link>
                        </li>
                        <li><Link to={'/logout'}  onClick={onUp}>LOGOUT</Link></li>
                    </>
                    :
                    <>
                        <li><Link to={'/login'}  onClick={onUp}>ADD BOOK</Link></li>
                        <li><Link to={'/login'}  onClick={onUp}>LOGIN</Link></li>
                    </>
                }

            </ul>
            <span>COPYRIGHT ⓒ All rights RESERVED.</span>
        </FooterWrap>
    );
};

export default Footer;