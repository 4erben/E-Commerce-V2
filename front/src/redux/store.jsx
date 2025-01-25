import { configureStore } from "@reduxjs/toolkit";
import appUI from "./Slices/appUI.slice";
import cartSlice from "./Slices/cart.slice";
import wishlistSlice from "./Slices/wishlist.slice";

const store = configureStore({
    reducer:{
        appUI: appUI,
        cart: cartSlice,
        wishlist: wishlistSlice
    }
});

export default store;