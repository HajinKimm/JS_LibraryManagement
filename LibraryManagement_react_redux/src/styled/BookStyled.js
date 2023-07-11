import { createSubscription } from 'react-redux/es/utils/Subscription';
import styled from 'styled-components'
const mainColor = '#675D50';
const fontColor = '#F6F1E9';
const pointColor = '#ABC4AA';
const inner = {
    width:'1400px',
    margin:'auto',
    boxSizing:'border-box',
    position:'relative'

}
const h2 = {
        fontSize: '30px',
        fontWeight: 700,
        marginBottom: '30px',
        textIndent: '30px',
        color:`${mainColor}`
}
export const HeaderWrap = styled.div`
    background: ${mainColor};
    .inner{
        ${inner}
        height: 150px;
        h1{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            cursor: pointer;
            a{
                color: ${fontColor};
                line-height: 150px;
                font-size: 45px;
                font-weight: 700;
            }
        }
        .topMenu{
            display: flex;
            position: absolute;
            top: 50%; right: 0;
            transform: translateY(-50%);
            
            li{
                box-sizing: border-box;
                width: 125px;
                text-align: center;
                margin-left: 0px;
                font-size: 18px;
                a{
                    position: relative;
                    
                    &::after{
                        content: "";
                        transition: 0.5s;
                        display: block;
                        position: absolute;
                        top: -5px;left: -20px;
                        width: 10px;height: 10px;
                        background: ${pointColor};
                        border-radius: 50%;
                        transform: scale(0);
                    }
                    &:hover::after{
                        transform: scale(1);
                    }
                    &.on{
                        &::after{
                        content: "";
                        display: block;
                        position: absolute;
                        top: -5px;left: -20px;
                        width: 10px;height: 10px;
                        background: ${pointColor};
                        border-radius: 50%;
                        transform: scale(1);
                    }
                    }
                    color:${fontColor};
                    font-size: 18px;
                }
            }
        }
    }

`
export const BookListWrap = styled.div`
    .inner{
        ${inner}
        padding: 100px 0px;

        h2{
            ${h2}
            span{
                font-size: 18px;
            }
        }
        .sorBy{
            position: absolute;
            top: 120px;right: 0;
            button{
                margin-left: 10px;
                padding: 5px 10px;
                background: transparent;
                border: 1px solid ${mainColor};
                border-radius: 3px;
                color: ${mainColor};
                box-sizing: border-box;
                cursor: pointer;
                &:hover, &.on{
                    background:${mainColor};
                    color: #fff;
                    border: 1px solid ${mainColor};
                }

            }
        }
        .book-list {
            width: 100%;
            box-sizing: border-box;
            padding: 10px 0px;

            .book-table {
                width: 100%;
                caption{display: none;}
                .genre{width: 10%;}
                .title, .author {width: 30%;}
                .bookcode {width:15%}
                .del{width: 10%;} 
                th,
                td {
                    color: ${mainColor};
                    text-align: center;
                    height: 60px;
                    vertical-align: middle;
                    font-size: 18px;
                }
                td{
                    padding: 5px;
                    &:nth-child(2){
                        font-weight: 700;
                        /* text-align: start; */
                    }

                }
                
                th {
                    
                    border-bottom: 2px solid ${mainColor};
                    border-top: 2px solid ${mainColor};
                    font-size: 21px;font-weight: 600;
                }
                tr:nth-child(odd) td {
                    background: ${fontColor};
                }
                tr:last-child{
                    border-bottom: 2px solid ${mainColor};

                }

                button {
                    width: 35px;
                    height: 35px;
                    border: none;
                    background: ${mainColor};
                    color: ${fontColor};
                    border-radius: 3px;

                    &:first-child {
                        margin-right: 10px;
                    }
                }
            }
        }
        .paging{
            text-align: center;
            margin-top: 20px;
            i{
                font-size: 20px;
                vertical-align: middle;
                margin: 0px 5px;
            }
            span{
                font-size: 20px;
                margin: 0px 5px;
                padding: 0px 10px;
                display: inline-block;
                &.on{
                    background: ${pointColor};
                    border-radius: 50%;
                    color: #fff;
                }
            }
        }   
    }
`

