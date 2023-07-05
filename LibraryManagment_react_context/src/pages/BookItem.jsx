import React from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const BookItem = ({item}) => {
    const { onEdit, onDel, setIsEdit } = useUser()
    const { id,genre, title, author, bookcode } = item
    const navigate = useNavigate()
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={() => {setIsEdit(true), navigate(`/edit/${id}`) }}><i className="xi-pen"></i></button>
                <button onClick={() => onDel(id)}><i className="xi-trash"></i></button>
            </td>
        </tr>
    );
};

export default BookItem;