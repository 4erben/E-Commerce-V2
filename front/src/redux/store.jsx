import { configureStore } from "@reduxjs/toolkit";
import appUI from "./Slices/appUI.slice";
import cartSlice from "./Slices/cart.slice";

const store = configureStore({
    reducer:{
        appUI: appUI,
        cart: cartSlice
    }
});

export default store;