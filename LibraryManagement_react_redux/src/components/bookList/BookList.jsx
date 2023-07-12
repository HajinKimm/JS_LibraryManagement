import React, { useState } from 'react';
import { BookListWrap } from '../../styled/BookStyled';
import BookItem from './BookItem';
import {  useSelector } from 'react-redux';
import BookSort from './BookSort';
import {AiOutlineDoubleLeft,AiOutlineLeft,AiOutlineRight, AiOutlineDoubleRight } from 'react-icons/ai'

const BookList = () => {
    const {data, sort} = useSelector(state=>state.addForm)
    //page
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5
    const pageLastNumber = Math.ceil(data.length / postsPerPage)
    const currentPageNumber = (current)=>{
        if( current >= 1 && current <= pageLastNumber){
            setCurrentPage(current)
        }
    }
    const firstPost = (currentPage-1)*postsPerPage
    const lastPost = firstPost + postsPerPage
    const currentPosts = data.slice(firstPost, lastPost)

    const paging = [...Array(pageLastNumber).keys()].map(item=>item+1)
    return (
        <BookListWrap>
            <div className="inner">
                <h2>도서 목록 &nbsp;&nbsp; <span> [ 총 {data.length}개 ]</span></h2>
                <p className='sorBy' onClick={()=>setCurrentPage(1)}>
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
                                currentPosts.map(item => <BookItem key={item.id} item={item}/>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='paging'>
                    <p>
                        <i onClick={()=>currentPageNumber(1)}><AiOutlineDoubleLeft/></i>
                        <i onClick={()=>currentPageNumber(currentPage-1)}><AiOutlineLeft/></i>
                        {
                            paging.map(item=><span key={item} onClick={()=>currentPageNumber(item)} className={currentPage===item?'on':''}>{item}</span>)
                        }
                        <i onClick={()=>currentPageNumber(currentPage+1)}><AiOutlineRight/></i>
                        <i onClick={()=>currentPageNumber(pageLastNumber)}><AiOutlineDoubleRight/></i>
                    </p>
                </div>
            </div>
        </BookListWrap>
    );
};

export default BookList;