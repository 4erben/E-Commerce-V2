import { configureStore } from "@reduxjs/toolkit";
import appUI from "./Slices/appUI.slice";

const store = configureStore({
    reducer:{
        appUI: appUI
    }
});

export default store;