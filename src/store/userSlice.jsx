import {createSlice} from '@reduxjs/toolkit'
const user = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUsers(state,action){},
        removeUsers(state,actions){},
        DeleteUsers(state,action){},
    }
})
export {user}