import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"data",
    initialState:{
        basket:[],
        user:[],
    },
    reducers:{
        updatebasket:(state,action)=>{
            
        },
        updateuser:(state,action)=>{

        },
    }
})

export const {updatebasket,updateuser} = DataSlice.actions;
export default DataSlice.reducer;