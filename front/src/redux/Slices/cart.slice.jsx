import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[],

    },
    reducers:{
        addToCart : (state,action)=>{       
            const product = action.payload;
            const pIndex = state.cartItems.findIndex(p=>p._id === product._id);
            if(pIndex >= 0){
                state.cartItems[pIndex].quantity += 1;
            }else{
                const tempProduct = {
                    ...product,
                    quantity:1
                }
                state.cartItems.push(tempProduct);
            }
        },
        removeFromCart: (state,action)=>{
            const product = action.payload;
            const pIndex = state.cartItems.findIndex(p=>p._id === product._id);
            if(state.cartItems[pIndex].quantity > 1 ){
                state.cartItems[pIndex].quantity -= 1;
            }else{
                state.cartItems.splice(pIndex,1)
            }
        },
        changeQuantity : (state,action)=>{
            const { product , newQuantity } = action.payload;    
            const pIndex = state.cartItems.findIndex(p=>p._id === product._id);
            if(newQuantity == 0){      
                state.cartItems.splice(pIndex,1)
            }else{
                state.cartItems[pIndex].quantity = newQuantity;
            }
            
            
        }
        
    }
});


export const {addToCart , removeFromCart , changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;