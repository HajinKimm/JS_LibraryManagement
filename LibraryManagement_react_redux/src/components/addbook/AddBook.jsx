import React, { useEffect, useState } from 'react';
import { AddBookWrap } from '../../styled/BookStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, changeInput, editBook, sortBy } from './addFormSlice';
import { useNavigate, useParams } from 'react-router-dom';

const AddBook = () => {
    const {editID} = useParams()
    const {text, isEdit, data, sort} = useSelector(state=>state.addForm)
    const {genre, title, author, bookcode} = text
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!genre || !title || !author || !bookcode)  return
        if(editID){
            dispatch(editBook({text, editID}))

        }else{
            dispatch(addBook(text))
        }
        navigate('/') 
    }
    const [currentSort, setCurrentSort] = useState(sort.find(item=>item.isOn))
    useEffect(()=>{
        dispatch(sortBy(currentSort))
    },[editID])
    return (
        <AddBookWrap>
            
            <div className="inner">
            <h2>도서 목록 추가</h2>
                <div className="book-input">
                    <form className="book-form" onSubmit={onSubmit}>
                        <p>
                            <label htmlFor="genre">장르</label>
                            <input type="text" id='genre' placeholder='북 장르입력 (소설)' value={genre} onChange={(e)=>dispatch(changeInput({...text, genre:e.target.value}))} />
                        </p>
                        <p>
                            <label htmlFor="title">제목</label>
                            <input type="text" id='title' placeholder='북 제목입력 (종이여자)' value={title}  onChange={(e)=>dispatch(changeInput({...text, title:e.target.value}))} />
                        </p>
                        <p>
                            <label htmlFor="author">저자</label>
                            <input type="text" id='author' placeholder='저자 입력 (기욤뮈소)' value={author}  onChange={(e)=>dispatch(changeInput({...text, author:e.target.value}))} />
                        </p>
                        <p>
                            <label htmlFor="bookcode">책 코드</label>
                            <input type="text" id='bookcode' placeholder='책 코드 입력 (000001)' value={bookcode}  onChange={(e)=>dispatch(changeInput({...text, bookcode:e.target.value}))} />
                        </p>
                        <p className='btnWrap'>
                        {
                            isEdit? 
                            <>
                                <button className='btn' type='submit'>수정</button>
                                <button className='btn' onClick={()=>navigate(-1)}>취소</button>
                            </>
                            :
                            <button className='btn' type='submit'>추가</button>

                        }
                        </p>
                    </form>
                </div>
            </div>
        </AddBookWrap>
    );
};

export default AddBook;