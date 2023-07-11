import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, delBook, isEditChange } from '../addbook/addFormSlice';
import { useNavigate} from 'react-router-dom';

const BookItem = ({item}) => {
    const {genre, title, author, bookcode, id} = item
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userLogin} =useSelector(state => state.authority)

    return (
        <tr>
            <td> {genre}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                {
                    userLogin?
                    <>
                        <button onClick={() => {dispatch(changeInput(item)) , navigate(`/editbook/${id}`), dispatch(isEditChange(true))}}>
                            <i className="xi-pen"></i>
                        </button>
                        <button onClick={() => dispatch(delBook(id))}><i className="xi-trash"></i></button>
                    </>
                        :
                    <>
                        <button onClick={() => navigate(`/login`)}>
                            <i className="xi-pen"></i>
                        </button>
                        <button onClick={() => navigate(`/login`)}><i className="xi-trash"></i></button>
                    </>
                }
            </td>
             
        </tr>
    );
};

export default BookItem;