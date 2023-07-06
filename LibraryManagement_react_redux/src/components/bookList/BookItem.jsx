import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, delBook, isEditChange } from '../addbook/addFormSlice';
import { useNavigate} from 'react-router-dom';

const BookItem = ({item}) => {
    const {genre, title, author, bookcode, id} = item
    const {isEdit} = useSelector(state=>state.addForm)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <tr>
            <td> {genre}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={() => {dispatch(changeInput(item)) , navigate(`/editbook/${id}`), dispatch(isEditChange(true))}}>
                    <i className="xi-pen"></i>
                </button>
                <button onClick={() => dispatch(delBook(id))}><i className="xi-trash"></i></button>
            </td>
             
        </tr>
    );
};

export default BookItem;