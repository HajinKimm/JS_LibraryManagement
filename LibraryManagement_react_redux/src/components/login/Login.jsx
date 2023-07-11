import React, { useState } from 'react';
import { LoginWrap } from '../../styled/BookStyled';
import { useDispatch } from 'react-redux';
import {  onLogin } from './AuthoritySlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({email:'', password:''})
    const {email, password} = user
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputChange=e=>{
        const {value, name}=e.target
        setUser({...user, [name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(password === '1234'){
            dispatch(onLogin(user))
            navigate('/')
            setUser('')
        }else{
            alert('아이디 또는 비밀번호가 일치하지 않습니다. ( 임시비밀번호 : 1234 )')
            
        }
    }
    return (
        <LoginWrap>
            <div className="inner">
                <h2>LOGIN</h2>
                <form onSubmit={onSubmit} className='form'>
                    <div className='formWrap'>
                        <p className='loginInfo'>로그인 후 도서 관리가 가능합니다.</p>
                        <p>
                            <label>아이디</label>
                            <input type="email"  placeholder='이메일 형식' value={email} name='email' onChange={inputChange}/>
                        </p>
                        <p>
                            <label>비밀번호</label>
                            <input type="password"  placeholder='비밀번호 (1234)' value={password} name='password' onChange={inputChange}/>
                        </p>

                    </div>
                        <p className='btnWrap'><button type='submit' className='btn'>로그인</button></p>
                </form>
            </div>
        </LoginWrap>
    );
};

export default Login;