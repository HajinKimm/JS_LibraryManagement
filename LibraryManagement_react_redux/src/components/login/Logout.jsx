import React from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onLogout } from './AuthoritySlice';

const Logout = () => {
    const {text } = useSelector(state=>state.authority)
    const { email} = text
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <LoginWrap>
            <div className="inner">
                <h2>LOGOUT</h2>
                <div className='form'>
                <div className='formWrap'>
                    <p className='loginInfo'>로그아웃 하시겠습니까?</p>
                    <span>이메일 : {email}</span>
                </div>
                    <p className='btnWrap'>
                        <button onClick={()=>{navigate('/'), dispatch(onLogout())}} className='btn'>예</button>
                        <button onClick={()=>navigate('/')} className='btn'>아니요</button>
                    </p>
                </div>

            </div>
        </LoginWrap>
    );
};

export default Logout;