export const AddBookWrap = styled.div`
    .inner{
        ${inner}
        padding: 100px 0px;

        h2{
            ${h2}
        }
        .book-input {
            width: 100%;
            border: 1px solid ${fontColor};
            box-sizing: border-box;
            padding: 100px;
            .book-form {
                
                p {
                    margin-bottom: 50px;
                    color: ${mainColor};
                    label {
                        width: 100px;
                        display: inline-block;
                        margin-bottom: 10px;
                        font-weight: 700;
                        font-size: 20px;
                        margin-right: 30px;
                    }
            
                    input {
                    width: 1050px;
                    height: 60px;
                    border: 1px solid ${mainColor};
                    padding: 0 20px;
                    box-sizing: border-box;
                    font-size: 18px;
                    &::placeholder{
                            font-size: 18px;
                            color: ${mainColor};
                        }
                    }
                }
        
                .btnWrap{
                    text-align: center;
                    margin-bottom: 0;
                    .btn {
                        width: 300px;
                        height: 50px;
                        text-align: center;
                        background: ${mainColor};
                        border: none;
                        color:${fontColor};
                        font-size: 18px;
                        margin-top: 20px;
                        cursor: pointer;
                        font-weight: 700;
                        border-radius: 25px;
                        &:nth-child(2n){
                            margin-left: 30px;
                        }
                    }

                }
            }
        }
  
    }
`

export const LoginWrap = styled.div`
    .inner{
        ${inner}
        padding: 100px 0px;
        h2{
            ${h2}
        }
        span{
            display: block;
            font-size: 18px;
            margin-bottom: 10px;
        }
        .form{
            width: 100%;
            border: 1px solid ${fontColor};
            box-sizing: border-box;
            padding: 100px;
            
            .formWrap{
                width: 560px;
                margin: auto;
                padding-bottom: 30px;
                p{
                    color: ${mainColor};
                    height: 50px;
                    vertical-align: middle;
                    font-size: 20px;
                    margin-bottom: 40px;
                    label{
                        width: 100px;display:inline-block; 
                        color: ${mainColor};
                    }
                    input{
                        width: 400px;
                        height: 50px;
                        font-size: 18px;
                        padding: 0px 10px;
                        box-sizing: border-box;
                        &::placeholder{
                            font-size: 18px;
                        }
                    }
                }
                .question{
                    border-top: 1px solid ${fontColor};
                    text-align:center;
                    padding-top: 50px;
                    margin-top: 50px;
                    font-size: 25px;
                    font-weight: 700;
                }
                .loginInfo{
                    border-bottom: 1px solid ${fontColor};
                    text-align:center;
                    padding-bottom: 50px;
                    margin-bottom: 75px;
                    font-size: 25px;
                    font-weight: 700;
                }
                span{
                    
                    color: ${mainColor};
                }
            }
            .btnWrap{
                    text-align: center;
                    .btn {
                        text-align: center;
                        background: ${mainColor};
                        border: none;
                        color: ${fontColor};
                        font-size: 18px;
                        margin-top: 20px;
                        cursor: pointer;
                        font-weight: 700;
                        border-radius: 5px;
                        width: 250px;
                        height: 50px;
                        &:nth-child(2n){
                            margin-left: 70px;
                        }
                    }

                }
        }
    }
`

export const FooterWrap = styled.div`
/* height: 150px; */
background: ${mainColor};
    color: ${fontColor};
    ul{
        display: flex;
        padding-top: 100px;
        margin-bottom: 50px;
        justify-content: center;
        li{
            margin-right: 100px;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                top: 50%;right: -50px; transform : translateY(-50%);
                display: block;
                width: 1px;height: 16px;
                background: ${pointColor};
            }
            &:last-child{
                margin-right: 0;
                &::after{
                    display: none;
                }
            }
            a{
                color:${fontColor}
            }
        }
    }
    span{
        display: block;
        text-align: center;
        padding-bottom: 50px;
    }
`