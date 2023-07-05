import React, { useState } from 'react';
import { LoginWrap } from '../styled/BookStyled';
import { useAuthority } from '../contexts/AuthorityContext';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, authed} = useAuthority()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault()
        login(email,password)
        navigate('/')
        console.log('submit')
    }

    return (
        <LoginWrap>
            <Header/>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className='form'>
                    <div className='formWrap'>
                        <p>
                            <label>아이디</label>
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='이메일 형식'/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='비밀번호 (1234)'/>
                        </p>
                        <p className='btnWrap'><button type='submit' className='btn'>로그인</button></p>

                    </div>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;