import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { UserReducer } from './UserReducer';

const initialState = {
    // text:{title:'', author:'', bookcode:''},
    data: localStorage.getItem('data')
            ? JSON.parse(localStorage.getItem('data'))
            : [
                {id:1,genre:'(예시) 소설', title:'(예시) 종이여자', author:'(예시) 기욤뮈소', bookcode:'(예시) 000001'}
            ]
        }

const UserContext = createContext()
export const useUser = ()=> useContext(UserContext)

export const UserProvier = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    const {data} = state
    const no = useRef(data.length+1)
    const [isEdit , setIsEdit] = useState(false)

    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(data))
    },[data])

    //추가
    const onAdd = (text)=>{
        console.log(text)
        dispatch({type:'ADD' , text,  id:no.current++})
    }
    //삭제
    const onDel = (id)=>{
        dispatch({type:'DEL' , id})
    }
    //수정
    const onEdit = (currentData,editID)=>{
        dispatch({type:'EDIT' , currentData, id:Number(editID)})
    }
    //

    const value = useMemo(()=>({data,onAdd,onDel,onEdit, isEdit, setIsEdit}),[data,onAdd,onDel,onEdit, isEdit, setIsEdit])
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
