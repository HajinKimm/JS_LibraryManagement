import React from 'react';

const BookItem = ({item,onDel, onEdit}) => {
    const {id,title,author,bookcode }=item
    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={()=>onEdit(id)}><i className="xi-pen"></i></button>
                <button onClick={()=>onDel(id)}><i className="xi-trash"></i></button>
                </td>
        </tr>
    );
};

export default BookItem;