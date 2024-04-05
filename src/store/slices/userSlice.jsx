import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUsers(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUsers(state,action){
            state.splice(action.payload,1)
        },
        DeleteUsers(state,action){
           return []
        },
    }
})
export default userSlice.reducer // store
// export const addUsers.action
export const {addUsers,removeUsers,DeleteUsers} = userSlice.actions //body
