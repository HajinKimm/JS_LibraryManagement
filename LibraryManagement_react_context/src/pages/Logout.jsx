import React from 'react';
import { useAuthority } from '../contexts/AuthorityContext';
import Header from '../components/Header';
import { LoginWrap } from '../styled/BookStyled';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout ,  user} =useAuthority()
    const navigate = useNavigate()
    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGOUT</h2>
                <div className='form'>
                <div className='formWrap'>
                    <span>아이디 : {user.id}</span>
                    <span>이메일 : {user.email}</span>
                    <p className='question'>로그아웃 하시겠습니까?</p>

                </div>
                    <p className='btnWrap'>
                        <button onClick={logout} className='btn'>예</button>
                        <button onClick={()=>navigate('/')} className='btn'>아니요</button>
                    </p>

                </div>

            </div>
        </LoginWrap>
    );
};

export default Logout;