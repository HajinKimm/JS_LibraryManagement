import styled from 'styled-components'

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
        textIndent: '30px'
}
export const HeaderWrap = styled.div`
    background: #333;
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
                color: #fff;
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
                margin-left: 50px;
                color:#999;
                font-size: 18px;
                
                a{
                    color:#fff;
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

        .book-list {
            width: 100%;
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            padding: 100px;

            .book-table {
                width: 100%;
                caption{display: none;}
                .genre{
                    width: auto;
                }
                .title, .author {
                    width: 25%;
                }
                .del,  .bookcode {width:15%}
                th,
                td {
                    text-align: center;
                    height: 60px;
                    border-bottom: 1px solid #dcdcdc;
                    vertical-align: middle;
                    font-size: 18px;
                }

                th {
                    border-bottom: 2px solid #000;
                    font-size: 21px;font-weight: 600;
                }

                tr:nth-child(odd) td {
                    background: rgba(232, 247, 253, 0.5);
                }

                button {
                    width: 35px;
                    height: 35px;
                    border: none;
                    background: #000;
                    color: #fff;

                    &:first-child {
                        margin-right: 10px;
                    }
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
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            padding: 100px;
            .book-form {
                
                p {
                    margin-bottom: 50px;
            
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
                    border: 1px solid #999;
                    padding: 0 20px;
                    box-sizing: border-box;
                    font-size: 18px;
                    &::placeholder{
                            font-size: 18px;
                            color: #999;
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
                        background: #333;
                        border: none;
                        color: #fff;
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
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            padding: 100px;
            
            .formWrap{
                width: 560px;
                margin: auto;
                p{
                    height: 50px;
                    vertical-align: middle;
                    font-size: 20px;
                    margin-bottom: 40px;
                    label{
                        width: 100px;display:inline-block; 
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
                    border-top: 1px solid #dcdcdc;
                    text-align:center;
                    padding-top: 50px;
                    margin-top: 50px;
                    font-size: 25px;
                    font-weight: 700;
                }
            }
            .btnWrap{
                    text-align: center;
                    .btn {
                        text-align: center;
                        background: #333;
                        border: none;
                        color: #fff;
                        font-size: 18px;
                        margin-top: 20px;
                        cursor: pointer;
                        font-weight: 700;
                        border-radius: 25px;
                        width: 300px;
                        height: 50px;
                        &:nth-child(2n){
                            margin-left: 30px;
                        }
                    }

                }
        }
    }
`