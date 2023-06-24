import React, { useRef, useState } from 'react'; 
import '../assets/css/BookForm.scss'

const BookForm = ({onSubmit, textRef, user,changeInput ,isEdit}) => {
    const {title, author, bookcode}=user

    return (
        <div className="book-input">
            <form className="book-form" onSubmit={onSubmit}>
                <p>
                    <label htmlFor="title">장르</label>
                    <input type="text" id='title' placeholder='북 장르입력 (소설)' value={title} name='title' onChange={changeInput} ref={textRef}/>
                </p>
                <p>
                    <label htmlFor="author">저자</label>
                    <input type="text" id='author' placeholder='저자 입력 (임수정)' value={author} name='author' onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="bookcode">책 코드</label>
                    <input type="text" id='bookcode' placeholder='책 코드 입력 (00001)' value={bookcode} name='bookcode' onChange={changeInput} />
                </p>
                <p><button className='btn' type='submit'>{isEdit?'수정':'추가'}</button></p>
            </form>
        </div>
    );
};

export default BookForm;