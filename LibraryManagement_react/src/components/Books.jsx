import React, { useRef, useState } from 'react';
import '../assets/css/Books.scss'
import BookForm from './BookForm';
import BookList from './BookList';
import Message from './Message';
import { useEffect } from 'react';
const Books = () => {
    const no = useRef(1)
    const [data, setData] = useState(()=>JSON.parse(localStorage.getItem('data')) ||[])
    const [msg,setMsg] = useState('메세지')
    const [isMsg,setIsMsg] = useState(false)
    const textRef = useRef()
    const [user, setUser] = useState({title:'', author:'', bookcode:''})
    const {title, author, bookcode} = user
    const [isEdit,setIsEdit] = useState(false)


    const changeInput=(e)=>{
        const {value, name}=e.target
        setUser({...user, [name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!title || !author || !bookcode) return
        if(isEdit){
            setIsEdit(false)
            setData(data.map(item=>item.id===user.id?user:item))
            setIsMsg(true)
            setMsg('도서가 수정 되었습니다.')
        }else{
            user.id = no.current++
            setData([...data, user])
            setIsMsg(true)
            setMsg('도서가 추가 되었습니다.')
        }
        setUser({title:'', author:'', bookcode:''})
        textRef.current.focus()
    }

    const onDel=(id)=>{
        setData(data.filter(item=>item.id !== id))
        setIsMsg(true)
        setMsg('도서가 삭제 되었습니다.')
    }
    const onEdit =(id)=>{
        setIsEdit(true)
        setUser(data.find(item=>item.id===id))
    }

    //localstorage
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))
    },[data])

    return (
        <section id='content' className='main-book'>
            <h2> 북카페 도서 관리 시스템 </h2>
            <div className="inner">
                <BookForm onSubmit={onSubmit} textRef={textRef} user={user} changeInput={changeInput} isEdit={isEdit}/>
                <BookList data={data} onDel={onDel} onEdit={onEdit}/>
            </div>
            <Message msg={msg} isMsg={isMsg} setIsMsg={setIsMsg}/>
            
        </section>
    );
};

export default Books;