import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    userLogin:localStorage.getItem('userLog'),
    text :localStorage.getItem('userLog')?
        JSON.parse(localStorage.getItem('userLog')):
        {}
}

export const authoritySlice = createSlice({
    name:'authority',
    initialState,
    reducers:{
        onLogin(state, action){
            const {email, password} = action.payload
            const userLog = {email}
            localStorage.setItem('userLog',JSON.stringify(userLog))
            state.text = {id:1, email, password}
            state.userLogin = true
        },
        onLogout(state,action){
            state.userLogin = false
            localStorage.removeItem('userLog')
        }
    }
})

export const {loginInput, onLogin,onLogout} = authoritySlice.actions
export default authoritySlice.reducer