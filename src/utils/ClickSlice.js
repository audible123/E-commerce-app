import { createSlice } from "@reduxjs/toolkit";

const ClickSlice = createSlice({
    name:"click",
    initialState:{
        menuopen:false,
    },
    reducers:{
        toggleMenu: (state)=> {
            state.menuopen = !state.isMenuOpen; 
        },
        closeMenu: (state)=> {
            state.menuopen = false;
        }
    }

})

export const {toggleMenu,closeMenu} = ClickSlice.actions;
export default ClickSlice.reducer;