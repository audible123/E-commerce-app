import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
        singleItem:"",
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        buy:(state,action)=>{
            state.singleItem = action.payload;
        },
        removeItem:(state,action)=>{
            state.item.pop();
        },
        clearcart:(state)=>{
            state.item=[];
        },
    },
    
})

export const {addItem,removeItem,clearcart,buy} = CartSlice.actions;
export default CartSlice.reducer;