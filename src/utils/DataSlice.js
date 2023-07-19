import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"data",
    initialState:{
        user:{},
    },
    reducers:{
        updateuser:(state,action)=>{
            state.user = action.payload;
        },
    }
})

export const {updateuser} = DataSlice.actions;
export default DataSlice.reducer;