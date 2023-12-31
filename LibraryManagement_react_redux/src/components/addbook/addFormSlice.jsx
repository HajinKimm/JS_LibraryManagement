import {createSlice} from '@reduxjs/toolkit'
import bookdata from '../../assets/api/bookdata'

const initialState ={
    text:{genre:'', title:'', author:'', bookcode:''},
    no:localStorage.getItem('no')?
        JSON.parse(localStorage.getItem('no')) :22,
    data: localStorage.getItem('data')?
            JSON.parse(localStorage.getItem('data')): bookdata,
    sort:[
        {id:1, name:'최신순', category:'id', isOn:true},
        {id:2, name:'장르순', category:'genre', isOn:false},
        {id:3, name:'제목순', category:'title', isOn:false},
        {id:4, name:'저자순', category:'author', isOn:false},
        {id:5, name:'코드순', category:'bookcode', isOn:false},
    ],
    isEdit:false
}

export const addFormSlice = createSlice({
    name:'addBookForm',
    initialState,
    reducers:{
        isEditChange(state, action){
            state.isEdit = action.payload
        },
        sortBy(state,action){
            const {category, id} = action.payload
            state.sort = state.sort.map(item=>item.id === id?{...item, isOn:true}:{...item, isOn:false})
            
            if(category === 'id'){
                state.data.sort((a,b)=>b.id-a.id)
            }
            if(category === 'genre'){
                state.data.sort((a,b)=>a.genre.localeCompare(b.genre))
            }
            if(category === 'title'){
                state.data.sort((a,b)=>a.title.localeCompare(b.title))
            }
            if(category === 'author'){
                state.data.sort((a,b)=>a.author.localeCompare(b.author))
            }
            if(category === 'bookcode'){
                state.data.sort((a,b)=>a.bookcode.localeCompare(b.bookcode))
            }
        },
        changeInput(state, action){
            const { genre, title, author, bookcode } = action.payload;
            state.text = {genre, title, author, bookcode};
        },
        addBook(state, action){
            const { genre, title, author, bookcode } = action.payload;
            state.no++
            state.data = [...state.data, {id:state.no, genre, title, author, bookcode}]         
            localStorage.setItem('data', JSON.stringify(state.data))
            localStorage.setItem('no', JSON.stringify(state.no))
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

            //데이터가 없으면 no리셋
            if(state.data.length===0){
                state.no=0
                localStorage.setItem('no', JSON.stringify(state.no))
            }
        }
    }
})
export const {changeInput,addBook,editBook ,delBook,sortBy, isEditChange} = addFormSlice.actions
export default addFormSlice.reducer