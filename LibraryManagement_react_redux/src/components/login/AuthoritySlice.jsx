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
        loginInput(state,action){
            const {email, password} = action.payload
            state.text = {email, password}
            
        },
        onLogin(state, action){
            const {email, password} = action.payload
            const userLog = {
                id: 'a1234',
                email
            }
            if(password==='1234'){
                localStorage.setItem('userLog',JSON.stringify(userLog))
                state.text = {id:userLog.id, email, password}
                state.userLogin = true
            }
            
        },
        onLogout(state,action){
            state.userLogin = false
            localStorage.removeItem('userLog')
        }
    }
})

export const {loginInput, onLogin,onLogout} = authoritySlice.actions
export default authoritySlice.reducer