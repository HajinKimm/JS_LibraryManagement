import React from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import Header from '../main/Header';

const Logout = () => {

    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGOUT</h2>
                <div className='form'>
                <div className='formWrap'>
                    <span>아이디 : </span>
                    <span>이메일 : </span>
                    <p className='question'>로그아웃 하시겠습니까?</p>

                </div>
                    <p className='btnWrap'>
                        <button className='btn'>예</button>
                        <button className='btn'>아니요</button>
                    </p>
                </div>

            </div>
        </LoginWrap>
    );
};

export default Logout;