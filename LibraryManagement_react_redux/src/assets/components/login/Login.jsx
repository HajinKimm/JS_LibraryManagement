import React, { useState } from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import Header from '../main/Header';


const Login = () => {


    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className='form'>
                    <div className='formWrap'>
                        <p>
                            <label>아이디</label>
                            <input type="email"  placeholder='이메일 형식'/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"  placeholder='비밀번호 (1234)'/>
                        </p>
                        <p className='btnWrap'><button type='submit' className='btn'>로그인</button></p>

                    </div>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;