import React, { useEffect, useState } from 'react';
import { AddBookWrap } from '../styled/BookStyled';
import { useUser } from '../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const AddBook = () => {
    const {onAdd,onEdit, setIsEdit, isEdit,data} = useUser()
    const {editID} = useParams()
    const navigate = useNavigate()
    const [text, setText] = useState(
        isEdit?
        data.find(item=>item.id === Number(editID))
        :
        {genre:'', title:'', author:'', bookcode:'' }
        )
    const {genre, title, author, bookcode} = text

    const changeInput =e=>{
        const {value,name} = e.target
        setText({...text, [name]:value})
    }
    const onSubmit = e=>{
        e.preventDefault()
        if(!title || !author || !bookcode) return
        if(isEdit){
            onEdit(text, editID)
        }else{
            onAdd(text)
        }
        setIsEdit(false)
        navigate('/')
    }
    console.log(text)
    return (
        <AddBookWrap>
            <Header/>
            
            <div className="inner">
            <h2>도서 목록 추가</h2>
                <div className="book-input">
                    <form className="book-form" onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="genre">장르</label>
                            <input type="text" id='genre' placeholder='북 장르입력 (소설)' value={genre} name='genre' onChange={changeInput} />
                        </p>
                        <p>
                            <label htmlFor="title">제목</label>
                            <input type="text" id='title' placeholder='북 제목입력 (종이여자)' value={title} name='title' onChange={changeInput} />
                        </p>
                        <p>
                            <label htmlFor="author">저자</label>
                            <input type="text" id='author' placeholder='저자 입력 (기욤뮈소)' value={author} name='author' onChange={changeInput} />
                        </p>
                        <p>
                            <label htmlFor="bookcode">책 코드</label>
                            <input type="text" id='bookcode' placeholder='책 코드 입력 (000001)' value={bookcode} name='bookcode' onChange={changeInput} />
                        </p>
                        {/* <p className='btnWrap'><button className='btn' type='submit'>추가</button></p> */}
                        <p className='btnWrap'>
                            {
                                isEdit?
                                <>
                                    <button className='btn' type='submit'>수정</button>
                                    <button className='btn' type='button' onClick={()=>navigate('/')}>취소</button>
                                </>
                                :
                                <button className='btn' type='submit'>{isEdit ? '수정' : '추가'}</button>
                            }
                        </p>
                    </form>
                </div>
            </div>
        </AddBookWrap>
    );
};

export default AddBook;