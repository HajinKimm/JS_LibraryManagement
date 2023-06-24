import React, { useEffect } from 'react';
import '../assets/css/Message.scss'

const Message = ({msg, isMsg, setIsMsg}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsMsg(false)
        },1000)
        return()=>{
            clearTimeout(timer)
        }
    },[isMsg])
    return (
        <div className={`show ${isMsg?'on':''}`}>{msg}</div>
    );
};

export default Message;