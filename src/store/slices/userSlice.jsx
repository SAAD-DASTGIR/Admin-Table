import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUsers(state,action){},
        removeUsers(state,actions){},
        DeleteUsers(state,action){},
    }
})
export default userSlice.reducer