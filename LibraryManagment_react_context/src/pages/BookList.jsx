import React from 'react';
import { BookListWrap } from '../styled/BookStyled';
import { useUser } from '../contexts/UserContext';
import BookItem from './BookItem';
import Header from '../components/Header';

const BookList = () => {
    const {data}= useUser()
    return (
        <BookListWrap>
            <Header/>
            <div className="inner">
                <h2>도서 목록</h2>
                <div className="book-list">
                    <table className='book-table'>
                        <caption>도서 관리 시스템</caption>
                        <colgroup>
                            <col className='title' />
                            <col className='author' />
                            <col className='bookcode' />
                            <col className='del' />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>장르</th>
                                <th>저자</th>
                                <th>코드</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <BookItem key={item.id} item={item}/>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </BookListWrap>
    );
};

export default BookList;