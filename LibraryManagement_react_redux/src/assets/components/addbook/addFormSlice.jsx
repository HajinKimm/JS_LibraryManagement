import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    text:{genre:'', title:'', author:'', bookcode:''},
    data: localStorage.getItem('data')?
            JSON.parse(localStorage.getItem('data')):
            [
                {id:1, genre:'소설', title:'개미', author:'베르나르 베르베르 ', bookcode:'000001'},
            ]
}
let no =3
export const addFormSlice = createSlice({
    name:'addBookForm',
    initialState,
    reducers:{
        changeInput(state, action){
            const { genre, title, author, bookcode } = action.payload;
            state.text = {genre, title, author, bookcode};
        },
        addBook(state, action){
            const { genre, title, author, bookcode } = action.payload;
            state.data = [...state.data, {id:no++, genre, title, author, bookcode}]         
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        editBook(state, action){
            const {text, editID } =action.payload;
            const { genre, title, author, bookcode } = text            
            state.data = state.data.map(item=>item.id===Number(editID)?{...item, genre, title, author, bookcode}:item)
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        delBook(state, action){
            state.data = state.data.filter(item=>item.id !== action.payload)
            localStorage.setItem('data', JSON.stringify(state.data))
        }
    }
})
export const {changeInput,addBook,editBook ,delBook, editInput} = addFormSlice.actions
export default addFormSlice.reducer