import React, { useState } from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import Header from '../main/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loginInput, onLogin } from './AuthoritySlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {text} = useSelector(state=>state.authority)
    const {email, password} = text
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text) return
        dispatch(onLogin(text))
        navigate('/')
    }
    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className='form'>
                    <div className='formWrap'>
                        <p className='loginInfo'>로그인 후 도서 관리가 가능합니다.</p>
                        <p>
                            <label>아이디</label>
                            <input type="email"  placeholder='이메일 형식' value={email} onChange={(e)=>dispatch(loginInput({...text, email:e.target.value}))}/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"  placeholder='비밀번호 (1234)' value={password} onChange={(e)=>dispatch(loginInput({...text, password:e.target.value}))}/>
                        </p>

                    </div>
                        <p className='btnWrap'><button type='submit' className='btn'>로그인</button></p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;