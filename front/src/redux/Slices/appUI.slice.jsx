import { createSlice } from "@reduxjs/toolkit";


const appUI = createSlice({
    name:"appUI",
    initialState:{
        isExpanded:false,
        isDark:false
    },
    reducers:{
        switchSidebar:(state,action)=>{
            state.isExpanded = !state.isExpanded;
        },
        switchTheme:(state,action)=>{
            state.isDark = !state.isDark;
        }
    }
});

export const {switchSidebar,switchTheme} = appUI.actions;

export default appUI.reducer;