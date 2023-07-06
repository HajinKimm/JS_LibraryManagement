import React from 'react';
import { BookListWrap } from '../../styled/BookStyled';
import Header from '../main/Header';
import BookItem from './BookItem';
import { useDispatch, useSelector } from 'react-redux';
import { sortBy } from '../addbook/addFormSlice';
import BookSort from './BookSort';

const BookList = () => {
    const {data, sort} = useSelector(state=>state.addForm)
    const dispatch = useDispatch()
    return (
        <BookListWrap>
            <Header/>
            <div className="inner">
                <h2>도서 목록 &nbsp;&nbsp; <span> [ 총 {data.length}개 ]</span></h2>
                <p className='sorBy'>
                    {
                        sort.map(item=><BookSort key={item.id} item={item}/>)
                    }
                </p>
                <div className="book-list">
                    <table className='book-table'>
                        <caption>도서 관리 시스템</caption>
                        <colgroup>
                            <col className='genre' />
                            <col className='title' />
                            <col className='author' />
                            <col className='bookcode' />
                            <col className='del' />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>장르</th>
                                <th>제목</th>
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