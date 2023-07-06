import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from '../addbook/addFormSlice';

const BookSort = ({item}) => {
    const {id, name, category, isOn}=item
    const dispatch = useDispatch()
    return (
            <button onClick={()=>dispatch(sortBy({category, id}))}
                     className={item.isOn?'on':''}
            >
                {item.name}
            </button>
    );
};

export default BookSort;