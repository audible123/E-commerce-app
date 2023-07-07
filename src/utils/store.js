import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import DataSlice from "./DataSlice";

const store = configureStore({
    reducer:{
        cart:CartSlice,
        data:DataSlice,
    },
})

export default store