import React from 'react';
import { useDispatch } from 'react-redux';
import { changeInput, delBook, editBook } from '../addbook/addFormSlice';
import { useNavigate} from 'react-router-dom';

const BookItem = ({item}) => {
    const {genre, title, author, bookcode, id} = item
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={() => {dispatch(changeInput(item)) , navigate(`/editbook/${id}`)}}><i className="xi-pen"></i></button>
                <button onClick={() => dispatch(delBook(id))}><i className="xi-trash"></i></button>
            </td>
             
        </tr>
    );
};

export default BookItem;