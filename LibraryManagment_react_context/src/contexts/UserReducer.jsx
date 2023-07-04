export const UserReducer = (state, action)=>{
    switch(action.type){
        case 'ADD' :
            const text = action.text 
            return {...state, data:[...state.data , { id:action.id, title:text.title, author:text.author, bookcode:text.bookcode }]}
        case 'DEL' : return {...state, data:state.data.filter(item=>item.id !== action.id)}
        case 'EDIT' : 
            const current = action.currentData
            return {...state, data: state.data.map(item=>item.id===action.id?{...state, id:action.id, title:current.title, author:current.author, bookcode:current.bookcode }:item)}
        default : return state
    }
}