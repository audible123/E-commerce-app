import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import DataSlice from "./DataSlice";
import ClickSlice from "./ClickSlice";

const store = configureStore({
    reducer:{
        cart:CartSlice,
        data:DataSlice,
        click:ClickSlice,
    },
})

export default store